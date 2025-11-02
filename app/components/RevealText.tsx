import { cn } from '@/utils/cn'
import MotionComponent from './MotionComponent'
import { useMemo } from 'react'

interface Props {
  className?: string
  text: string
  wordGap?: number
  delay?: number
  revealFrom?: 'left' | 'bottom' | 'top' | 'right'
}

const getVariants = (revealFrom: 'left' | 'bottom' | 'top' | 'right' = 'bottom') => {
  switch (revealFrom) {
    case 'left':
      return {
        hidden: {
          transform: 'translateX(-50%)',
          opacity: 0,
          filter: 'blur(6px) brightness(0.8)',
        },
        animate: {
          transform: 'translateX(0%)',
          opacity: 1,
          filter: 'blur(0px) brightness(2)',
        },
      }
    case 'right':
      return {
        hidden: {
          transform: 'translateX(50%)',
          opacity: 0,
          filter: 'blur(6px) brightness(0.8)',
        },
        animate: {
          transform: 'translateX(0%)',
          opacity: 1,
          filter: 'blur(0px) brightness(2)',
        },
      }
    case 'top':
      return {
        hidden: {
          transform: 'translateY(-50%)',
          opacity: 0,
          filter: 'blur(6px) brightness(0.8)',
        },
        animate: {
          transform: 'translateY(0%)',
          opacity: 1,
          filter: 'blur(0px) brightness(2)',
        },
      }
    case 'bottom':
    default:
      return {
        hidden: {
          transform: 'translateY(50%)',
          opacity: 0,
          filter: 'blur(6px) brightness(0.8)',
        },
        animate: {
          transform: 'translateY(0%)',
          opacity: 1,
          filter: 'blur(0px) brightness(2)',
        },
      }
  }
}

const RevealText = ({ text, delay = 0, revealFrom = 'bottom', ...props }: Props) => {
  const variants = useMemo(() => getVariants(revealFrom), [revealFrom])
  const words = useMemo(() => text.split(' '), [text])

  return (
    <div
      aria-hidden
      className={cn('flex gap-[-0.6em] [font-size:inherit] font-medium text-inherit', props.className)}>
      {words.map((word, wordIndex) => {
        const previousWords = words.slice(0, wordIndex)
        const previousCharsLength = previousWords.join('').length

        return (
          <div key={wordIndex} className="flex">
            {word.split('').map((letter, letterIndex) => (
              <span className="inline-flex overflow-y-hidden" key={letterIndex}>
                <MotionComponent
                  as="span"
                  initial="hidden"
                  animate="animate"
                  variants={variants}
                  transition={{
                    delay: delay + previousCharsLength * 0.03 + letterIndex * 0.03,
                    type: 'spring',
                    damping: 18,
                  }}>
                  {letter}
                </MotionComponent>
              </span>
            ))}
            &nbsp;
          </div>
        )
      })}
    </div>
  )
}

export default RevealText
