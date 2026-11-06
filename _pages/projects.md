---
layout: page
permalink: /projects/
title: Projects
description:
nav: true
nav_order: 2
---

<!-- _pages/projects.md -->
<!--
  使用说明：
  1. 实习经历 (Internships)：
     - 左侧胶囊支持放置单位 Logo（<img class="badge-logo" src="...">，图片放在 assets/img/logos/ 下），不需要底部 PDF/Slides 按钮。
  2. 项目经历 (Projects)：
     - 标题支持直接带 GitHub 仓库链接，也支持纯文本标题；
     - 底部的 <div class="links">（如 GitHub / Website / PDF 按钮）是完全可选的：如果某个项目不需要挂仓库或链接，直接删掉或注释掉对应的 <div class="links">...</div> 即可。
-->

<div class="publications">

  <h2 class="bibliography">Internships</h2>
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
          <div class="title">Software Engineering Intern, Infrastructure & Core Systems</div>
          <div class="author"><em>Zirun Huang</em>, mentored by Alex Smith</div>
          <div class="periodical"><em>ByteDance Inc., Beijing, China</em>, Jun 2026 – Sep 2026</div>
          <div class="periodical">Redesigned the high-throughput streaming ingestion pipeline with zero-copy batching, reducing cluster CPU usage by <b>28%</b> and P99 latency from <b>120ms to 45ms</b>.</div>
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
          <div class="title">Research & Engineering Intern, LLM Inference Systems</div>
          <div class="author"><em>Zirun Huang</em> and David Miller</div>
          <div class="periodical"><em>Foundational AI Research Lab</em>, Oct 2025 – Mar 2026</div>
          <div class="periodical">Optimized multi-modal LLM serving with AWQ/FP8 quantization and continuous batching, cutting time-to-first-token (TTFT) by <b>40%</b> on long-context workloads.</div>
        </div>
      </div>
    </li>
  </ol>

  <h2 class="bibliography">Projects</h2>
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
          <div class="title">Distributed-Workflow: High-Throughput Asynchronous Task Orchestrator</div>
          <div class="author"><em>Zirun Huang</em> (Creator & Lead Maintainer)</div>
          <div class="periodical"><em>Open-Source Distributed Systems Project</em>, 2025 – 2026</div>
          <div class="periodical">Built a fault-tolerant distributed task scheduler based on Raft consensus and hierarchical timing wheels with work-stealing queues, achieving <b>1.4x</b> throughput over baseline engines (<b>400+ GitHub Stars</b>).</div>
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
          <div class="title">Kernel-Level Lock-Free Cache Allocator for Heterogeneous Memory</div>
          <div class="author"><em>Zirun Huang</em>, Alex Smith, and Elena Rostova</div>
          <div class="periodical"><em>Systems Engineering Project</em>, 2025</div>
          <div class="periodical">Designed a low-contention slab and page allocator for hybrid DRAM/NVM tiers, improving tail throughput by <b>2.1x</b> under concurrent mixed read-write benchmarks.</div>
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
          <div class="title">Cherry Nav: Hierarchical Knowledge & Bookmark Navigation Engine</div>
          <div class="author"><em>Zirun Huang</em></div>
          <div class="periodical"><em>Full-Stack Web Application</em>, 2026</div>
          <div class="periodical">Serverless tree-structured bookmark manager with automated metadata extraction, instant fuzzy search, and native GitHub REST API synchronization.</div>
          <div class="links">
            <a href="https://github.com/huang-zirun/huang-zirun.github.io" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </li>
  </ol>

  <h2 class="bibliography">Competitions</h2>
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
          <div class="title">ACM-ICPC International Collegiate Programming Contest Regional</div>
          <div class="author"><em>Zirun Huang</em>, Teammate A, and Teammate B</div>
          <div class="periodical"><em>ICPC Asia Regional Contest</em>, 2024</div>
          <div class="periodical">Awarded <b>Gold Medal</b></div>
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
          <div class="title">National College Computer System Capability Challenge (OS Kernel Track)</div>
          <div class="author"><em>Zirun Huang</em>, Alex Smith, and Elena Rostova</div>
          <div class="periodical"><em>Ministry of Education Computer Science Steering Committee</em>, 2025</div>
          <div class="periodical">Awarded <b>National First Prize (Top 2%)</b></div>
          <div class="links">
            <a href="https://github.com/huang-zirun" class="btn btn-sm z-depth-0" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </li>
  </ol>

</div>
