import type { Metadata } from 'next'
import { Gabarito, Azeret_Mono } from 'next/font/google'
// @ts-ignore
import './globals.css'
import { cn } from '@/utils/cn'
import BinaryBackground from './sections/BinaryBackground'

const gabaritoSans = Gabarito({
  variable: '--font-gabarito-sans',
  subsets: ['latin'],
})

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vikram - Frontend Engineer',
  description: 'Frontend developer with expertise in react, react-native. Expert in building web/mobile apps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          gabaritoSans.variable,
          azeretMono.variable,
          'font-display relative min-h-screen antialiased'
        )}>
        <BinaryBackground />
        {children}
      </body>
    </html>
  )
}
