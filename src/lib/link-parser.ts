export interface ClientParseResult {
  title: string;
  url: string;
  favicon: string;
  description: string;
}

/**
 * Client-side webpage metadata parser using public CORS proxy & native DOMParser
 */
export async function parseLinkClient(rawUrl: string): Promise<ClientParseResult> {
  let targetUrl = rawUrl.trim();
  if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
    targetUrl = "https://" + targetUrl;
  }

  let domain = "";
  try {
    const parsed = new URL(targetUrl);
    domain = parsed.hostname;
  } catch {
    throw new Error("网址格式不正确");
  }

  const defaultFavicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  let title = domain.replace(/^www\./, "");
  let description = "";
  let favicon = defaultFavicon;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    // Use allorigins CORS proxy to fetch HTML content
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
    const res = await fetch(proxyUrl, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      const html = data.contents;

      if (html && typeof html === "string") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Parse Title
        const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute("content");
        const twitterTitle = doc.querySelector('meta[name="twitter:title"]')?.getAttribute("content");
        const docTitle = doc.title;
        if (ogTitle) {
          title = ogTitle;
        } else if (docTitle) {
          title = docTitle;
        } else if (twitterTitle) {
          title = twitterTitle;
        }

        // Parse Description
        const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute("content");
        const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content");
        const twDesc = doc.querySelector('meta[name="twitter:description"]')?.getAttribute("content");
        if (ogDesc) {
          description = ogDesc;
        } else if (metaDesc) {
          description = metaDesc;
        } else if (twDesc) {
          description = twDesc;
        }

        // Parse Favicon
        const iconEl =
          doc.querySelector('link[rel="icon"]') ||
          doc.querySelector('link[rel="shortcut icon"]') ||
          doc.querySelector('link[rel="apple-touch-icon"]');

        if (iconEl) {
          const href = iconEl.getAttribute("href");
          if (href) {
            try {
              favicon = new URL(href, targetUrl).href;
            } catch {
              favicon = defaultFavicon;
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn("Proxy fetch failed, using fallback domain info:", err);
  }

  return {
    title: title.trim(),
    url: targetUrl,
    favicon: favicon.trim(),
    description: description.trim(),
  };
}
