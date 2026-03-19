import TacoImage from '@/public/personal-projects/taco.png'
import PokedexImage from '@/public/personal-projects/pokedex.png'
import RestaurantImage from '@/public/personal-projects/restaurant.png'
import SpaceTourismImage from '@/public/personal-projects/space-tourism.png'

export type ProjectDetail = { name: string; description: string }

export const PROJECTS = [
  {
    name: 'boAt',
    description: 'App maintenance',
  },
  {
    name: 'Snooplay',
    description: 'Built Buyback feature and app maintenance',
  },
  {
    name: 'Matahari',
    description: 'Indonesian Ecommerce App built from scratch',
  },
  {
    name: 'Character Cosmetics',
    description: 'E-commerce app built from scratch',
  },
  { name: 'Blue age', description: 'E-commerce app built from scratch' },
  { name: 'Rina Fashion', description: 'E-commerce app built from scratch' },
] as const

export type ProjectName = (typeof PROJECTS)[number]['name']

export const PERSONAL_PROJECTS = [
  {
    name: 'Taco',
    tag: 'UI Component Library',
    image: TacoImage,
  },
  { name: 'POKEDEX', tag: 'Pokemon Library', image: PokedexImage },
  { name: 'DELICIOUS', tag: 'A Restaurant Website', image: RestaurantImage },
  { name: 'SPACE TOURISM', tag: 'Frontend Mentor Challenge', image: SpaceTourismImage },
] as const

export type PersonalProjectName = (typeof PERSONAL_PROJECTS)[number]['name']
