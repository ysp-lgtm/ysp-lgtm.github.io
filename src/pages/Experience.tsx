import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function Experience() {
  const experiences = [
    {
      company: '多益网络',
      role: 'AI产品经理',
      period: '2023.06 - 至今',
      highlights: [
        'AI产品规划：主导AI翻译平台、AI风险检测系统从0到1落地，构建数据闭环驱动迭代',
        '跨职能统筹：协调业务、算法、开发团队，制定迭代管理规范，保障项目按期交付',
        '产品设计与优化：负责系统交互设计、用户赋能运营，持续提升采纳率与体验',
        'AI应用落地：运用Prompt工程、Cursor等AI工具，将PRD、原型、数据获取效率提升60%~80%',
        '产品维护：负责产品日常运营及优化迭代，持续响应用户新需求',
      ],
    },
  ]

  return (
    <Section
      id="experience"
      title="工作经历"
      label="经历"
    >
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative pl-6 sm:pl-0">
            {/* Timeline indicator */}
            <div className="absolute left-2 sm:left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-[var(--border)]" />
            <div className="absolute left-[3px] sm:left-[-9px] top-8 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)]" />

            <div className="pl-6 sm:pl-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--accent)] font-medium mt-1">{exp.company}</p>
                </div>
                <span className="self-start sm:self-auto text-sm font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] bg-[var(--muted)] px-3 py-1 rounded whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
