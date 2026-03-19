'use client'

import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import { motion } from 'motion/react'

type NavLinkProps = {
  id?: string
  children?: React.ReactNode
  active?: boolean
  setActive?: any
  label?: string
  index: number
}

const Links = [
  {
    label: 'Home',
    id: 'home',
  },
  {
    label: 'Projects',
    id: 'projects',
  },
  {
    label: 'Experience',
    id: 'experience',
  },
  {
    label: 'Resume',
    id: 'resume',
  },
]

const NavLink = ({ active, id, setActive, label, index }: NavLinkProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay: 4 + (index + 1) * 0.25, duration: 0.5 }}
      className={cn('stack isolate my-2 min-w-22 cursor-pointer place-items-center md:min-w-24')}
      onClick={() => setActive(id)}
      role="button"
      aria-label={label}>
      {active && (
        <motion.div
          initial={{ opacity: 0, width: 44 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 5.25, duration: 0.5 }}
          layout
          layoutId="underline"
          className="stack-item -z-10 h-full w-full rounded-full border border-white/3 bg-[#121212]"
        />
      )}
      <div className="stack-item z-9999 inline-block px-2 py-3 sm:py-2 md:px-4">{label}</div>
    </motion.li>
  )
}

const Navbar = () => {
  const [active, setActive] = useState(Links[0].id)
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4 }}
      className="text-md fixed right-0 bottom-8 left-0 flex justify-center sm:bottom-16 md:bottom-16 md:text-lg">
      <motion.ul className="flex items-center rounded-full border border-white/5 bg-black/6 px-3 backdrop-blur-3xl md:gap-4">
        {Links.map(({ id, label }, index) => {
          return (
            <NavLink
              setActive={setActive}
              active={id === active}
              id={id}
              key={id}
              label={label}
              index={index}
            />
          )
        })}
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar
