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
            <span class="lang-en">DearAlpha: Intelligent Quantitative Alpha Factor Mining Framework</span>
            <span class="lang-zh">DearAlpha：面向 WorldQuant Brain 的智能量化 Alpha 因子挖掘框架</span>
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
            <span class="tech-tag">WorldQuant Brain API</span>
            <span class="tech-tag">Optuna TPE</span>
            <span class="tech-tag">Bayesian Optimization</span>
            <span class="tech-tag">Multi-LLM</span>
            <span class="tech-tag">Pandas</span>
          </div>
          <div class="periodical">
            <span class="lang-en">To address the massive search space, high simulation overhead of brute-force enumeration, and structural rigidity in quantitative factor discovery, this framework is built around an <b>"AI-driven hypothesis generation, programmatic verification, and human final judgment"</b> architecture. For structural discovery, it uses multi-backend LLMs guided by economic themes (momentum, value, volatility) to synthesize template-free raw alpha expressions; for systematic search and tuning, it combines a 3-stage progressive expansion pipeline (time-series operators, cross-sectional grouping, and trade-event conditioning), two-pass layered pruning (cutting redundant simulations by <b>~50%</b>), and Optuna TPE Bayesian hyperparameter optimization. Coupled with checkpoint resumption and multi-metric quality gates (Sharpe, Fitness, Turnover, and correlation filtering), it delivers an end-to-end automated workflow from factor generation to rate-limited submission.</span>
            <span class="lang-zh">针对量化因子挖掘中搜索空间庞大、纯模板穷举算力开销高且缺乏新结构探索能力的痛点，提出<b>「AI 直觉生成信号、代码系统枚举验证、人类做最终决策」</b>的混合架构设计思想。框架在信号发现层利用多后端 LLM 围绕动量、价值、波动率等经济学主题生成突破固定模板约束的裸信号表达式；在系统搜索与调优层集成三阶递进展开流水线（一阶时序变换 → 二阶截面分组 → 三阶交易事件过滤）、两阶段分层粗筛剪枝（削减约 <b>50%</b> 无效回测模拟）以及基于 Optuna TPE 的贝叶斯连续参数寻优；底层配套断点续跑状态机与多维质量门控（Sharpe、Fitness、Turnover 与相关性校验），实现从因子假设生成、自动化回测评估到限速提交的全链路闭环。</span>
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
            <span class="lang-en">DevFlow Engine: AI-Driven End-to-End Requirement-to-Delivery Pipeline</span>
            <span class="lang-zh">DevFlow Engine：AI 驱动的研发需求交付全流程引擎</span>
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
            <span class="tech-tag">LangGraph</span>
            <span class="tech-tag">Python AST</span>
            <span class="tech-tag">Tree-sitter</span>
            <span class="tech-tag">lark-cli WebSocket</span>
            <span class="tech-tag">JSON Schema</span>
            <span class="tech-tag">OpenAPI 3.0</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Addressing the gap between natural-language requirements and code delivery as well as the unreliability of unconstrained autonomous agents, this project introduces a <b>"deterministic pipeline skeleton, specialized agent execution, and human-in-the-loop governance"</b> architecture. It decomposes the software delivery lifecycle into a 6-stage state graph (intake, solution design, code generation, testing, code review, and delivery packaging) decoupled via strict versioned JSON contracts. In implementation, it combines incremental syntax-tree semantic indexing with workspace-sandboxed toolchains for context-aware coding, paired with a bounded review-to-code self-repair loop and dual Feishu approval checkpoints for controllable end-to-end delivery.</span>
            <span class="lang-zh">针对传统软件研发中自然语言需求到代码落地链路割裂、纯自主 Agent 在复杂工程中易失控偏离的问题，提出<b>「确定性流水线为骨架、专职智能体为执行单元、关键节点由人类决策」</b>的架构设计思想。系统通过有向状态图将研发全周期解耦为需求分析、方案设计、代码生成、测试验证、代码评审与交付打包 6 个阶段，并由严格的版本化 JSON 契约约束各阶段输入输出边界；在实现上结合增量代码库语义索引与受限工作区沙盒实现上下文感知的代码生成，同时引入评审阻塞缺陷自动回流修复机制与飞书双检查点审批状态机，完成从群聊需求输入到可交付代码产出的端到端可控闭环。</span>
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
