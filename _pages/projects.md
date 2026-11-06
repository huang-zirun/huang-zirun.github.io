---
layout: page
title: Projects & Experience
permalink: /projects/
description: Internships, Engineering Systems, Open Source & Competitions
nav: true
nav_order: 1
---

<!-- 提示：此页面专门用于展示你的实习经历、工程落地、开源项目及竞赛获奖。所有内容均为标准占位符，可根据你的实际情况增删改。 -->

<h2 class="mt-4 mb-4" style="border-bottom: 1px solid var(--global-divider-color); padding-bottom: 0.5rem;">
  💼 实习与工业实践 (Internships & Industry)
</h2>

<div class="projects-list">

  <!-- 实习条目 1 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #E0EFFD; --venue-text-light: #2F6AA2; --venue-border-light: #C0DDF6; --venue-bg-dark: #243849; --venue-text-dark: #C8DFF2; --venue-border-dark: #3E607A;">
        ByteDance
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[字节跳动 · 基础架构 / 核心业务研发实习生]</div>
      <div class="project-meta"><em>2026.06 – 2026.09 · [北京 / 上海]</em></div>
      <ul>
        <li><strong>核心职责与技术攻坚</strong>：负责[高并发流式处理 / 分布式调度 / 推荐基础架构]核心模块的设计与研发，重构数据接入流水线。</li>
        <li><strong>业务与性能收益</strong>：通过批量聚合与内存零拷贝技术，将集群单机 CPU 利用率降低 <strong>28%</strong>，P99 延迟由 <strong>120ms 降至 45ms</strong>，保障线上服务千万级 DAU 业务的平稳运行。</li>
        <li><strong>稳定性与自动化</strong>：编写高覆盖率单元测试与熔断降级策略，搭建全链路灰度发布监控体系，实现核心链路 0 故障交付。</li>
      </ul>
      <div class="tags">
        <span class="tag-pill">Go</span>
        <span class="tag-pill">Kubernetes</span>
        <span class="tag-pill">Kafka</span>
        <span class="tag-pill">gRPC</span>
        <span class="tag-pill">Prometheus</span>
      </div>
      <div class="links mt-2">
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">架构总结文档</a>
      </div>
    </div>
  </div>

  <!-- 实习条目 2 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #FEE7DC; --venue-text-light: #A3481F; --venue-border-light: #F9CABE; --venue-bg-dark: #4A2B20; --venue-text-dark: #F5C7B8; --venue-border-dark: #7A4533;">
        AI Lab
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[知名科技实验室 · 大模型工程 / 算法实习生]</div>
      <div class="project-meta"><em>2025.10 – 2026.03 · [远程 / 深圳]</em></div>
      <ul>
        <li><strong>推理加速与量化落地</strong>：参与多模态大模型本地化推理引擎调优，结合 AWQ / FP8 权重量化与 Continuous Batching，将长文本首字延迟降低 <strong>40%</strong>。</li>
        <li><strong>Agent 协同流水线</strong>：主导设计基于 DAG 调度的自主 Agent 评测工作流，实现自动化数据抓取、Prompt 演化与代码验证的闭环。</li>
      </ul>
      <div class="tags">
        <span class="tag-pill">Python</span>
        <span class="tag-pill">PyTorch</span>
        <span class="tag-pill">vLLM</span>
        <span class="tag-pill">TensorRT-LLM</span>
      </div>
      <div class="links mt-2">
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">技术报告</a>
      </div>
    </div>
  </div>

</div>

<h2 class="mt-4 mb-4" style="border-bottom: 1px solid var(--global-divider-color); padding-bottom: 0.5rem;">
  🚀 重点工程项目 & 开源贡献 (Engineering & Open Source)
</h2>

