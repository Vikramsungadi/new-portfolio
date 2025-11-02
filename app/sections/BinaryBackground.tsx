'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface Props {
  cellSize?: number
}

const BinaryBackground = ({ cellSize = 30 }: Props) => {
  const [grid, setGrid] = useState<string[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const createBinaryGrid = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const cols = Math.ceil(width / cellSize)
      const rows = Math.ceil(height / cellSize)
      const total = cols * rows

      const data = Array.from({ length: total }, () => (Math.random() > 0.5 ? '1' : '0'))
      setGrid(data)
    }

    createBinaryGrid()
    window.addEventListener('resize', createBinaryGrid)

    const timeout = setTimeout(() => setVisible(true), 4000)

    return () => {
      window.removeEventListener('resize', createBinaryGrid)
      clearTimeout(timeout)
    }
  }, [cellSize])

  if (!visible) return null // hide component initially

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 isolate -z-10 bg-clip-text font-mono text-xs text-transparent select-none"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`,
        lineHeight: `${cellSize}px`,
        backgroundImage:
          'linear-gradient(to bottom, var(--background), rgba(255,255,255,0.04) 30%, var(--background) 60%)',
        backgroundSize: '100% 200%',
      }}
      animate={{
        backgroundPosition: ['0% -100%', '0% 100%', '0% -100%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}>
      {grid.map((bit, index) => (
        <span key={index} className="text-center text-[16px]">
          {bit}
        </span>
      ))}
    </motion.div>
  )
}

export default BinaryBackground
