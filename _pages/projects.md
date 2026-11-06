---
layout: page
permalink: /projects/
title: Projects
title_zh: 项目与实习
description:
nav: true
nav_order: 1
---

<!-- _pages/projects.md -->
<!--
  使用说明：
  1. 实习经历 (Internships)：
     - 左侧胶囊支持放置单位 Logo（<img class="badge-logo" src="...">，图片放在 assets/img/logos/ 下），不需要底部 PDF/Slides 按钮。
  2. 项目经历 (Projects)：
     - 底部的 <div class="links">（如 GitHub / Website 按钮）是完全可选的：如果某个项目不需要挂仓库或链接，直接删掉对应的 <div class="links">...</div> 即可。
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
            <img class="badge-logo" src="{{ '/assets/img/logos/bytedance.svg' | relative_url }}" alt="ByteDance" />
            <div>ByteDance</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Software Engineering Intern, Infrastructure & Core Systems</span>
            <span class="lang-zh">软件研发实习生 · 基础架构与核心系统</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em>, mentored by Alex Smith</span>
            <span class="lang-zh"><em>Zirun Huang</em>，导师：Alex Smith</span>
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
            <img class="badge-logo" src="{{ '/assets/img/logos/ailab.svg' | relative_url }}" alt="AI Lab" />
            <div>AI Lab</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Research & Engineering Intern, LLM Inference Systems</span>
            <span class="lang-zh">算法与系统工程实习生 · 大模型推理系统</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em> and David Miller</span>
            <span class="lang-zh"><em>Zirun Huang</em>，合作导师：David Miller</span>
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
    <!-- 示例 1：挂有 GitHub 仓库按钮与在线链接的开源项目 -->
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
            <div>Go / Raft</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Distributed-Workflow: High-Throughput Asynchronous Task Orchestrator</span>
            <span class="lang-zh">Distributed-Workflow：高吞吐分布式异步任务编排与调度系统</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em> (Creator & Lead Maintainer)</span>
            <span class="lang-zh"><em>Zirun Huang</em>（独立作者 & 核心维护者）</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Open-Source Distributed Systems Project</em>, 2025 – 2026</span>
            <span class="lang-zh"><em>开源分布式系统项目</em>，2025 – 2026</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Built a fault-tolerant distributed task scheduler based on Raft consensus and hierarchical timing wheels with work-stealing queues, achieving <b>1.4x</b> throughput over baseline engines (<b>400+ GitHub Stars</b>).</span>
            <span class="lang-zh">基于 Raft 共识算法、多层时间轮与工作窃取队列设计的高可用分布式任务调度引擎，吞吐量达主流基线方案的 <b>1.4 倍</b>（累计获 <b>400+ GitHub Stars</b>）。</span>
          </div>
          <div class="links">
            <a href="https://github.com/huang-zirun/distributed-workflow" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="https://example.com" class="btn btn-sm z-depth-0" role="button">Website</a>
          </div>
        </div>
      </div>
    </li>

    <!-- 示例 2：不挂任何外部链接/GitHub 仓库的内部或课程系统项目（完全省略 <div class="links"> 即可） -->
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
            <div>C++ / Linux</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Kernel-Level Lock-Free Cache Allocator for Heterogeneous Memory</span>
            <span class="lang-zh">面向异构内存架构的内核级无锁缓存分配器</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em>, Alex Smith, and Elena Rostova</span>
            <span class="lang-zh"><em>Zirun Huang</em>, Alex Smith, Elena Rostova</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Systems Engineering Project</em>, 2025</span>
            <span class="lang-zh"><em>系统工程研发项目</em>，2025</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Designed a low-contention slab and page allocator for hybrid DRAM/NVM tiers, improving tail throughput by <b>2.1x</b> under concurrent mixed read-write benchmarks.</span>
            <span class="lang-zh">针对混合 DRAM/NVM 存储层级设计低锁竞争的 Slab 与页分配机制，在高并发混合读写基准测试中将尾延迟吞吐提升 <b>2.1 倍</b>。</span>
          </div>
        </div>
      </div>
    </li>

    <!-- 示例 3：仅挂 GitHub 仓库按钮的项目 -->
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
            <div>TypeScript</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">Cherry Nav: Hierarchical Knowledge & Bookmark Navigation Engine</span>
            <span class="lang-zh">Cherry Nav：树状知识索引与个人网址导航中心</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em></span>
            <span class="lang-zh"><em>Zirun Huang</em></span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Full-Stack Web Application</em>, 2026</span>
            <span class="lang-zh"><em>全栈 Web 应用项目</em>，2026</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Serverless tree-structured bookmark manager with automated metadata extraction, instant fuzzy search, and native GitHub REST API synchronization.</span>
            <span class="lang-zh">无后端树状书签与知识管理工具，支持网页元数据自动解析、毫秒级模糊检索及基于 GitHub REST API 的自动持久化同步。</span>
          </div>
          <div class="links">
            <a href="https://github.com/huang-zirun/huang-zirun.github.io" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
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
              --venue-bg-light: #FEE4E1;
              --venue-text-light: #9F3236;
              --venue-border-light: #F9C2BE;
              --venue-bg-dark: #4A2628;
              --venue-text-dark: #F4C4C2;
              --venue-border-dark: #7D3C40;
            "
          >
            <div>ICPC 2024</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">ACM-ICPC International Collegiate Programming Contest Regional</span>
            <span class="lang-zh">ACM-ICPC 国际大学生程序设计竞赛区域赛</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em>, Teammate A, and Teammate B</span>
            <span class="lang-zh"><em>Zirun Huang</em>，队友 A，队友 B</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>ICPC Asia Regional Contest</em>, 2024</span>
            <span class="lang-zh"><em>ICPC 亚洲区域赛</em>，2024</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>Gold Medal</b></span>
            <span class="lang-zh">荣获 <b>金奖 (Gold Medal)</b></span>
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
            <div>OS Comp</div>
          </abbr>
        </div>
        <div class="col-sm-8">
          <div class="title">
            <span class="lang-en">National College Computer System Capability Challenge (OS Kernel Track)</span>
            <span class="lang-zh">全国大学生计算机系统能力大赛（操作系统内核赛道）</span>
          </div>
          <div class="author">
            <span class="lang-en"><em>Zirun Huang</em>, Alex Smith, and Elena Rostova</span>
            <span class="lang-zh"><em>Zirun Huang</em>, Alex Smith, Elena Rostova</span>
          </div>
          <div class="periodical">
            <span class="lang-en"><em>Ministry of Education Computer Science Steering Committee</em>, 2025</span>
            <span class="lang-zh"><em>教育部高等学校计算机类专业教学指导委员会</em>，2025</span>
          </div>
          <div class="periodical">
            <span class="lang-en">Awarded <b>National First Prize (Top 2%)</b></span>
            <span class="lang-zh">荣获 <b>全国一等奖（前 2%）</b></span>
          </div>
          <div class="links">
            <a href="https://github.com/huang-zirun" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </li>
  </ol>

</div>
