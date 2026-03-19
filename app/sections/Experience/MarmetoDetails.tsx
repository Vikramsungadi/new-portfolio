'use client'
import { cn } from '@/utils/cn'
import CompanyInfo from './CompanyInfo'
import IPhone from '@/app/components/Iphone'
import { useState } from 'react'
import { PROJECTS } from '@/app/data/projects'
import type { ProjectDetail } from '@/app/data/projects'
import Logo from './Logo'

interface Props {}

const ProjectDetail = ({
  name,
  description,
  hideLine,
  setCurrentProject,
}: ProjectDetail & { hideLine: boolean; setCurrentProject: any }) => {
  return (
    <div className="flex gap-4 md:gap-7" onMouseEnter={() => setCurrentProject(name)}>
      <div className="flex translate-y-1.5 flex-col items-center md:translate-y-2.5">
        <div className="stack bg-background h-3.5 w-3.5 place-items-center rounded-full border-2 border-white"></div>
        <div className={cn('h-full w-0.5 flex-1 bg-white', hideLine && 'opacity-0')}></div>
      </div>
      <div className="flex items-baseline max-md:flex-col" key={name}>
        <p className="text-lg font-bold md:text-[22px]">{name}</p>
        <p className="text-md flex-1 pb-7 text-neutral-500 md:pb-11 md:text-[18px]">
          <span className="max-md:hidden">,&nbsp;</span>
          {description}
        </p>
      </div>
    </div>
  )
}

const MarmetoDetails = (props: Props) => {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0].name)

  return (
    <div>
      <CompanyInfo
        position="React Native Developer"
        name="MARMETO"
        tenure={[new Date('2024-05-16'), 'current']}
      />

      <div className="mt-12 flex items-start justify-between max-md:flex-col-reverse">
        <div className="mt-10">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectDetail
                setCurrentProject={setCurrentProject}
                hideLine={index === PROJECTS.length - 1}
                {...project}
                key={project.name}
              />
            )
          })}
        </div>
        <div className="stack place-items-center max-md:mx-4 max-md:mt-4 max-md:mb-6">
          <IPhone className="stack-item md:hidden" orientation="landscape" />
          <IPhone className="stack-item max-md:hidden" />
          <Logo name={currentProject} />
        </div>
      </div>
    </div>
  )
}

export default MarmetoDetails
