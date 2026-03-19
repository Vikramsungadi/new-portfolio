import { cn } from '@/utils/cn'
import { HTMLAttributes, ReactNode } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body'

type AsTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant
  as?: AsTag
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  h1: 'text-4xl font-bold md:text-5xl',
  h2: 'text-2xl font-bold md:text-3xl',
  h3: 'text-xl font-semibold md:text-2xl',
  h4: 'text-lg font-semibold md:text-xl',
  body: 'text-base font-normal',
}

export const Text = ({ variant = 'body', as, className, children, ...rest }: TextProps) => {
  const Component = as ?? (variant.startsWith('h') ? variant : 'p')

  return (
    <Component className={cn('opacity-70', variantClasses[variant], className)} {...rest}>
      {children}
    </Component>
  )
}

export default Text
