interface SectionProps {
  id?: string
  title: string
  description?: string
  children: React.ReactNode
  label?: string
}

export default function Section({ id, title, description, children, label }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {label && (
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
              {label}
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        )}
        <div className="mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-normal text-[var(--foreground)] tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[var(--muted-foreground)] text-base md:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>
        {children}
      </div>
    </section>
  )
}
