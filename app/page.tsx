import Experience from '@/app/sections/Experience'
import Hero from '@/app/sections/Hero'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
    </main>
  )
}
