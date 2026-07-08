import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/30">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[var(--foreground)] mb-4">
              杨少平
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
              产品经理 · 3年ToB产品经验。<br />
              深耕企业级项目经营管理、SaaS领域、AI相关项目落地
            </p>
          </div>
          
          <div>
            <h4 className="small-caps text-[var(--muted-foreground)] mb-4">联系方式</h4>
            <div className="space-y-3">
              <a 
                href="mailto:1615602151@qq.com" 
                className="flex items-center gap-3 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={16} />
                1615602151@qq.com
              </a>
              <a 
                href="tel:19811733928" 
                className="flex items-center gap-3 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone size={16} />
                19811733928
              </a>
              <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                <MapPin size={16} />
                广东广州
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="small-caps text-[var(--muted-foreground)] mb-4">求职意向</h4>
            <p className="text-sm text-[var(--foreground)]">
              AI产品经理<br />
              <span className="text-[var(--muted-foreground)]">全职</span>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} 杨少平. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted-foreground)] font-['IBM_Plex_Mono'] tracking-[0.1em] uppercase">
            Built with Purpose
          </p>
        </div>
      </div>
    </footer>
  )
}
