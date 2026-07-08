import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
  { path: '/experience', label: '经历' },
  { path: '/projects', label: '项目' },
  { path: '/contact', label: '联系' },
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-['Playfair_Display'] text-lg sm:text-xl font-normal text-[var(--foreground)] tracking-tight hover:text-[var(--accent)] transition-colors whitespace-nowrap"
        >
          杨少平
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <button
          type="button"
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors touch-manipulation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`md:hidden fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-72 max-w-[80vw] bg-[var(--background)] border-l border-[var(--border)] shadow-lg transform transition-transform duration-200 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                      : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-secondary)] transition-colors touch-manipulation"
            >
              联系我
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
