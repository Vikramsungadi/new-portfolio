import React from 'react'

type GradientDashedLineProps = {
  /** Height for horizontal, width for vertical */
  thickness?: number
  /** Dash length in px */
  dash?: number
  /** Gap between dashes in px */
  gap?: number
  /** Gradient start */
  startColor?: string
  /** Gradient end */
  endColor?: string
  /** Direction of line */
  direction?: 'horizontal' | 'vertical'
  /** Length of the line */
  length?: string | number
  className?: string
}

export const GradientDashedLine: React.FC<GradientDashedLineProps> = ({
  thickness = 1,
  dash = 6,
  gap = 8,
  startColor = 'lab(25.86 0.44 0.15)',
  endColor = 'lab(25.86 0.44 0.15)',
  direction = 'horizontal',
  length = '100%',
  className,
}) => {
  const isHorizontal = direction === 'horizontal'

  const style: React.CSSProperties = {
    width: isHorizontal ? length : thickness,
    height: isHorizontal ? thickness : length,
    backgroundImage: isHorizontal
      ? `repeating-linear-gradient(
          to right,
          ${startColor},
          ${endColor} ${dash}px,
          transparent ${dash}px,
          transparent ${dash + gap}px
        )`
      : `repeating-linear-gradient(
          to bottom,
          ${startColor},
          ${endColor} ${dash}px,
          transparent ${dash}px,
          transparent ${dash + gap}px
        )`,
  }

  return <div className={className} style={style} />
}
