import type { ContainerProps } from '../../types'

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </Component>
  )
}
