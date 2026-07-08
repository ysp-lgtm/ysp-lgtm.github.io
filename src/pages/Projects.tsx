import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function Projects() {
  const projects = [
    {
      name: '自研AI翻译系统',
      role: '产品经理',
      period: '2023 - 至今',
      description: '依托公司全球化业务需求，打造公司级AI翻译平台，实现从0到1搭建与生态化落地，为内部办公及出海项目提供多语言翻译服务',
      highlights: [
        '主导产品从0到1搭建，跨部门统筹业务、算法、开发团队，搭建跨职能协作机制，制定《迭代管理规范》把控项目进度与质量',
        '设计双层语料体系：通用语料层（公开翻译语料+公司历史翻译数据）+ 场景专属语料层（游戏、出海专业术语），提升场景适配性',
        '建立"数据采集-训练-验证-迭代"数据闭环，联合算法团队持续提升翻译准确性',
        '运用Prompt工程优化翻译结果，支持中日英德等8+语言互译',
      ],
      result: '翻译准确率从65%提升至90%+，专业术语翻译准确率提升；服务2000+内部用户；替代外部翻译工具，为10+出海项目提供核心支撑',
    },
    {
      name: 'AI多场景风险检测系统',
      role: '产品经理',
      period: '2023 - 至今',
      description: '针对企业对外发文、沟通、游戏社区、微博社区四大核心场景，搭建公司级AI风险防控SaaS平台，实现企业合规管理从0到1的规模化落地',
      highlights: [
        '主导产品从0到1搭建，定义AI检测成功指标（准确率≥90%、误判率≤8%、审核效率提升≥3倍）',
        '联合算法、安全团队搭建敏感词库/数据库并动态更新，梳理场景专属风险维度',
        '建立"数据采集-模型训练-效果验证-迭代优化"数据闭环，实现风险全链路管控',
        '运用Prompt工程生成风险处置建议，提升审核效率与处置准确性，主导产品落地后的用户赋能与运营优化',
      ],
      result: 'AI检测准确率90%+；人工审核效率提升3倍（3分钟/条→<1分钟/条）；人工成本节省67%（审核团队6人→2人）；覆盖游戏、运营等核心部门',
    },
    {
      name: '对外风控系统',
      role: '产品经理',
      period: '2023 - 至今',
      description: '基于公司业务规模扩张的风控需求，打造企业级内部风险管控系统，实现对所有对外系统的全面风险管控',
      highlights: [
        '负责产品需求分析、功能设计、项目管理及风控策略制定，深入拆解对外使用系统的上下游流程，识别各环节潜在风险点',
        '设计并落地系统审批流、权限管控等核心功能，实现用户脱离原生系统在本系统内完成所有业务操作',
        '持续优化系统功能与交互，建立反馈渠道，持续迭代功能提升用户体验',
      ],
      result: 'Web端与客户端共接入100+系统；对300+重要账号实现全面管控，账号管控覆盖率100%；达成业务风险的有效管控',
    },
  ]

  return (
    <Section
      id="projects"
      title="项目经历"
      description="主导的核心产品项目"
      label="项目"
    >
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card key={index} accentTop hoverEffect>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)]">
                  {project.name}
                </h3>
                <p className="text-[var(--accent)] font-medium mt-1">{project.role}</p>
              </div>
            </div>
            
            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[var(--muted-foreground)]">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-[var(--border)]">
              <p className="text-sm">
                <span className="font-medium text-[var(--foreground)]">项目成果：</span>
                <span className="text-[var(--accent)]">{project.result}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
