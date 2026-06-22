export const profileData = {
  // Section 1: Hero
  hero: {
    name: "李明",
    title: "高级产品经理",
    subtitle: "B端增长 / 数据驱动 / 中台方向",
    tags: ["985硕士", "3年+经验", "电商中后台", "供应链数字化"],
    slogan: "擅于用数据驱动复杂业务决策",
    value: "从0-1搭建 · 精细化运营 · 跨部门协同",
  },

  // Section 2: Skills
  skills: {
    hard: ["需求分析", "PRD撰写", "SQL数据分析", "用户调研", "埋点设计", "AB测试"],
    soft: ["跨部门沟通", "项目管理", "逻辑推演", "向上管理", "团队协作"],
    industry: "电商中后台 / 供应链数字化",
  },

  // Section 3: Projects
  projects: [
    {
      id: "A",
      name: "智能凑单推荐系统",
      company: "某头部电商平台",
      period: "2024.01 — 2024.08",
      star: {
        s: "大盘支付转化率长期低于行业均值18%，用户下单流失严重",
        t: "3个月内提升支付转化率15%，带动GMV增长",
        a: "重构下单流程，新增智能凑单推荐位，上线关联商品推荐算法",
        r: "转化率提升22%，6个月GMV增长800万",
        l: "抽象出「决策成本」评估模型，已沉淀为团队方法论",
      },
      tags: ["增长", "推荐算法", "数据分析"],
    },
    {
      id: "B",
      name: "供应链履约效率优化",
      company: "某电商中台部门",
      period: "2023.06 — 2023.12",
      star: {
        s: "仓库拣货效率低，订单履约时效差，客诉率高达3.2%",
        t: "3个月将履约时效缩短30%，客诉率降至1%以下",
        a: "梳理全链路履约流程，设计智能波次合单策略，重构仓库WMS系统交互",
        r: "履约时效缩短35%，客诉率降至0.8%，节约人力成本120万/年",
        l: "沉淀「履约健康度」监控看板，已推广至全公司3个仓库",
      },
      tags: ["降本增效", "中台", "项目管理"],
    },
    {
      id: "C",
      name: "商家后台0-1搭建",
      company: "某社交电商创业公司",
      period: "2022.03 — 2023.05",
      star: {
        s: "商家无独立管理后台，依赖Excel和人工沟通，效率极低",
        t: "3个月内从0搭建商家后台，实现核心流程线上化",
        a: "独立完成需求调研PRD撰写，协调前端后端测试3个团队，推进敏捷迭代",
        r: "支持500+商家入驻，后台日活200+，整体运营效率提升60%",
        l: "制定商家入驻SOP，输出标准PRD模板3份，赋能新团队复用",
      },
      tags: ["0-1搭建", "SaaS", "创业公司"],
    },
  ],

  // Section 4: Metrics
  metrics: {
    stats: [
      { value: "22%", label: "支付转化率提升", desc: "智能凑单项目" },
      { value: "800万", label: "GMV增长", desc: "6个月累计" },
      { value: "35%", label: "履约时效缩短", desc: "供应链优化项目" },
      { value: "120万", label: "年度成本节约", desc: "人力+运营成本" },
    ],
    awards: [
      { title: "年度绩效 S 级", org: "2024年度" },
      { title: "创新项目奖", org: "公司级" },
    ],
   沉淀: [
      { title: "「决策成本」评估模型", type: "方法论沉淀" },
      { title: "「履约健康度」监控看板", type: "工具沉淀" },
      { title: "PRD撰写SOP文档", type: "流程沉淀" },
    ],
  },

  // Section 5: Methodology
  methodology: [
    {
      title: "需求优先级",
      icon: "weight",
      points: ["RICE评分模型量化评估", "老板对齐四象限法", "ROI导向的需求筛选"],
    },
    {
      title: "数据驱动闭环",
      icon: "refresh",
      points: ["埋点设计规范化", "指标体系搭建", "AB测试科学验证", "复盘与迭代机制"],
    },
    {
      title: "高效项目管理",
      icon: "kanban",
      points: ["异步沟通减少周会", "周会时长压缩50%", "关键路径管理法", "风险预警机制"],
    },
  ],

  // Section 6: Personal Traits
  traits: [
    {
      title: "知识分享者",
      desc: "内部知识库核心共建者，曾受邀在产品沙龙做公开分享",
      icon: "share",
    },
    {
      title: "抗压与应变",
      desc: "大促期间0故障上线，48小时完成紧急需求从设计到上线",
      icon: "zap",
    },
    {
      title: "持续输入",
      desc: "近期精读《金字塔原理》《博弈论》，并将结构化思维应用于需求评审",
      icon: "book",
    },
  ],

  // Section 7: Vision
  vision: {
    status: "在职看机会",
    available: "可一个月内到岗",
    target: "高级产品经理（中台方向）",
    future: "深耕供应链数字化，成为懂业务的专家型PM",
    contact: {
      email: "liming.pm@email.com",
      phone: "138-xxxx-xxxx",
    },
  },
};
