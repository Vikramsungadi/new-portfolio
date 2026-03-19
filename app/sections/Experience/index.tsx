import Text from '@/app/components/Text'
import MarmetoDetails from './MarmetoDetails'

interface Props {}

const Experience = (props: Props) => {
  return (
    <section id="experience" className="max-w-[1440px] px-4 md:mx-auto md:px-10">
      <Text variant="h2" className="mb-10 text-center sm:mb-16">
        EXPERIENCE
      </Text>
      <MarmetoDetails />
    </section>
  )
}

export default Experience
