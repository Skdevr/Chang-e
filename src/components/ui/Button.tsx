import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_10px_30px_-12px_rgba(124,92,255,0.9)] hover:bg-primary-soft hover:shadow-[0_16px_44px_-14px_rgba(124,92,255,1)]',
  secondary:
    'bg-surface/80 text-ink border border-line hover:border-white/20 hover:bg-surface backdrop-blur-sm',
  ghost: 'text-muted hover:text-ink hover:bg-white/5',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[0.8125rem] rounded-lg gap-1.5',
  md: 'h-10 px-4 text-sm rounded-xl gap-2',
  lg: 'h-12 px-6 text-[0.9375rem] rounded-xl gap-2',
}

type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? 'button') as ElementType

  return (
    <Component
      className={cn(
        'inline-flex select-none items-center justify-center font-medium transition-all duration-200 ease-[var(--ease-out-quint)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
