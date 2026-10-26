# Cherry Nav · 树状个人导航站

> 一个朴素、轻快、类似 Cherry 笔记风格的树状个人网址与知识导航中心。
> 100% 原生支持 **GitHub Pages** 直接部署，无需任何第三方云函数或外部数据库！

---

## ✨ 核心特性

- 🌲 **Cherry 笔记风格目录树**：左侧多层级树状结构，支持无限级子分类、自由折叠/展开、拖拽与排序。
- ⚡ **纯前端智能链接解析**：输入任何 URL，自动异步抓取网页 Title 标题、Favicon 高清图标（带 Google 图标兜底）与 Description 简介，支持弹窗微调确认。
- 🔍 **全局毫秒级搜索**：支持顶部快速搜索与快捷键 `Cmd + K` / `Ctrl + K`，实时模糊匹配标题、网址、简介与标签。
- 💾 **GitHub 官方 REST API 自动持久化**：
  - 在网页管理面板中输入一次你的 GitHub Token（安全存储在本地浏览器）。
  - 在网页端添加、修改或删除链接时，直接调用 GitHub API 提交 commit 更新 `data/nav-tree.json`，并自动触发 GitHub Pages 构建部署！
  - 本地缓存即时生效，无需等待重新构建即可立刻看到修改后的链接。
- 📦 **书签导入与导出**：一键导出为标准 JSON 备份，或兼容主流浏览器（Chrome/Edge/Firefox/Safari）的 HTML 书签文件。
- 🌓 **深色模式**：内置暗黑/亮色主题，随系统自动切换或手动切换。

---

## 🚀 部署至 GitHub Pages

本项目已经配置好了官方的 GitHub Pages Actions 流水线，只需一次性开启仓库的 Pages 功能：

### 1. 开启 GitHub Pages
1. 打开你的 GitHub 仓库页面：`https://github.com/huang-zirun/huang-zirun.github.io`
2. 点击 **Settings** -> **Pages**。
3. 在 **Build and deployment** 下方的 **Source**，将默认的 `Deploy from a branch` 修改为 **`GitHub Actions`**。

### 2. 推送代码上线
在本地终端执行：
```bash
git push origin main
```
GitHub Actions 会自动打包并发布，1 分钟后即可访问你的主页：
👉 **https://huang-zirun.github.io**

---

## 💻 本地运行与调试

```bash
# 安装依赖
npm install

# 启动本地开发服务
npm run dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可体验。

---

## 📁 目录与文件说明

```
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages 官方静态构建与部署流水线
├── data/
│   └── nav-tree.json        # 核心导航树数据文件 (版本化管理)
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式与暗黑模式定义
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 导航站主页面
│   ├── components/          # 树状侧边栏、卡片流、弹窗交互组件
│   ├── lib/
│   │   ├── github-sync.ts   # 纯前端 GitHub REST API 自动提交流程
│   │   ├── link-parser.ts   # 纯前端跨域网页元数据与 Favicon 解析器
│   │   ├── tree-utils.ts    # 树结构增删改查算法
│   │   └── bookmark-parser.ts # 书签 HTML/JSON 导入导出
│   └── types/               # TypeScript 类型定义
└── _legacy_blog/            # 原 al-folio 博客历史文件备份 (亦保存在 backup/legacy-blog 分支)
```
