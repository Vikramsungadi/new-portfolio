import { TechStackLogos } from '../components/TechLogo'

export const Tech: Record<string, { name: string; stack: Array<TechStackLogos> }> = {
  frontend: {
    name: 'Frontend',
    stack: ['React', 'Typescript', 'Css3', 'Nextjs', 'Tailwindcss', 'FramerMotion', 'Javascript', 'Html5'],
  },
  mobile: {
    name: 'Mobile Apps',
    stack: ['Apple', 'React', 'Android'],
  },
  shopify: {
    name: 'Shopify',
    stack: ['Liquid', 'Shopify', 'Appmaker'],
  },
  libraries: {
    name: 'Libraries',
    stack: ['Zustand', 'Redux'],
  },
  tools: {
    name: 'Tools',
    stack: ['Git', 'Github'],
  },
  languages: {
    name: 'Languages',
    stack: ['Python', 'Nodejs', 'Javascript'],
  },
}
