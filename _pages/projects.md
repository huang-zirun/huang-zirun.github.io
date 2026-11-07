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
       * 如果需要显示 Logo：在 <abbr> 前面加上 <img class="abbr-external-logo" src="..." /> 即可（如示例 1 ByteDance）；
       * 如果不需要显示 Logo：直接不写 <img> 标签即可，胶囊依然严格左对齐、尺寸与下方项目/比赛完全一致（如示例 2 AI Lab）。
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
    <!-- 示例 1：带外置单位 Logo 的实习经历（先外置 Logo，再标准尺寸胶囊） -->
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
            <span class="lang-en">Software Engineering Intern, Infrastructure & Core Systems</span>
            <span class="lang-zh">软件研发实习生 · 基础架构与核心系统</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em>, mentored by Alex Smith</span>
            <span class="lang-zh"><em>黄宇场</em>，导师：Alex Smith</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>ByteDance Inc., Beijing, China</em>, Jun 2026 – Sep 2026</span>
            <span class="lang-zh"><em>字节跳动 · 中国北京</em>，2026.06 – 2026.09</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Redesigned the high-throughput streaming ingestion pipeline with zero-copy batching, reducing cluster CPU usage by <b>28%</b> and P99 latency from <b>120ms to 45ms</b>.</span>
            <span class="lang-zh">重构高吞吐流式数据接入流水线，引入零拷贝与批量聚合机制，将集群单机 CPU 开销降低 <b>28%</b>，P99 延迟由 <b>120ms 降至 45ms</b>。</span>
          </div>
        </div>
      </div>
    </li>

    <!-- 示例 2：不带外置 Logo 的实习经历（Logo 是可选的，不加 <img> 即可，胶囊尺寸与对齐保持完全一致） -->
    <li>
      <div class="row">
        <div class="col col-sm-2 abbr">
          <abbr
            class="badge rounded w-100"
            style="
              --venue-bg-light: #FEE7DC;
              --venue-text-light: #9E502E;
              --venue-border-light: #F8CDB9;
              --venue-bg-dark: #482D25;
              --venue-text-dark: #F1CCBB;
              --venue-border-dark: #77503F;
            "
          >
            <div>AI Lab</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Research & Engineering Intern, LLM Inference Systems</span>
            <span class="lang-zh">算法与系统工程实习生 · 大模型推理系统</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Huang Yuchang</em> and David Miller</span>
            <span class="lang-zh"><em>黄宇场</em>，合作导师：David Miller</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Foundational AI Research Lab</em>, Oct 2025 – Mar 2026</span>
            <span class="lang-zh"><em>前沿人工智能实验室</em>，2025.10 – 2026.03</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Optimized multi-modal LLM serving with AWQ/FP8 quantization and continuous batching, cutting time-to-first-token (TTFT) by <b>40%</b> on long-context workloads.</span>
            <span class="lang-zh">参与多模态大模型推理服务优化，结合 AWQ/FP8 权重量化与 Continuous Batching，将长上下文场景首字延迟（TTFT）降低 <b>40%</b>。</span>
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