<div class="projects-list">

  <!-- 项目条目 1 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #FFEED4; --venue-text-light: #9E540A; --venue-border-light: #FBD7A2; --venue-bg-dark: #4A321D; --venue-text-dark: #F3D3A3; --venue-border-dark: #7B5430;">
        Open Source
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[Distributed-Workflow] · 高性能异步任务调度与编排系统</div>
      <div class="project-meta"><em>独立研发 · 核心负责人 · 2025 – 2026</em></div>
      <ul>
        <li><strong>系统架构</strong>：基于 Raft 共识算法与时间轮（Timing Wheel）设计的高可用分布式任务分发调度中间件，支持秒级百万任务吞吐。</li>
        <li><strong>技术亮点</strong>：自研双层优先级队列与工作窃取（Work-Stealing）调度机制，有效消除跨节点算力倾斜，在同等硬件下吞吐达到行业主流方案的 <strong>1.4x</strong>。</li>
        <li><strong>开源影响力</strong>：GitHub 累计收获 <strong>400+ Stars</strong>，被多家开源社区项目作为基础调度组件引用。</li>
      </ul>
      <div class="tags">
        <span class="tag-pill">Go</span>
        <span class="tag-pill">Raft</span>
        <span class="tag-pill">Redis</span>
        <span class="tag-pill">etcd</span>
      </div>
      <div class="links mt-2">
        <a href="https://github.com/huang-zirun" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">在线 Demo</a>
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">设计文档</a>
      </div>
    </div>
  </div>

  <!-- 项目条目 2 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #ECE5FC; --venue-text-light: #5B41A2; --venue-border-light: #D7CAF6; --venue-bg-dark: #332A4D; --venue-text-dark: #DFCFFC; --venue-border-dark: #625091;">
        System
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[Cherry Nav] · 树状个人网址与知识管理中心</div>
      <div class="project-meta"><em>开源全栈项目 · 2026</em></div>
      <ul>
        <li><strong>产品定位</strong>：纯前端驱动的高性能树状知识索引与个人导航站，100% 原生支持 GitHub Pages 静态部署与本地双向同步。</li>
        <li><strong>创新实现</strong>：集成纯前端网页元数据嗅探解析器与毫秒级模糊搜索，支持多层级无限树拖拽排序与标准浏览器书签导入导出。</li>
      </ul>
      <div class="tags">
        <span class="tag-pill">TypeScript</span>
        <span class="tag-pill">Next.js</span>
        <span class="tag-pill">Tailwind CSS</span>
        <span class="tag-pill">GitHub REST API</span>
      </div>
      <div class="links mt-2">
        <a href="https://github.com/huang-zirun" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">在线体验</a>
      </div>
    </div>
  </div>

</div>

<h2 class="mt-4 mb-4" style="border-bottom: 1px solid var(--global-divider-color); padding-bottom: 0.5rem;">
  🏆 竞赛荣誉与实践奖项 (Competitions & Awards)
</h2>

<div class="projects-list">

  <!-- 竞赛条目 1 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #DEF7F0; --venue-text-light: #1A755F; --venue-border-light: #B4EADB; --venue-bg-dark: #193830; --venue-text-dark: #B9ECE0; --venue-border-dark: #2F6F5E;">
        National 1st
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[全国大学生计算机系统能力大赛 (系统赛)] · 全国一等奖</div>
      <div class="project-meta"><em>教育部高等学校计算机类专业教学指导委员会 · 2025</em></div>
      <ul>
        <li><strong>赛题与成果</strong>：负责[异构硬件协同的编译优化 / OS 内核内存管理优化]赛道，带领团队完成内核级高性能缓存分配算法，在基准测试套件中取得全国排名前 <strong>2%</strong> 优异成绩。</li>
      </ul>
      <div class="links mt-2">
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">项目报告</a>
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">获奖证书</a>
      </div>
    </div>
  </div>

  <!-- 竞赛条目 2 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #FEE4E1; --venue-text-light: #9F3236; --venue-border-light: #F9C2BE; --venue-bg-dark: #4A2628; --venue-text-dark: #F4C4C2; --venue-border-dark: #7D3C40;">
        ICPC Gold
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[国际大学生程序设计竞赛 (ACM-ICPC)] · 区域赛金奖</div>
      <div class="project-meta"><em>ICPC Foundation · 2024</em></div>
      <ul>
        <li><strong>比赛概况</strong>：担任参赛队伍算法与数据结构主力队员，在 5 小时高压限时环境下高效解决图论、动态规划与高精度计算难题。</li>
      </ul>
      <div class="links mt-2">
        <a href="https://example.com" class="btn btn-sm z-depth-0" role="button" target="_blank">榜单证明</a>
      </div>
    </div>
  </div>

  <!-- 竞赛条目 3 -->
  <div class="row project-item">
    <div class="col col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="--venue-bg-light: #F1F3F5; --venue-text-light: #56606B; --venue-border-light: #D8DDE3; --venue-bg-dark: #30343A; --venue-text-dark: #D6DADE; --venue-border-dark: #515862;">
        Hackathon
      </abbr>
    </div>
    <div class="col-sm-10">
      <div class="project-title">[全球 AI 创客马拉松 (Hackathon)] · 最佳技术实现奖 (Top 3)]</div>
      <div class="project-meta"><em>AI Developer Community · 2025</em></div>
      <ul>
        <li><strong>作品简介</strong>：在 48 小时极限黑客松中主导研发[多端智能体语音助手]，结合本地轻量化模型与边缘端推理，实现 300ms 超低交互时延。</li>
      </ul>
      <div class="links mt-2">
        <a href="https://github.com/huang-zirun" class="btn btn-sm z-depth-0" role="button" target="_blank">Demo 演示</a>
      </div>
    </div>
  </div>

</div>
