# Academic Homepage · 参考 Yixuan Even Xu 风格的学者主页

> 基于 **Jekyll + al-folio** 深度定制的极简学术个人主页，对标 [Yixuan Even Xu (CMU)](https://yixuanevenxu.github.io/) 的版式、排版与交互体验。
> 100% 原生支持 **GitHub Pages + GitHub Actions** 自动化构建与持续发布，无需本地配置复杂的 Ruby 环境！

---

## ✨ 核心视觉与交互特色

1. **衬线学术质感排版**：
   - 全文字体采用经典的 **Georgia, serif**，标题与品牌采用 **Book Antiqua / Palatino**，呈现出端庄、典雅的高品质学术刊物美感。
2. **顶栏社交快捷矩阵**：
   - 导航栏左侧直接呈现社交与学术图标（Email、微信浮窗、Google Scholar、DBLP、LinkedIn、X、GitHub）；
   - 右侧仅保留核心三栏：`About`、`Publications`、`CV` 以及**亮色/暗色/系统主题自适应切换按钮**（含定制双半圆日月图标）。
3. **首页动态滚动新闻（News）**：
   - 采用纯前端平滑滚动计算器（`assets/js/news-scroll.js`），固定展示 4 条最新动态，多余内容支持平滑局部滚动，不破坏页面整体黄金比例。
4. **精美会议/期刊标签与论文检索**：
   - 论文列表支持基于 `bib_search` 的毫秒级本地搜索；
   - 会议 Badge 采用定宽胶囊设计（7.5rem），自动适配明暗主题配色（已预置 NeurIPS、ICML、AAAI、TMLR、ArXiv Preprint 等顶级会议专有配色）；
   - 智能高亮本人姓名，并根据 `_data/coauthors.yml` 自动将合作者姓名渲染为其个人主页超链接；
   - 论文支持 ArXiv、PDF、Slides、Poster、Video、Code 等动作按钮与 Spotlight / Oral 荣誉徽标。
5. **简历直链**：
   - 顶栏 `CV` 直达 `/assets/pdf/CV.pdf`，无需繁重的多步跳转。

---

## 📁 目录结构与占位信息修改指南

所有内容均已填写清晰的**占位信息**，只需按以下指引替换为你自己的信息即可：

| 模块 | 文件位置 | 修改内容说明 |
|---|---|---|
| **个人基本信息** | `_config.yml` | 修改 `first_name`、`last_name`、`description`（一句话介绍）、`scholar.first_name`、`scholar.last_name`（用于论文列表中自动加粗本人） |
| **主页个人简介** | `_pages/about.md` | 个人介绍段落、研究兴趣方向、导师与毕业院校、个人爱好与外部链接，右侧卡片 `more_info`（办公室与邮箱） |
| **社交学术平台** | `_data/socials.yml` | 填入你的真实账号（邮箱、Google Scholar ID、DBLP、LinkedIn、X、GitHub 等）。不需要的行直接注释或删除 |
| **论文列表** | `_bibliography/papers.bib` | 标准 BibTeX 格式论文数据。带有 `selected={true}` 的论文会自动展示在首页，所有论文展示在 `/publications/` |
| **最新动态** | `_news/` | 每一个 `.md` 文件对应一条动态（按日期倒序展示）。包含 `date` 与内联内容 |
| **会议色彩标签** | `_data/venues.yml` | 可为你投递的学术会议或期刊自定义标签背景色与文字色（支持日间与夜间模式） |
| **合作者主页** | `_data/coauthors.yml` | 合作者的姓与主页链接，论文列表会自动识别并生成超链接 |
| **个人照片** | `assets/img/profile.jpg` | 首页右侧个人肖像照片（建议 3:4 比例的高清竖向照片） |
| **网站 Favicon** | `assets/img/icon.png` | 浏览器标签页小图标 |
| **微信二维码** | `assets/img/wechat.jpg` | 顶栏微信图标点击弹出的二维码图片 |
| **个人简历 PDF** | `assets/pdf/CV.pdf` | 顶栏 CV 按钮直接下载/预览的 PDF 简历文件 |

---

## 🚀 部署至 GitHub Pages

仓库已配置好针对 GitHub Pages 的全自动 Actions 工作流（`.github/workflows/deploy.yml`）：

### 1. 配置仓库 Pages 选项
1. 打开你的 GitHub 仓库页面：`https://github.com/huang-zirun/huang-zirun.github.io`
2. 点击顶部 **Settings** -> 左侧 **Pages**。
3. 在 **Build and deployment** 下方的 **Source**，选择 **`Deploy from a branch`**，并将分支选为 **`gh-pages`** / 根目录 **`/(root)`**。
4. 点击 **Save**。

### 2. 推送代码触发自动构建
在本地终端执行：
```bash
git add .
git commit -m "feat: replicate academic homepage inspired by yixuanevenxu"
git push origin main
```
GitHub Actions 会自动检出代码、准备 Ruby 3.3 与 ImageMagick 环境、编译 Jekyll 并将产物发布到 `gh-pages` 分支。构建完成后即可在主域名查看：
👉 **https://huang-zirun.github.io**

---

## 🔄 历史版本说明

- **树状个人导航站（Cherry Nav）**：已完整备份在本地与远程分支 `backup/cherry-nav`。如需切回导航站，只需执行：
  ```bash
  git checkout backup/cherry-nav
  ```
