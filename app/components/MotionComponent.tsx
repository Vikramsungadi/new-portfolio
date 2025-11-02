'use client'
import React, { forwardRef } from 'react'
import { MotionProps, motion } from 'motion/react'

interface Props extends MotionProps {
  as?: 'div' | 'span' | 'p'
  children?: React.ReactNode
  className?: string
}

const MotionComponent = forwardRef<HTMLDivElement, Props>(({ as, children, ...props }, ref) => {
  let Component = as ? motion[as] : motion['div']
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
})

MotionComponent.displayName = 'MotionComponent'
export default MotionComponent
