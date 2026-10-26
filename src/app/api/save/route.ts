import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { data, adminPassword } = body;

    if (!data || !data.root) {
      return NextResponse.json({ error: "Invalid navigation data structure" }, { status: 400 });
    }

    // Verify admin password
    const expectedPassword = process.env.ADMIN_PASSWORD;
    if (expectedPassword) {
      if (!adminPassword || adminPassword !== expectedPassword) {
        return NextResponse.json({ error: "口令错误，无权限保存更改" }, { status: 401 });
      }
    }

    // Update timestamp
    data.updatedAt = new Date().toISOString();
    const contentString = JSON.stringify(data, null, 2);

    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO || "huang-zirun/huang-zirun.github.io";
    const githubBranch = process.env.GITHUB_BRANCH || "main";
    const filePath = "data/nav-tree.json";

    // 1. If GitHub Token is configured, commit via GitHub API
    if (githubToken) {
      try {
        // Fetch current file SHA first
        const getUrl = `https://api.github.com/repos/${githubRepo}/contents/${filePath}?ref=${githubBranch}`;
        const getRes = await fetch(getUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: "application/vnd.github.v3+json",
          },
        });

        let sha: string | undefined = undefined;
        if (getRes.ok) {
          const fileData = await getRes.json();
          sha = fileData.sha;
        }

        // Put contents
        const putUrl = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;
        const putRes = await fetch(putUrl, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `chore: update navigation tree [${new Date().toISOString()}]`,
            content: Buffer.from(contentString, "utf8").toString("base64"),
            branch: githubBranch,
            sha,
          }),
        });

        if (!putRes.ok) {
          const errData = await putRes.json();
          console.error("GitHub API commit error:", errData);
          return NextResponse.json(
            { error: `GitHub API 提交失败: ${errData.message || putRes.statusText}` },
            { status: 500 }
          );
        }
      } catch (ghErr: unknown) {
        console.error("GitHub commit failed:", ghErr);
        return NextResponse.json(
          { error: `GitHub 同步异常: ${ghErr instanceof Error ? ghErr.message : "未知错误"}` },
          { status: 500 }
        );
      }
    }

    // 2. Also write to local filesystem if running in local environment
    try {
      const localFilePath = path.join(process.cwd(), filePath);
      await fs.writeFile(localFilePath, contentString, "utf8");
    } catch {
      // In read-only serverless environment like Vercel without local disk write, ignore
    }

    return NextResponse.json({ success: true, updatedAt: data.updatedAt });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "保存异常";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
