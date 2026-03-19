import Image, { ImageProps } from 'next/image'

import Portrait from '@/public/iphone-portrait.png'
import Landscape from '@/public/iphone-landscape.png'

const IPhone = ({
  orientation = 'portrait',
  ...props
}: { orientation?: 'portrait' | 'landscape' } & Omit<ImageProps, 'src' | 'alt'>) => {
  return (
    <Image
      src={orientation === 'portrait' ? Portrait : Landscape}
      alt={`Device in ${orientation}`}
      {...props}
    />
  )
}

export default IPhone
