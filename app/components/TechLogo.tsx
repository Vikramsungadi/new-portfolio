import Android from '@/public/tech/android.svg'
import Appmaker from '@/public/tech/appmaker.svg'
import Apple from '@/public/tech/apple.svg'
import Css3 from '@/public/tech/css3.svg'
import Drop from '@/public/tech/drop.svg'
import Git from '@/public/tech/git.svg'
import Html5 from '@/public/tech/html5.svg'
import Javascript from '@/public/tech/javascript.svg'
import Nextjs from '@/public/tech/nextjs.svg'
import Nodejs from '@/public/tech/nodejs.svg'
import Python from '@/public/tech/python.svg'
import React from '@/public/tech/react.svg'
import Redux from '@/public/tech/redux.svg'
import Sass from '@/public/tech/sass.svg'
import Shopify from '@/public/tech/shopify.svg'
import Tailwindcss from '@/public/tech/tailwindcss.svg'
import Typescript from '@/public/tech/typescript.svg'
import Zustand from '@/public/tech/zustand.svg'
import Github from '@/public/tech/github.svg'
import FramerMotion from '@/public/tech/framer-motion.svg'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'alt' | 'src'> {
  name: keyof typeof IMAGES
}

export type TechStackLogos = keyof typeof IMAGES

const IMAGES = {
  Appmaker,
  Apple,
  Css3,
  Liquid: Drop,
  Git,
  Html5,
  Javascript,
  Nextjs,
  Nodejs,
  Python,
  React,
  Redux,
  Sass,
  Shopify,
  Tailwindcss,
  Typescript,
  Zustand,
  Github,
  FramerMotion,
  Android,
} as const

const TechLogo = ({ name, ...restImageProps }: Props) => {
  return <Image src={IMAGES[name]} alt="Appmaker Native shopify app builder" {...restImageProps} />
}

export default TechLogo
