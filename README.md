# Cherry Nav · 树状个人导航站

> 一个朴素、轻快、类似 Cherry 笔记风格的树状个人网址与知识导航中心。支持自动解析网页标题与 Favicon 图标，通过 GitHub API 或本地文件实现无数据库的自动版本化存储。

---

## ✨ 核心特性

- 🌲 **Cherry 笔记风格目录树**：左侧多层级树状结构，支持无限级子分类、自由折叠/展开、拖拽与排序。
- ⚡ **智能链接解析**：输入任何 URL，后台自动抓取网页 Title、Favicon 高清图标与 Description 简介，支持弹窗微调确认。
- 🔍 **全局毫秒级搜索**：支持顶部快速搜索与快捷键 `Cmd + K` / `Ctrl + K`，实时模糊匹配标题、网址、简介与标签。
- 💾 **无数据库 / Git 原生持久化**：
  - 本地开发：直接同步写入 `data/nav-tree.json`。
  - 线上生产：通过 GitHub REST API 自动提交 commit，免费享有完整的版本回滚和历史追踪能力。
- 🔐 **管理员口令保护**：普通访客纯只读浏览，输入管理密码解锁添加、编辑、删除与分类调整。
- 📦 **书签导入与导出**：一键导出为标准 JSON 备份，或兼容主流浏览器（Chrome/Edge/Firefox/Safari）的 HTML 书签文件。
- 🌓 **深色模式**：内置暗黑/亮色主题，随系统自动切换或手动切换。

---

## 🚀 本地运行

```bash
# 安装依赖
npm install

# 启动本地开发服务 (支持即时添加与保存)
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可使用。

---

## 🌐 部署至 Vercel

本项目为原生 Next.js App Router 架构，推荐一键部署至 [Vercel](https://vercel.com)：

1. 在 Vercel 导入此 GitHub 仓库。
2. 在 **Settings -> Environment Variables** 中配置以下环境变量：
   - `ADMIN_PASSWORD`：自定义的管理员操作口令（用于前台解锁管理与后端验证）。
   - `GITHUB_TOKEN`：具备仓库读写权限的 GitHub Personal Access Token（用于添加链接时自动提交 commit 回仓库）。
   - `GITHUB_REPO`：格式为 `username/repo`（例如 `huang-zirun/huang-zirun.github.io`）。
   - `GITHUB_BRANCH`：（可选，默认为 `main`）。
3. 点击 Deploy 即可上线！

---

## 📁 目录与文件说明

```
├── data/
│   └── nav-tree.json        # 核心导航树数据文件 (版本化管理)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── parse-link/  # 自动抓取网页元数据 (Title / Favicon / Desc)
│   │   │   └── save/        # 保存导航树并提交至 GitHub 仓库
│   │   ├── globals.css      # 全局样式与暗黑模式定义
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 导航站主页面
│   ├── components/          # 树状侧边栏、卡片流、弹窗交互组件
│   ├── lib/                 # 树结构操作算法与书签导入导出解析器
│   └── types/               # TypeScript 类型定义
└── _legacy_blog/            # 原 al-folio 博客历史文件备份 (亦保存在 backup/legacy-blog 分支)
```
