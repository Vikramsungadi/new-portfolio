import * as motion from 'motion/react-client'

type Props = {}

const HighlightText = ({ delay, text }: { delay: number; text: string }) => {
  return (
    <motion.span
      className="inline-block"
      animate={{ color: ['#777777', '#ffffff'] }}
      transition={{ delay: delay, duration: 1 }}>
      {text}
    </motion.span>
  )
}

const TagLine = (props: Props) => {
  const TEXT = 'I build Websites, Mobile Apps and Shopify Stores.'

  const textAnimationDelay = 2 + TEXT.length * 0.02

  return (
    <div className="stack">
      <p className="stack-item pointer-events-none touch-none text-xl">
        {TEXT.split('').map((letter, index) => {
          return (
            <motion.span
              className="text-[#777777]"
              key={index}
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 2 + index * 0.02, duration: 0.3 }}>
              {letter}
            </motion.span>
          )
        })}
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: textAnimationDelay }}
        className="stack-item text-xl text-[#777777]">
        I build <HighlightText delay={textAnimationDelay + 0.15} text="Websites" />,{' '}
        <HighlightText delay={textAnimationDelay + 0.3} text="Mobile Apps" /> and{' '}
        <HighlightText delay={textAnimationDelay + 0.3} text="Shopify Stores" />.
      </motion.p>
    </div>
  )
}

export default TagLine
