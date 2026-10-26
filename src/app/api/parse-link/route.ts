import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Missing or invalid url parameter" }, { status: 400 });
    }

    let targetUrl = url.trim();
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://" + targetUrl;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(targetUrl);
    } catch {
      return NextResponse.json({ error: "Malformed URL" }, { status: 400 });
    }

    const domain = parsedUrl.hostname;
    const defaultFavicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

    let html = "";
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);

      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        },
        signal: controller.signal,
        redirect: "follow",
      });

      clearTimeout(timeout);

      if (response.ok) {
        html = await response.text();
      }
    } catch (fetchErr) {
      console.warn("Direct fetch failed, falling back to basic domain info:", fetchErr);
    }

    let title = "";
    let description = "";
    let favicon = "";

    if (html) {
      const $ = cheerio.load(html);

      title =
        $('meta[property="og:title"]').attr("content") ||
        $('meta[name="twitter:title"]').attr("content") ||
        $("title").first().text() ||
        "";

      description =
        $('meta[name="description"]').attr("content") ||
        $('meta[property="og:description"]').attr("content") ||
        $('meta[name="twitter:description"]').attr("content") ||
        "";

      const iconRel =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        $('link[rel="apple-touch-icon"]').attr("href");

      if (iconRel) {
        try {
          favicon = new URL(iconRel, targetUrl).href;
        } catch {
          favicon = defaultFavicon;
        }
      }
    }

    if (!title.trim()) {
      title = domain.replace(/^www\./, "");
    }

    if (!favicon) {
      favicon = defaultFavicon;
    }

    return NextResponse.json({
      title: title.trim(),
      url: targetUrl,
      favicon: favicon.trim(),
      description: description.trim(),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
