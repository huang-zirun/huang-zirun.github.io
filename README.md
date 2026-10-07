# 个人主页 · al-folio + GitHub Pages

这套是 [al-folio](https://github.com/alshedivat/al-folio)（学术/技术个人站模板，16k+ star），
已经裁成「名片 + 博客」用得上的部分，强调色换成了北洋蓝。

和之前的单文件版本不一样：**这里没有 `index.html`**。站点是 Jekyll 源码，
要经过构建才能变成网页。构建全部交给 GitHub Actions，**你本地不用装 Ruby**。

---

## 一、先搞懂改动流程

```
改源码（本仓库里的 .md / .yml）
   → git push
   → GitHub Actions 自动构建（约 3～5 分钟）
   → 推到 gh-pages 分支
   → https://huang-zirun.github.io 更新
```

所以：**本地看不到成品，改完必须推上去才看得到**。这是这类模板的代价，
换来的是排版、深色模式、博客分页、RSS、引用格式化这些都替你做好了。

想在本地预览，三条路，按需选：

| 方式 | 要装什么 | 说明 |
|---|---|---|
| **不装，靠 Actions**（默认） | 无 | 改一点推一点，等 4 分钟。最省事 |
| Docker | Docker Desktop | al-folio 官方推荐，`docker compose up` 一条命令。重量级 |
| 本地 Ruby | Ruby 3.3 + DevKit + ImageMagick + Python + Node | Windows 上 `bundle install` 容易卡在原生扩展，**不建议** |

---

## 二、要改哪里

浏览器里按 `Ctrl+F` 搜 `[` —— 所有没填的地方都用方括号标出来了，约 60 处。
填完后页面上会直接出现「[一句话身份]」这种字样，所以**别原样上线**。

按重要性排：

| 文件 | 改什么 |
|---|---|
| `_config.yml` | `first_name` / `last_name`（顶栏和标题的名字）、`description`（搜索引擎和聊天窗口预览）、`keywords`、`icon`（标签页小图标 emoji） |
| `_config.yml` | `blog_name` / `blog_description`（博客页顶上的标题副标题）、`scholar.last_name` / `first_name`（论文列表里会把你的名字加粗，填**姓**和**名**） |
| `_pages/about.md` | 首页正文 + `subtitle` + `more_info`（头像下面那几行，办公室/城市） |
| `_data/socials.yml` | 邮箱、Google Scholar 等图标。**只有填了值的键才会出现**。GitHub 已经填了 `huang-zirun` |
| `assets/img/prof_pic.jpg` | 你的照片。放进去之后，把 `_pages/about.md` 里的 `image: prof_pic.svg` 改成 `image: prof_pic.jpg` |
| `_bibliography/papers.bib` | 论文。文件里有一段注释掉的模板，照着抄。没论文就先空着，/publications/ 页面是空的但不报错 |
| `_data/cv.yml` | 简历页 `/cv/` 的数据。RenderCV 格式，**字段名别改，只改值** |
| `_projects/` | 一个 `.md` 一个项目，自动出现在 /projects/ |
| `_news/` | 首页顶部的小动态 |
| `_posts/` | 博客文章。文件名必须 ASCII，格式 `2026-10-07-english-title.md`，中文标题写在 `title:` 那行 |

`url` 和 `baseurl` 已经填好了（`https://huang-zirun.github.io` + 空），**别动**，
这两个错了整站样式和链接都会 404。

### 关于内容的一条原则

只写有出处的经历。奖项、职务、论文、实习，没发生的就是空着，不要为了页面好看编。
空着比编好 —— 这站是给面试官和导师看的。

---

## 三、配色：北洋蓝在哪

在 **`_sass/_variables.scss`**，两行：

```scss
$purple-color: #00468c !default;  // 浅色主题的强调色 = 北洋蓝
$cyan-color:   #66a0d8 !default;  // 深色主题的强调色 = 提亮版
```

- `#00468C` 是天津大学现行标准（2012《TU VI 手册》：RGB 0/70/140，CMYK C100 M60 Y0 K30），对白底对比度 9.4:1
- **注意**：2011 年旧版手册的 `#003865` 已弃用，网上大量素材还在用旧值，别照抄
- 深色主题刻意用提亮的 `#66A0D8`：原色在 `#1c1c1d` 深底上只有 2.3:1，看不见；`#66A0D8` 有 6.2:1，过 AA
- 想换别的风味：天大辅助色 金黄 `#FFC800`、紫红 `#962800`、土棕 `#7D5014`、深绿 `#005A1E`

这两个变量是**唯一的入口**。al-folio v1.x 所有强调色（链接、按钮、导航、悬停、代码块底色）
都走 CSS 变量 `--global-theme-color`，而那个变量的值就来自这两行。改这里就够了，不用去翻 CSS。

### 为什么是这个文件

al-folio v1.x 的排版文件在 Ruby gem 里（`al_folio_core`），不在本仓库。
Jekyll 的规则是：站点里的 `_sass/_variables.scss` 优先于 gem 里的同名文件。
所以这个文件是 gem 那份的**本地副本 + 改了两行**。

**升级 gem 时要记得**：`Gemfile` 里锁的是 `al_folio_core = 1.0.15`。
如果哪天升级了版本号，把 gem 里新的 `_variables.scss` 重新复制一份过来再改这两行，
否则会漏掉新版新增的变量。（`_config.yml` 里 `theme: al_folio_core` 那行也别删。）

---

## 四、部署

### 网页端做法（al-folio 官方推荐）

1. 打开 <https://github.com/new?template_name=al-folio&template_owner=alshedivat>，
   仓库名填 `huang-zirun.github.io`，Public，创建
   —— 用 **Use this template**，**不要用 Fork**（Fork 会让你一不小心把个人站改动提 PR 给官方）
2. 上面建的是**未裁剪的原始模板**。要用本仓库这份裁好的，改走下面命令行做法

### 命令行做法（用本仓库这份）

```bash
cd /d/Projects/huang-zirun.github.io
git init
git add .
git commit -m "init: al-folio personal homepage"
gh repo create huang-zirun.github.io --public --source=. --push
```

然后**两件必须手动做的事**，少一件站点起不来：

1. 仓库 **Settings → Actions → General → Workflow permissions** → 选 **Read and write permissions** → Save
   （构建要把产物推到 `gh-pages` 分支，没写权限会失败）
2. 仓库 **Settings → Pages → Build and deployment → Source** → **Deploy from a branch** →
   分支选 **`gh-pages`**（不是 main！）→ 路径 `/` → Save

第一次 push 后去 **Actions** 标签页看 `Deploy site` 跑完（3～5 分钟），
约 1 分钟后访问 <https://huang-zirun.github.io>。

> `gh-pages` 分支是机器人维护的，别手动往上面改东西。你永远只改 `main`。

以后每次更新：

```bash
git add . && git commit -m "..." && git push
```

### 回滚

```bash
gh repo delete huang-zirun.github.io --yes    # 整个删掉，本地文件不受影响
```

---

## 五、我删掉了什么（以及为什么）

原版 al-folio 60MB / 200+ 文件，这份裁到 **515KB / 51 文件**。删的都是演示物料和上游工程文件：

- **演示内容**：33 篇示例博客、9 个示例项目、3 条示例动态、爱因斯坦的全套假资料
  （论文、简历、合著者、引用数缓存）。留着的害处是你会忘了它们不是你的，直接上线
- **演示大图**：`prof_pic.jpg` 2.3MB、`prof_pic_color.png` 14MB、`rhino.png`、12 张示例图
- **上游工程设施**：22 个 GitHub Actions（只留 `deploy.yml`）、Docker、devcontainer、
  Playwright 视觉回归测试、prettier/lighthouse/codeql、`bin/` 里的上游辅助脚本、仓库协作模板
  （ISSUE_TEMPLATE、PR 模板、stale bot）
- **`AGENTS.md` / `CLAUDE.md` / `.github/copilot-instructions.md` / `.github/agents` / `.github/instructions`**
  —— 这几个是 al-folio **维护者**写给 AI 编程助手的规则（要求跑 pre-commit、不许改 gem 拥有的路径等）。
  它们会被 Qoder/Copilot 自动读进上下文，在你这个仓库里只会捣乱。**如果你哪天 git pull 了上游，记得再删一次**
- **`external_sources`**（`_config.yml`）置空了。原本填着 al-folio 自己的 Medium RSS 和一篇 Google 博客，
  构建时会去抓**别人的文章**拼进你的博客列表

留着没删的：`docs/`（上游英文文档，`CUSTOMIZE.md` / `FAQ.md` / `TROUBLESHOOTING.md` 改站时很有用）、
`Gemfile` / `Gemfile.lock` / `package.json` —— **这三个一行没动**，构建依赖必须和上游锁死一致，
动了就是给自己找不可复现的坑。

---

## 六、常见坑

- **样式全无 / 图片 404**：`_config.yml` 的 `baseurl` 被改坏了。个人站必须是空字符串 `""`
- **Pages 显示 404**：Source 选成了 `main`。要选 `gh-pages`
- **Actions 报 `Permission denied`**：Workflow permissions 还是默认的 Read，改成 Read and write
- **推送了但没触发构建**：`deploy.yml` 只在改到 `.md`/`.yml`/`.html`/`.js`/`.liquid`/`.bib` 时触发；
  只改 `README.md` 不会构建（故意的）。急着重跑就去 Actions 页面点 **Run workflow**
- **首页一片空白**：`_pages/about.md` 正文全是 HTML 注释、还没写字。注释不显示
- **深色模式颜色不对**：不是 bug。见上面第三节
- **中文标题的博客链接乱码**：Jekyll 会对非 ASCII 文件名做转义。文件名用英文，中文放 `title:`
- **Google Fonts 连不上**：主题字体走 CDN，国内偶尔失败会退回系统字体，排版会变，属正常
