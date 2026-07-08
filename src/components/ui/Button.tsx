import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles = {
  primary:
    'bg-[var(--accent)] text-white hover:bg-[var(--accent-secondary)] shadow-sm hover:shadow-md hover:-translate-y-0.5',
  outline:
    'border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
  ghost:
    'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline hover:underline-offset-4 decoration-[var(--accent)]',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-md min-h-[36px]',
  md: 'px-6 py-2.5 text-sm rounded-md min-h-[44px]',
  lg: 'px-8 py-3.5 text-base rounded-md min-h-[48px]',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
