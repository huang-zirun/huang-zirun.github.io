import { NavData } from "@/types/nav";

function toBase64Unicode(str: string): string {
  return window.btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    })
  );
}

export async function commitToGitHub(
  data: NavData,
  token: string,
  repo = "huang-zirun/huang-zirun.github.io",
  branch = "main"
): Promise<{ success: boolean; message: string }> {
  const filePath = "data/nav-tree.json";
  data.updatedAt = new Date().toISOString();
  const contentString = JSON.stringify(data, null, 2);

  try {
    // 1. Get current file SHA
    const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`;
    const getRes = await fetch(getUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    let sha: string | undefined = undefined;
    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    } else if (getRes.status === 401 || getRes.status === 403) {
      throw new Error("GitHub Token 无效或缺少权限 (需要 repo 权限)");
    }

    // 2. Put updated contents
    const putUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
    const putRes = await fetch(putUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore: update navigation tree [${new Date().toISOString()}]`,
        content: toBase64Unicode(contentString),
        branch,
        sha,
      }),
    });

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(err.message || putRes.statusText);
    }

    return { success: true, message: "已成功提交到 GitHub 仓库并触发自动部署！" };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "GitHub 提交异常";
    throw new Error(msg);
  }
}
