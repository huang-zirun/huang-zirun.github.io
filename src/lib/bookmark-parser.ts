import { CategoryNode, LinkItem } from "@/types/nav";

/**
 * Parses Netscape bookmark HTML format (exported from Chrome, Edge, Safari, Firefox)
 */
export function parseNetscapeBookmarks(html: string): CategoryNode {
  const rootNode: CategoryNode = {
    id: "import-root-" + Date.now(),
    title: "导入的书签",
    children: [],
    links: [],
  };

  try {
    // Basic regex-based parser for DL / DT / H3 / A structures
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    function parseDL(dlElement: Element, parentCategory: CategoryNode) {
      const children = Array.from(dlElement.children);
      let currentFolder: CategoryNode | null = null;

      for (let i = 0; i < children.length; i++) {
        const el = children[i];
        if (el.tagName === "DT") {
          // Look for H3 (folder) or A (link)
          const h3 = el.querySelector(":scope > h3, :scope > H3");
          const a = el.querySelector(":scope > a, :scope > A");
          const nextDL = el.querySelector(":scope > dl, :scope > DL");

          if (h3) {
            const folderTitle = h3.textContent?.trim() || "未命名分类";
            const newFolder: CategoryNode = {
              id: "cat-" + Math.random().toString(36).substring(2, 9),
              title: folderTitle,
              children: [],
              links: [],
            };
            parentCategory.children.push(newFolder);
            currentFolder = newFolder;

            if (nextDL) {
              parseDL(nextDL, newFolder);
            }
          } else if (a) {
            const url = a.getAttribute("href");
            const title = a.textContent?.trim() || "未命名网址";
            const icon = a.getAttribute("icon") || "";
            if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
              const linkItem: LinkItem = {
                id: "link-" + Math.random().toString(36).substring(2, 9),
                title,
                url,
                favicon:
                  icon ||
                  `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`,
                createdAt: new Date().toISOString(),
              };
              parentCategory.links.push(linkItem);
            }
          }
        } else if (el.tagName === "DL" && currentFolder) {
          parseDL(el, currentFolder);
        }
      }
    }

    const mainDL = doc.querySelector("dl, DL");
    if (mainDL) {
      parseDL(mainDL, rootNode);
    }
  } catch (err) {
    console.error("Bookmark parsing error:", err);
  }

  return rootNode;
}

/**
 * Exports nav categories to Netscape Bookmarks HTML
 */
export function exportToNetscapeHTML(rootNode: CategoryNode): string {
  let html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file. -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>\n`;

  function renderCategory(cat: CategoryNode, indent: string) {
    html += `${indent}<DT><H3>${escapeHtml(cat.title)}</H3>\n`;
    html += `${indent}<DL><p>\n`;

    for (const link of cat.links) {
      html += `${indent}  <DT><A HREF="${escapeHtml(link.url)}" ICON="${escapeHtml(link.favicon)}">${escapeHtml(link.title)}</A>\n`;
    }

    for (const child of cat.children) {
      renderCategory(child, indent + "  ");
    }

    html += `${indent}</DL><p>\n`;
  }

  for (const child of rootNode.children) {
    renderCategory(child, "  ");
  }

  html += "</DL><p>\n";
  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
