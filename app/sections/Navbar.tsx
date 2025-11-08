'use client'

import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import * as motion from 'motion/react-client'

interface Props {}

type NavLinkProps = {
  id?: string
  children?: React.ReactNode
  active?: boolean
  setActive?: any
  label?: string
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

const NavLink = ({ children, active, id, setActive, label }: NavLinkProps) => {
  return (
    <li
      className={cn('stack isolate my-2 min-w-24 cursor-pointer place-items-center')}
      onClick={() => setActive(id)}
      role="button"
      aria-label={label}>
      {active && (
        <motion.div
          layout
          layoutId="underline"
          className="stack-item -z-10 h-full w-full rounded-full border border-white/3 bg-[#121212]"
        />
      )}
      <div className="stack-item z-9999 inline-block px-4 py-2">{label}</div>
    </li>
  )
}

const Navbar = (props: Props) => {
  const [active, setActive] = useState(Links[0].id)
  return (
    <nav className="fixed right-0 bottom-5 left-0 flex justify-center text-[18px]">
      <ul className="flex items-center gap-4 rounded-full border border-white/5 px-3">
        {Links.map(({ id, label }) => {
          return <NavLink setActive={setActive} active={id === active} id={id} key={id} label={label} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
