---
layout: page
permalink: /projects/
title: Experience
title_zh: 实践经历
description:
nav: true
nav_order: 1
---

<!-- _pages/projects.md -->
<!--
  使用说明：
  1. 实习经历 (Internships)：
     - 单位 Logo 外置在 <abbr> 胶囊左侧（<img class="abbr-external-logo" src="...">），且完全可选：
       * 如果需要显示 Logo：在 <abbr> 前面加上 <img class="abbr-external-logo" src="..." /> 即可（如 ByteDance）；
       * 如果不需要显示 Logo：直接不写 <img> 标签即可，胶囊依然严格左对齐、尺寸与下方项目/比赛完全一致。
  2. 项目经历 (Projects) 6 层结构：
     - 左侧徽章 (<abbr>)：主要编程语言（如 Python / Go / C++）
     - 第 1 行 (title)：项目名称
     - 第 2 行 (author)：作者
     - 第 3 行 (periodical)：维护起止时间
     - 第 4 行 (project-tech-stack)：技术栈独立小方框标签（<span class="tech-tag">...</span>）
     - 第 5 行 (periodical)：摘要式宏观描述（背景、设计思想、方法实现）
     - 第 6 行 (links，可选)：GitHub 仓库 / Website 按钮（不需要时直接省略 <div class="links">）
  3. 中英双语支持：
     - <span class="lang-en">...</span> 放英文（默认显示），<span class="lang-zh">...</span> 放中文（点击顶栏 ZH/EN 按钮切换）。
-->

<div class="publications">

  <h2 class="bibliography">
    <span class="lang-en">Internships</span>
    <span class="lang-zh">实习经历</span>
  </h2>
  <ol class="bibliography">
    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <img
            class="abbr-external-logo"
            src="{{ '/assets/img/logos/bytedance.svg' | relative_url }}"
            width="22"
            height="22"
            alt="ByteDance"
          />
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #E0EFFD;
              --venue-text-light: #2F6AA2;
              --venue-border-light: #C0DDF6;
              --venue-bg-dark: #243849;
              --venue-text-dark: #C8DFF2;
              --venue-border-dark: #3E607A;
            "
          >
            <div>ByteDance</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Backend Development Intern, Volcano Engine</span>
            <span class="lang-zh">后端开发实习生 · 火山引擎</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>ByteDance Inc. (Volcano Engine)</em>, Oct 2026 – Present</span>
            <span class="lang-zh"><em>字节跳动 · 火山引擎</em>，2026.10 – 至今</span>
          </div>
          <div class="project-tech-stack">
            <span class="tech-tag">Go</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Hermes ACP</span>
            <span class="tech-tag">Codex Runtime</span>
            <span class="tech-tag">Knowledge Distillation</span>
          </div>
          <div class="periodical">
            <span class="lang-en">(1) <b>Fornax Evaluation Self-Iteration Pipeline</b>: Built an automated diagnosis-to-verification loop in Go (<code>fornaxiteration</code>) for the daily 176-case Team Assistant benchmark. Used a 1M-context model to diff traces across current, previous-day, and weekly baseline runs into 10 root-cause categories, synthesized unit-test-backed fixes in an offline sandbox prioritized by <em>Go code/scripts &gt; Skills &gt; Prompts</em>, paired with interactive Feishu card approval and a two-stage fast replay on an isolated candidate instance and database—compressing regression verification from <b>4–6 hours to ~30 minutes</b>. (2) <b>Knowledge Base Distillation &amp; Cross-System Integration</b>: Co-built a two-tier knowledge architecture (<em>central navigation KB + repo-level subsystem KBs</em>) across <b>103 backend repositories</b> and core docs with automated group-thread knowledge capture (<code>knowledgecapture</code>); integrated business query CLIs, Argos log monitoring, and TCC config toolchains with dynamic routing, and curated a <b>171-case</b> Volcano benchmark suite to empower self-service rule verification and troubleshooting for PM, Operations, and Technical Operations (TO).</span>
            <span class="lang-zh">（1）<b>Fornax 评测自迭代进化链路</b>：针对团队助理每日 176 道核心题全量评测耗时 4–6 小时、人工排查日志与回归耗时高的问题，基于 Go 搭建「三期日志对比找根因 → 离线沙箱按 Go 代码/脚本 &gt; Skill &gt; 提示词优先级自动生成补丁与单测 → 飞书卡片交互确认 → 独立候选测试进程与隔离数据库两轮快速回放」闭环，将修复后的回归验证耗时从 <b>4–6 小时压缩至约 30 分钟</b>。（2）<b>知识库蒸馏与火山引擎业务接入</b>：遵循「代码定事实、文档定业务含义」搭建「中央导航知识库 + 子系统代码仓知识库」两层结构，完成火山侧 <b>103 个后端代码仓库</b>与核心文档知识蒸馏及群聊排障自动沉淀（<code>knowledgecapture</code>）；打通业务查询 CLI、Argos 日志监控与 TCC 配置中心动态路由，清洗并构建 <b>171 道</b>火山基准评测题，支撑产品、运营与技术运营（TO）在飞书群内自助核对跨系统规则与排查数据异常。</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <img
            class="abbr-external-logo"
            src="{{ '/assets/img/logos/bytedance.svg' | relative_url }}"
            width="22"
            height="22"
            alt="ByteDance"
          />
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #E0EFFD;
              --venue-text-light: #2F6AA2;
              --venue-border-light: #C0DDF6;
              --venue-bg-dark: #243849;
              --venue-text-dark: #C8DFF2;
              --venue-border-dark: #3E607A;
            "
          >
            <div>ByteDance</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Backend Development Intern, Feishu (Lark)</span>
            <span class="lang-zh">后端开发实习生 · 飞书</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>ByteDance Inc. (Feishu / Lark)</em>, Jun 2026 – Oct 2026</span>
            <span class="lang-zh"><em>字节跳动 · 飞书</em>，2026.06 – 2026.10</span>
          </div>
          <div class="project-tech-stack">
            <span class="tech-tag">Go</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Multica</span>
            <span class="tech-tag">Hermes ACP</span>
            <span class="tech-tag">Codex Runtime</span>
            <span class="tech-tag">MCP</span>
          </div>
          <div class="periodical">
            <span class="lang-en">(1) <b>Requirement Delivery Harness (Built on Open-Source Multica)</b>: Contributed to the Go + PostgreSQL workflow backend (<em>parent requirement issue → stage containers → in-stage DAG execution nodes</em>) with versioned artifacts; owned the <b>Feishu notification pipeline and Human-in-the-loop approval integration</b> (<b>49 commits</b>), implementing Squad assignment group notifications, creator DM binding, requester CC mirroring, and unified review cards for stage gate approval and rework. (2) <b>Team Assistant Development &amp; Fornax Evaluation Optimization</b>: Built the Fornax offline evaluation system from scratch across <b>5 core benchmark suites (254 cases)</b> evaluating both answers and MCP/tool trajectories; authored Skills for thread mining, weekly badcase backflow, and rubric linting, calibrated evaluators (human agreement <b>88.4% → 96.8%</b>), and developed daily evaluation scheduling and per-case attribution backend services. Guided by evaluation insights, split a 500+ line main prompt into a 30-line entry + 10 domain modules, offloaded low-frequency rules to two-tier on-demand Skills (Skill entry <b>38k → 14k chars</b>, main prompt <b>-23.1%</b>), and aligned a <b>63k-char</b> static prefix for KV Cache reuse—raising accuracy from <b>51.6% to 97.6%</b>, cache hit rate to <b>80.5%</b>, cutting uncached input tokens by <b>37.0%–41.7%</b>, latency by <b>10.7%</b>, and timeouts by <b>50%+</b>, while handling <b>71%</b> of daily Oncall tickets with a <b>95%</b> resolution rate.</span>
            <span class="lang-zh">（1）<b>研发需求交付 Harness 系统（基于开源 Multica 二开）</b>：参与「需求主单 → 阶段容器 → 阶段内 DAG 执行节点」后端工作流开发（Go + PostgreSQL），主要负责<b>飞书通知链路与 Human-in-the-loop（人工审批介入）环节</b>（<b>49 次提交</b>），完成工作流状态监听、Agent 小队接单群通知、创建人私聊绑定、需求提出人同步抄送及阶段产物摘要评审卡片统一渲染，打通后台异步 Agent 工作流与飞书群聊的人工审批闭环。（2）<b>团队助理研发与 Fornax 评测优化</b>：面向研发、产品、运营与 TO 在飞书群及 Oncall 群的规则查询与排障场景，<b>从零搭建 Fornax 离线评测体系</b>（覆盖 <b>5 个核心评测集共 254 题</b>，同时评估结果与工具调用过程），编写会话挖掘、每周 Badcase 增量回流与标注体检 Skill，校准判卷评估器（人机一致率 <b>88.4% → 96.8%</b>）并开发每日评测调度与逐题归因后端服务；结合评测定位的瓶颈收敛工具调用链路，将 500 多行主提示词拆为「30 行主入口 + 10 个业务模块」并下沉至两层按需读取 Skill（Skill 入口 <b>3.8 万字 → 1.4 万字</b>，主提示词缩短 <b>23.1%</b>），前置对齐 <b>6.3 万字</b>静态前缀复用 KV 缓存，使评测准确率从 <b>51.6% 提升至 97.6%</b>，缓存命中率达 <b>80.5%</b>，未命中缓存输入 Token 减少 <b>37.0%–41.7%</b>，单题耗时缩短 <b>10.7%</b>、超时率下降 <b>50%+</b>，支撑团队助理承接日常 <b>71%</b> 的 Oncall 工单且有效解决率达 <b>95%</b>。</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #FEE4E1;
              --venue-text-light: #9F3236;
              --venue-border-light: #F9C2BE;
              --venue-bg-dark: #4A2628;
              --venue-text-dark: #F4C4C2;
              --venue-border-dark: #7D3C40;
            "
          >
            <div>RUC</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Research Intern, MiaoShou Research Group</span>
            <span class="lang-zh">科研实习生 · 中国人民大学妙手课题组</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Renmin University of China</em>, Dec 2025 – Present</span>
            <span class="lang-zh"><em>中国人民大学 · 妙手课题组</em>，2025.12 – 至今</span>
          </div>
          <div class="project-tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">PyTorch</span>
            <span class="tech-tag">LoRA / Post-Training</span>
            <span class="tech-tag">DeBERTa</span>
            <span class="tech-tag">RAG</span>
            <span class="tech-tag">Agent Workflow</span>
          </div>
          <div class="periodical">
            <span class="lang-en">(1) <b>MiaoShou Framework (Execution-Grounded Empirical Paper Generation Agent)</b>: Refactored prototype scripts into a <em>Planner outline planning + statistical code execution + Agent chapter drafting &amp; verification</em> pipeline. Connected <b>6 economics and social science datasets</b> (CSMAR, CGSS, PSID, etc.) and <b>16+ econometric method plugins</b> (panel regression FE/RE, ARIMA, VAR, GARCH, PSM, RDD, etc.) to execute real Python statistical code and diagnostic tests (Hausman, ADF), storing tables, figures, and formulas in a unified Asset Pool; paired with dynamic outline planning, TF-IDF reference binding, rolling memory drafting, placeholder asset injection, and numerical fact-checking to generate complete empirical paper drafts in <b>~5 minutes</b>. Submitted a paper as <b>Second Author (advisor as First Author)</b> to <b><em>SCIENCE CHINA Information Sciences</em> (SCIS, Under Review)</b> and won <b>Second Prize at the 2026 Global AI Innovation, Governance, and Safety Competition</b>. (2) <b>Base Model Post-Training &amp; Fact Consistency for Quantitative Academic Text (Targeting ACL 2027)</b>: Curated <b>3,521 zero-overlap syntactic restructuring pairs</b> across <b>4 disciplines</b> (economics, CS, clinical biomedicine, statistical engineering) to fine-tune <code>Qwen3-4B-Base</code> via high-rank LoRA (<code>rank=128</code>) with single-epoch early stopping; constructed <b>12,580 contrastive samples</b> (multi-number cross-binding, subject-object reversal, polarity flips, qualifier deletions) to fine-tune an academic <code>DeBERTa-v3-Large</code> fact-consistency verifier (validation <b>AUROC 0.913 → 0.998</b>, human heavy inversion acceptance <b>49.2% → 98.3%</b>, <b>100% detection</b> of multi-number cross-binding), and jointly trained a multi-domain discriminator on <b>9,330 samples</b> (cutting false-positive rates on real human economics papers from <b>95.8% to 8.3%</b>). Achieved <b>100% numerical fidelity</b> across <b>465 test paragraphs</b> with sentence fallback rates reduced from <b>22.7%–26.1% to 0.89%–1.76%</b> and <b>80.0%–93.3%</b> joint pass rates across heterogeneous benchmarks.</span>
            <span class="lang-zh">（1）<b>妙手（MiaoShou Framework）—— 基于统计计算证据的经管实证论文生成 Agent</b>：针对通用大模型依赖参数记忆或表面文本检索导致统计结论缺乏真实计算支撑、长文上下文溢出及编造引文的问题，将零散脚本重构为「Planner 大纲规划 + 统计脚本执行 + Agent 分章写作与核查」流水线。对接 CSMAR、CGSS、PSID 等 <b>6 个真实数据集</b>，封装 <b>16+ 种计量经济学方法插件</b>（面板回归 FE/RE、ARIMA、VAR、GARCH、PSM、RDD 等）执行 Python 统计检验并将图表公式存入统一资产池（Asset Pool），结合动态大纲规划、TF-IDF 真实文献绑定、占位符图表注入与数值回溯核对，在<b>约 5 分钟内</b>自动生成完整实证论文初稿；以<b>第二作者（导师一作）</b>投稿至 <b>SCI 期刊 <em>SCIENCE CHINA Information Sciences</em>（SCIS，在审）</b>，并获 <b>2026 全球人工智能创新·治理·安全大赛二等奖</b>。（2）<b>定量学术文本的基座后训练与事实一致性研究（在研，拟投 ACL 2027）</b>：围绕在还原人类学术写作分布的同时保证定量事实与统计数据零出错，清洗构建经管、计算机、临床生物医学与统计工程 <b>4 学科共 3,521 对</b>零重叠句式重组样本，对 <code>Qwen3-4B-Base</code> 进行高秩 LoRA（<code>rank=128</code>）单轮早停微调；构造 <b>12,580 条</b>含同句多数值交叉错配、主宾对调、方向写反与删改限定词的对比样本分层微调学术版 <code>DeBERTa-v3-Large</code> 核查模型（验证集 <b>AUROC 0.913 → 0.998</b>，人类大幅倒装样本通过率 <b>49.2% → 98.3%</b>，同句多数值错配 <b>100% 识别</b>），并联合 <b>9,330 条</b>学术与新闻样本训练多领域判别头（人类真实经管论文误报率从 <b>95.8% 降至 8.3%</b>），在 <b>465 段</b>跨学科定量测试集上实现 <b>100% 统计数据零出错</b>，单句退回重抽率从 <b>22.7%–26.1% 降至 0.89%–1.76%</b>，多架构判别基准综合通过率达 <b>80.0%–93.3%</b>。</span>
          </div>
        </div>
      </div>
    </li>
  </ol>

  <h2 class="bibliography">
    <span class="lang-en">Projects</span>
    <span class="lang-zh">项目经历</span>
  </h2>
  <ol class="bibliography">
    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #DEF7F0;
              --venue-text-light: #2C7766;
              --venue-border-light: #B7EBDD;
              --venue-bg-dark: #243D37;
              --venue-text-dark: #C2E4DC;
              --venue-border-dark: #3D675D;
            "
          >
            <div>Python</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">DearAlpha: Quantitative Alpha Factor Mining Framework for WorldQuant Brain</span>
            <span class="lang-zh">DearAlpha：面向 WorldQuant Brain 的量化 Alpha 因子挖掘框架</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Apr 2026 – Sep 2026</em></span>
            <span class="lang-zh"><em>2026.04 – 2026.09</em></span>
          </div>
          <div class="project-tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">WorldQuant Brain API</span>
            <span class="tech-tag">Optuna TPE</span>
            <span class="tech-tag">Multi-LLM</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><b>Context:</b> Brute-force template enumeration on WorldQuant Brain quickly hits API rate limits on large search spaces and cannot discover new structures, whereas asking an LLM to write full alphas directly often leads to syntax errors or overfitted expressions lacking economic logic. <b>Actions:</b> Built 6 mining modes around an "AI generates raw signals, code enumerates and verifies, humans make final decisions" workflow: (1) integrated multi-backend LLMs (OpenRouter / Anthropic / Ollama) rotating across 10 economic themes (momentum, value, volatility, etc.) to propose template-free raw factor expressions; (2) implemented a 3-stage progressive pipeline (<em>1st-order time-series ops → 2nd-order cross-sectional grouping → 3rd-order trade-event filtering</em>) keeping Top-N expressions per field, designed two-pass layered pruning (<em>shortlisting Top-K fields with representative windows → full window grid</em>), and used Optuna TPE Bayesian sampling to tune window and decay parameters; (3) added checkpoint resumption (<code>progress.json</code>) and pre-submission checks (Sharpe, Fitness, Turnover, Prod Correlation) for rate-limited batch submission. <b>Results:</b> Two-pass pruning <b>cut redundant backtest simulations by ~50%</b> compared with full Cartesian enumeration, automating the local loop from LLM hypothesis generation and batch parameter tuning to quality-gated submission.</span>
            <span class="lang-zh"><b>背景：</b>在 WorldQuant Brain 挖量化因子时，传统模板笛卡尔积穷举在搜索空间变大后极易卡死在平台回测限流上且写不出新结构，而直接让大模型写完整因子又常因语法错误或缺乏经济学逻辑过拟合，需要一套把「大模型出思路」和「代码批量搜索调参」结合起来的自动化工具。<b>动作：</b>按「AI 生成裸信号、代码枚举验证、人做最终判断」开发 6 种挖掘模式：（1）接入多后端 LLM（OpenRouter / Anthropic / Ollama），按动量、价值、波动率等 10 类经济学主题轮询生成不受固定模板限制的原始因子表达式；（2）把经典挖掘流程做成「一阶时序算子 → 二阶截面分组 → 三阶交易事件过滤」三级流水线，各阶按 Sharpe 与 Fitness 阈值过滤且同字段仅留 Top-N 进入下一阶；针对大字段集设计「少量代表性窗口粗筛 Top-K 字段 → 完整窗口网格」两阶段剪枝，并用 Optuna TPE 贝叶斯采样对窗口长度和 Decay 等连续参数做自动精调；（3）实现基于进度快照（<code>progress.json</code>）的断点续跑，并在提交前自动校验 Sharpe、Fitness、Turnover 与线上相关性（Prod Correlation）以批量限速提交。<b>结果：</b>两阶段剪枝相比全量笛卡尔积穷举<b>减少了约 50% 的无效回测请求</b>；打通从 LLM 提因子假设、多模式批量回测调参、中断自动续跑到质量门控提交的本地自动化闭环。</span>
          </div>
          <div class="links">
            <a href="https://github.com/huang-zirun/DearAlpha" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #FFEED4;
              --venue-text-light: #9E540A;
              --venue-border-light: #FBD7A2;
              --venue-bg-dark: #4A321D;
              --venue-text-dark: #F3D3A3;
              --venue-border-dark: #7B5430;
            "
          >
            <div>Python</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">DevFlow Engine: AI-Driven Requirement-to-Delivery Workflow Engine</span>
            <span class="lang-zh">DevFlow Engine：AI 驱动的研发需求交付流程引擎</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Apr 2026 – May 2026</em></span>
            <span class="lang-zh"><em>2026.04 – 2026.05</em></span>
          </div>
          <div class="project-tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">LangGraph</span>
            <span class="tech-tag">Python AST</span>
            <span class="tech-tag">Tree-sitter</span>
            <span class="tech-tag">lark-cli WebSocket</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><b>Context:</b> Unconstrained single-agent coding often modifies files blindly without understanding repository structure, while natural-language requirements in Feishu groups usually require manual PRD writing, technical design, and coding across disconnected tools. Built a "fixed pipeline controls flow, specialized agents execute, humans approve key checkpoints" delivery engine (<b>2026 Feishu AI Campus Challenge AI Rising Star &amp; Final Interview Fast-Track</b>). <b>Actions:</b> (1) Used LangGraph to split delivery into 6 dedicated Agent stages (<em>intake → solution design → code generation → test generation &amp; execution → code review → delivery packaging</em>); connected <code>lark-cli</code> WebSocket to listen to Feishu group messages, auto-create PRD docs and interactive cards, and enforce 2 human approval checkpoints (after solution design and after code review, supporting Approve/Reject and checkpoint recovery); (2) extracted symbol definitions, references, and call chains via Python <code>ast</code> and <code>tree-sitter</code> (Python / JS / TS) before coding so agents understand existing code structure within workspace-bounded file tools, and added a read-only code review stage that automatically feeds blocking issues back to the coding node for one self-repair pass. <b>Results:</b> Enabled an end-to-end loop where sending a single requirement message in a Feishu group drives requirement clarification, solution approval, coding, unit testing, self-review repair, and merge-ready delivery packaging, preventing blind file edits and keeping code changes controllable.</span>
            <span class="lang-zh"><b>背景：</b>用纯自主 Coding Agent 开发复杂需求时，模型容易在不了解代码库结构的情况下乱改文件、一步错步步错；而飞书群里提的自然语言需求平时要靠人手写 PRD、拆技术方案再去改代码，中间链路很割裂。为此开发「固定流水线控流程、专门 Agent 干活、关键节点由人拍板」的需求交付引擎（获 <b>2026 飞书 AI 校园挑战赛 AI 新星证书及直通终面奖励</b>）。<b>动作：</b>（1）基于 LangGraph 将研发流程拆成「需求分析 → 方案设计 → 代码生成 → 测试生成与执行 → 代码评审 → 交付打包」6 个独立 Agent 阶段；通过 <code>lark-cli</code> WebSocket 长连接监听飞书群消息，自动生成 PRD 文档与交互卡片，并在「方案设计后」与「代码评审后」设置 2 处飞书人工审批检查点（支持 Approve / Reject 与断点恢复）；（2）在写代码前先用 Python <code>ast</code> 和 <code>tree-sitter</code>（支持 Python / JS / TS）提取代码库符号定义、引用关系与调用链，让方案与代码 Agent 先看懂现有代码结构再动手，并限制文件工具仅能在工作区目录内读写；在代码评审阶段采用只读审查，发现阻塞性 Bug 时自动把评审意见塞回代码生成节点重跑一次自修复。<b>结果：</b>实现「在飞书群发一条需求消息，即可跑完需求澄清、方案审批、写代码跑单测、代码自审修复到产出合并交付包」的完整闭环；通过 AST 索引和两处人工审批卡点，解决了单 Agent 乱改代码和过程不可控的问题。</span>
          </div>
          <div class="links">
            <a href="https://github.com/huang-zirun/lark-agent" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </li>
  </ol>

  <h2 class="bibliography">
    <span class="lang-en">Competitions</span>
    <span class="lang-zh">竞赛获奖</span>
  </h2>
  <ol class="bibliography">
    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #DEF7F0;
              --venue-text-light: #2C7766;
              --venue-border-light: #B7EBDD;
              --venue-bg-dark: #243D37;
              --venue-text-dark: #C2E4DC;
              --venue-border-dark: #3D675D;
            "
          >
            <div>RUC AI</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">2026 Global AI Innovation, Governance, and Safety Competition (Project: Maestro AI)</span>
            <span class="lang-zh">2026 全球人工智能创新·治理·安全大赛（参赛作品：妙手 Maestro AI）</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> (Team Member)</span>
            <span class="lang-zh"><em>黄宇场</em>（团队成员）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Gaoling School of Artificial Intelligence, Renmin University of China</em>, Nov 2026</span>
            <span class="lang-zh"><em>中国人民大学高瓴人工智能学院主办</em>，2026.11</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>Second Prize</b> in the AI Agent Application Track (<b>10 track finalists</b> / <b>30 finalists</b> out of 118 teams worldwide)</span>
            <span class="lang-zh">荣获 <b>二等奖</b>（AI 智能体应用赛道，全球 118 支参赛队伍中 <b>30 支晋级决赛</b>）</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #ECE5FC;
              --venue-text-light: #5B41A2;
              --venue-border-light: #D7CAF6;
              --venue-bg-dark: #332A4D;
              --venue-text-dark: #DCD3F4;
              --venue-border-dark: #554679;
            "
          >
            <div>AI for Good</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">The 2nd Alibaba "AI for Good" Innovation Challenge (Project: Sonara)</span>
            <span class="lang-zh">阿里巴巴第二届“小有可为” AI 向善创新挑战赛（参赛作品：Sonara 声生万物）</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> (Team Member)</span>
            <span class="lang-zh"><em>黄宇场</em>（团队成员）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Alibaba Group &amp; Alibaba Philanthropy</em>, Sep 2026</span>
            <span class="lang-zh"><em>阿里巴巴 ATH 事业群、阿里巴巴公益、阿里云百炼联合发起</em>，2026.09</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>Open Source Contribution Award</b> in the Rural Education Track (<b>10 teams nationwide</b> out of 1,111 registered teams)</span>
            <span class="lang-zh">荣获 <b>开源贡献奖</b>（乡村教育赛道，全国 1,111 支参赛团队中评出 <b>10 项</b>）</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #E0EFFD;
              --venue-text-light: #2F6AA2;
              --venue-border-light: #C0DDF6;
              --venue-bg-dark: #243849;
              --venue-text-dark: #C8DFF2;
              --venue-border-dark: #3E607A;
            "
          >
            <div>Feishu AI</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">2026 Feishu AI Campus Challenge</span>
            <span class="lang-zh">2026 飞书 AI 校园挑战赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>ByteDance (Feishu / Lark)</em>, May 2026</span>
            <span class="lang-zh"><em>字节跳动 · 飞书（字节跳动校园招聘）主办</em>，2026.05</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>AI Rising Star Certificate</b> &amp; <b>Final Interview Fast-Track</b></span>
            <span class="lang-zh">荣获 <b>AI 新星证书</b> 及 <b>直通终面奖励</b></span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #FEE4E1;
              --venue-text-light: #9F3236;
              --venue-border-light: #F9C2BE;
              --venue-bg-dark: #4A2628;
              --venue-text-dark: #F4C4C2;
              --venue-border-dark: #7D3C40;
            "
          >
            <div>CMC 2025</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">The 17th Chinese Mathematics Competition (CMC)</span>
            <span class="lang-zh">第十七届全国大学生数学竞赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em></span>
            <span class="lang-zh"><em>黄宇场</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Chinese Mathematical Society (CMS)</em>, Nov 2025</span>
            <span class="lang-zh"><em>中国数学会（CMS）主办</em>，2025.11</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>First Prize in Guangdong Province (Top 5%)</b></span>
            <span class="lang-zh">荣获 <b>广东省一等奖（Top 5%）</b></span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #FFEED4;
              --venue-text-light: #9E540A;
              --venue-border-light: #FBD7A2;
              --venue-bg-dark: #4A321D;
              --venue-text-dark: #F3D3A3;
              --venue-border-dark: #7B5430;
            "
          >
            <div>CUMCM 2023</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)</span>
            <span class="lang-zh">全国大学生数学建模竞赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> (Team Member)</span>
            <span class="lang-zh"><em>黄宇场</em>（团队成员）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>China Society for Industrial and Applied Mathematics (CSIAM)</em>, Sep 2023</span>
            <span class="lang-zh"><em>中国工业与应用数学学会（CSIAM）主办</em>，2023.09</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>Second Prize in Guangdong Province</b></span>
            <span class="lang-zh">荣获 <b>广东省分赛二等奖</b></span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #DEF7F0;
              --venue-text-light: #2C7766;
              --venue-border-light: #B7EBDD;
              --venue-bg-dark: #243D37;
              --venue-text-dark: #C2E4DC;
              --venue-border-dark: #3D675D;
            "
          >
            <div>GE 2023</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">GE Lean &amp; Green Challenge</span>
            <span class="lang-zh">GE 精益绿色挑战赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> (Team Member)</span>
            <span class="lang-zh"><em>黄宇场</em>（团队成员）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>General Electric (GE)</em>, Jul 2023</span>
            <span class="lang-zh"><em>通用电气（GE）主办</em>，2023.07</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>National Champion</b></span>
            <span class="lang-zh">荣获 <b>全国冠军</b></span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #E5E8FA;
              --venue-text-light: #4550A1;
              --venue-border-light: #C9CEF2;
              --venue-bg-dark: #292E4C;
              --venue-text-dark: #D0D4F0;
              --venue-border-dark: #454D7A;
            "
          >
            <div>CUMCM 2022</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)</span>
            <span class="lang-zh">全国大学生数学建模竞赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> (Team Member)</span>
            <span class="lang-zh"><em>黄宇场</em>（团队成员）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>China Society for Industrial and Applied Mathematics (CSIAM)</em>, Sep 2022</span>
            <span class="lang-zh"><em>中国工业与应用数学学会（CSIAM）主办</em>，2022.09</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>Second Prize in Guangdong Province</b></span>
            <span class="lang-zh">荣获 <b>广东省分赛二等奖</b></span>
          </div>
        </div>
      </div>
    </li>
  </ol>

</div>
