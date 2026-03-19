import Image, { StaticImageData } from 'next/image'
import Boat from '@/public/logos/boat.webp'
import Matahari from '@/public/logos/matahari.webp'
import Snooplay from '@/public/logos/snooplay.webp'
import CC from '@/public/logos/cc.webp'
import Blueage from '@/public/logos/blueage.webp'
import Rina from '@/public/logos/rina.webp'
import { ProjectName } from '@/app/data/projects'
import { cn } from '@/utils/cn'

interface Props {
  name: ProjectName
  className?: string
}

const Images: Partial<Record<ProjectName, StaticImageData>> = {
  boAt: Boat,
  Matahari: Matahari,
  Snooplay: Snooplay,
  'Character Cosmetics': CC,
  'Blue age': Blueage,
  'Rina Fashion': Rina,
}

const Logo = ({ name, className }: Props) => {
  return Object.entries(Images).map(([key, src]) => {
    return (
      <Image
        key={key}
        src={src}
        className={cn('stack-item max-w-26', key !== name && 'invisible', className)}
        alt={`${name} Logo`}
      />
    )
  })
}

export default Logo
