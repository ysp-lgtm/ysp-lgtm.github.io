import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
  { path: '/experience', label: '经历' },
  { path: '/projects', label: '项目' },
  { path: '/contact', label: '联系' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-['Playfair_Display'] text-xl font-normal text-[var(--foreground)] tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          杨少平
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`
                  text-sm font-medium tracking-[0.05em] transition-colors duration-200
                  ${isActive 
                    ? 'text-[var(--accent)]' 
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-secondary)] transition-all duration-200 hover:-translate-y-0.5 touch-manipulation"
        >
          联系我
          <ArrowRight size={14} />
        </Link>

        {/* Mobile navigation */}
        <nav className="flex md:hidden items-center gap-1">
          <Link
            to="/about"
            className={`px-3 py-2 text-xs font-medium tracking-[0.05em] transition-colors ${
              location.pathname === '/about'
                ? 'text-[var(--accent)]'
                : 'text-[var(--muted-foreground)]'
            }`}
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  )
}
