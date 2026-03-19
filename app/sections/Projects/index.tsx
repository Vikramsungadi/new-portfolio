import MotionComponent from '@/app/components/MotionComponent'
import Text from '@/app/components/Text'
import { PERSONAL_PROJECTS } from '@/app/data/projects'
import Image from 'next/image'

interface Props {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className="mt-30 mb-36">
      <Text variant="h2" className="mb-16 text-center">
        PROJECTS
      </Text>
      <div className="flex justify-center max-[900px]:flex-col-reverse min-[1200px]:items-start min-[1200px]:justify-between">
        <div className="flex shrink grow flex-col">
          {PERSONAL_PROJECTS.map(({ name, tag }) => {
            return (
              <div
                className="flex items-center border-b border-b-neutral-900 py-8 pl-8 max-[1200px]:flex-col max-[1200px]:items-start max-sm:flex-row"
                key={name}>
                <Text className="text-xl uppercase opacity-100" variant="h2" as="p">
                  {name}
                </Text>
                <Text variant="h3" as="span" className="pl-2 text-lg opacity-30">
                  - {tag}
                </Text>
              </div>
            )
          })}
        </div>

        <div className="stack mr-20 ml-6 shrink-0 basis-[300px] items-end place-self-end max-[1200px]:justify-center max-[900px]:mt-20 max-lg:grow max-sm:mt-0 sm:mr-26 md:basis-[400px] lg:basis-[500px]">
          {PERSONAL_PROJECTS.map(({ image, name }, index) => (
            <MotionComponent
              key={name}
              whileInView={{
                transform: `rotate(${index * 8}deg)`,
                transition: { duration: 0.4, delay: 0.3 },
              }}
              viewport={{ margin: '900px 0px 0px 0px' }}
              style={{ order: PERSONAL_PROJECTS.length - 1 - index }}
              className="stack-item origin-bottom-right md:max-w-[600px]">
              <Image key={name} src={image} alt={`Screenshot of ${name}`} className="rounded-lg" />
            </MotionComponent>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
