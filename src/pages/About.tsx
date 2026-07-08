import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { MapPin, Briefcase, GraduationCap, Award, Sparkles, Wrench, Brain } from 'lucide-react'

export default function About() {
  return (
    <Section
      id="about"
      title="关于我"
      description="认识这位热衷于用产品思维解决复杂问题的产品经理"
      label="简介"
    >
      <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16">
        {/* Bio Section */}
        <div className="space-y-8">
          <div className="prose prose-lg text-[var(--foreground)] leading-[1.85]">
            <p className="mb-6">
              你好，我是杨少平，目前在多益网络担任产品经理，3年ToB产品经验，主要聚焦AI应用落地。
            </p>
            <p className="mb-6">
              我主导过两个从0到1的AI产品：公司级AI翻译平台（翻译准确率从65%提升到90%+，服务2000+内部用户）和AI多场景风险检测系统（人工审核效率提升3倍，成本节省67%）。我习惯用"数据采集-训练-验证-迭代"的数据闭环驱动产品迭代，而不是凭感觉拍板。
            </p>
            <p>
              工作里我习惯扎进一线，和业务团队高频对齐真实痛点，确保产品设计和需求严丝合缝。我也长期实践Prompt工程与AI工具（Cursor、Workbuddy等），用AI把PRD、原型、数据获取的流程效率提升60%~80%，持续探索AI如何更好地融入产品设计。
            </p>
          </div>
          
          {/* Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border)]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <Briefcase size={14} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">当前职位</p>
                <p className="text-sm text-[var(--muted-foreground)]">多益网络 · AI产品经理</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={14} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">教育背景</p>
                <p className="text-sm text-[var(--muted-foreground)]">山东理工大学 · 数学</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">所在地</p>
                <p className="text-sm text-[var(--muted-foreground)]">广东广州</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <Award size={14} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">求职意向</p>
                <p className="text-sm text-[var(--muted-foreground)]">AI产品经理 · 全职</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Avatar & Contact */}
        <div className="flex flex-col items-center md:items-start">
          {/* Avatar placeholder */}
          <div className="w-48 h-48 rounded-lg bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center mb-8">
            <span className="font-['Playfair_Display'] text-6xl text-[var(--muted-foreground)]">杨</span>
          </div>
          
          {/* Name & Title */}
          <div className="text-center md:text-left mb-8">
            <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)] mb-2">
              杨少平
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] tracking-wide">
              产品经理 · 多益网络
            </p>
          </div>
          
          {/* Contact info */}
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm text-[var(--muted-foreground)]">
              <span className="font-medium text-[var(--foreground)]">邮箱：</span>
              1615602151@qq.com
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              <span className="font-medium text-[var(--foreground)]">电话：</span>
              19811733928
            </p>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)] mb-8">
          技能特长
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card accentTop hoverEffect>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center">
                <Sparkles size={14} className="text-[var(--accent)]" />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg font-normal text-[var(--foreground)]">
                产品能力
              </h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                从0到1产品规划与全生命周期设计
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                跨职能团队统筹，建立跨团队协作机制
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                数据闭环驱动迭代，用数据而非感觉做决策
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                系统交互设计与用户赋能运营
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                多团队协同推进，保障项目按期交付
              </li>
            </ul>
          </Card>
          <Card accentTop hoverEffect>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center">
                <Wrench size={14} className="text-[var(--accent)]" />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg font-normal text-[var(--foreground)]">
                工具技能
              </h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                Axure / 墨刀：原型与交互设计
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                Xmind：思维导图与需求梳理
              </li>
            </ul>
          </Card>
          <Card accentTop hoverEffect>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-md bg-[var(--accent)]/10 flex items-center justify-center">
                <Brain size={14} className="text-[var(--accent)]" />
              </div>
              <h4 className="font-['Playfair_Display'] text-lg font-normal text-[var(--foreground)]">
                AI应用
              </h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                大模型：PRD、测试用例、月报辅助生成
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                Prompt工程：Few-shot、角色设定调优
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                Cursor Vibecoding：原型搭建提效约70%
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                Workbuddy Agent：数据自动化提效约80%
              </li>
            </ul>
          </Card>
        </div>
        
        {/* Additional Skills */}
        <Card className="bg-[var(--accent)]/[0.03] border-[var(--accent)]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
              <span className="font-['Playfair_Display'] text-xl text-[var(--accent)]">+</span>
            </div>
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-normal text-[var(--foreground)] mb-2">
                其他能力
              </h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>· C/C++ 编程基础，获山东省第十三届蓝桥杯三等奖</li>
                <li>· CET-4，可熟练阅读英文技术文档</li>
                <li>· 校级奖学金多次，"互联网+"及创新创业比赛获奖</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Education */}
      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)] mb-8">
          教育背景
        </h3>
        <Card accentTop>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="font-['Playfair_Display'] text-xl font-normal text-[var(--foreground)]">
                山东理工大学
              </h4>
              <p className="text-[var(--muted-foreground)] mt-1">
                数学与应用数学（本科）
              </p>
            </div>
            <span className="text-sm font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] bg-[var(--muted)] px-3 py-1 rounded">
              2019 - 2023
            </span>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              主修课程：产品品牌设计、市场营销学、数学分析、高等代数、C语言基础、数据库理论、拓扑学等
            </p>
          </div>
        </Card>
      </div>
      
      {/* Self Evaluation */}
      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)] mb-8">
          自我评价
        </h3>
        <Card className="bg-[var(--muted)]/30">
          <div className="space-y-4 text-sm text-[var(--foreground)] leading-relaxed">
            <p>
              3年ToB产品经验，主导AI翻译平台（准确率65%→90%+，服务2000+用户）与AI风险检测系统（审核效率提升3倍、成本节省67%）从0到1落地，熟悉LLM应用落地全流程与数据闭环设计。
            </p>
            <p>
              通过Prompt工程将PRD/月报等材料生成效率提升约60%；用Cursor将原型搭建效率提升约70%；用Workbuddy实现数据采集自动化提效约80%，持续关注AI前沿动态，具备快速学习能力与自我驱动力。
            </p>
          </div>
        </Card>
      </div>
    </Section>
  )
}
