interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  accentTop?: boolean
  elevated?: boolean
  hoverEffect?: boolean
}

export default function Card({ 
  title, 
  description, 
  children, 
  className = '',
  accentTop = false,
  elevated = false,
  hoverEffect = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-[var(--card)] rounded-lg border border-[var(--border)] p-8
        ${accentTop ? 'border-t-2 border-t-[var(--accent)]' : ''}
        ${elevated ? 'shadow-md' : 'shadow-sm'}
        ${hoverEffect ? 'transition-all duration-200 hover:shadow-md hover:border-[var(--muted-foreground)] hover:bg-[var(--muted)]/30' : ''}
        ${className}
      `}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)] leading-relaxed">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
