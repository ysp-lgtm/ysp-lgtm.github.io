import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Mail, Phone, MapPin, ArrowRight, Briefcase } from 'lucide-react'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="联系我"
      description="期待与您进一步交流"
      label="联系"
    >
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-12">
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            如果您对我的经历感兴趣，或希望讨论产品经理相关的合作机会，欢迎通过以下方式联系我。
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <Briefcase size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] mb-1">求职意向</p>
                <p className="text-[var(--foreground)]">AI产品经理</p>
              </div>
            </div>
            
            <a 
              href="mailto:1615602151@qq.com" 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                <Mail size={20} className="text-[var(--accent)] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] mb-1">邮箱</p>
                <p className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  1615602151@qq.com
                </p>
              </div>
            </a>
            
            <a 
              href="tel:19811733928" 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                <Phone size={20} className="text-[var(--accent)] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] mb-1">电话</p>
                <p className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  19811733928
                </p>
              </div>
            </a>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.1em] text-[var(--muted-foreground)] mb-1">所在地</p>
                <p className="text-[var(--foreground)]">广东广州</p>
              </div>
            </div>
          </div>
          
          {/* Decorative quote */}
          <div className="pt-8 border-t border-[var(--border)]">
          <p className="font-['Playfair_Display'] text-lg italic text-[var(--muted-foreground)] leading-relaxed">
            "期待与您探讨AI与产品的融合之道"
          </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <Card className="order-1 md:order-2">
          <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-normal text-[var(--foreground)] mb-5 sm:mb-6">
            发送消息
          </h3>

          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                姓名
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 text-base rounded-md border border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/60 transition-colors hover:border-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 outline-none min-h-[44px]"
                placeholder="您的姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                邮箱
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-base rounded-md border border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/60 transition-colors hover:border-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 outline-none min-h-[44px]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                留言
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 text-base rounded-md border border-[var(--border)] bg-transparent text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/60 transition-colors hover:border-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 outline-none resize-none"
                placeholder="请输入您的留言..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              发送消息
              <ArrowRight size={16} />
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  )
}
