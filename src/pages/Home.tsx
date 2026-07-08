import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow -top-48 -right-48" />
      <div className="ambient-glow top-1/2 -left-48" />
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-24 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Section label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
              产品经理
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
          
          {/* Name */}
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-normal text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
            杨少平
          </h1>
          
          {/* Title */}
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-4 tracking-wide">
            AI产品经理
          </p>
          
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="w-12 h-px bg-[var(--accent)]" />
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-[var(--muted-foreground)] mb-12 max-w-xl mx-auto leading-relaxed tracking-[0.01em]">
            3年ToB产品经理经验，主导AI翻译平台、AI风险检测系统从0到1落地。<br />
            熟练运用AI工具链提升产品迭代效率，持续关注AI前沿动态。
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/experience">
              <Button size="lg">
                查看经历
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                联系我
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-20 border-t border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-[var(--foreground)] mb-2">
                3+
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                年产品经验
              </p>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-[var(--foreground)] mb-2">
                2000+
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                服务用户数
              </p>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-[var(--foreground)] mb-2">
                90%+
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                AI检测准确率
              </p>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-[var(--foreground)] mb-2">
                90%+
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                系统稳定性
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
