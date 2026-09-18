import type { ButtonProps } from '../../types'

export function Button({
  variant = 'primary',
  children,
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg px-5 py-2.5 min-h-[44px] text-sm sm:text-base transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-hover active:bg-accent-hover shadow-xs'
      : 'border border-border-subtle bg-bg-primary text-text-primary hover:bg-surface active:bg-surface shadow-xs'

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim()

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
