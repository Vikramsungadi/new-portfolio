import { GradientDashedLine } from '@/app/components/DashedLine'
import TechLogo, { TechStackLogos } from '@/app/components/TechLogo'
import Text from '@/app/components/Text'
import { Tech } from '@/app/data/tech'
import { cn } from '@/utils/cn'

interface Props {}

const Stack = ({
  title,
  stack,
  className,
}: {
  title: string
  stack: Array<TechStackLogos>
  className?: string
}) => {
  return (
    <div className={cn('group flex flex-col gap-8 px-6 py-8 sm:px-20 sm:py-16', className)}>
      <Text
        variant="h4"
        className="origin-left uppercase transition-all group-hover:scale-103 group-hover:opacity-100">
        {title}
      </Text>
      <div className="flex gap-10 max-sm:flex-wrap">
        {stack.map((name) => (
          <TechLogo key={name} name={name} className="max-sm:h-7" />
        ))}
      </div>
    </div>
  )
}

const TechStack = (props: Props) => {
  const { frontend, mobile, shopify, libraries, tools, languages } = Tech
  return (
    <section className="mt-20 mb-24">
      <Text variant="h2" className="mb-16 text-center">
        TECH STACK
      </Text>
      <GradientDashedLine />

      {/* Frontend + Mobile */}
      <div className="flex flex-col items-center">
        <div className="flex max-[1130px]:w-full max-[1130px]:max-w-[760px] max-[1130px]:flex-wrap">
          <Stack title={frontend.name} stack={frontend.stack} />
          <GradientDashedLine direction="vertical" length={''} className="max-[1130px]:hidden" />
          <Stack title={mobile.name} stack={mobile.stack} className="max-[1130px]:hidden" />
        </div>
      </div>
      <GradientDashedLine className="w-full" />

      {/* MOBILE ONLY */}
      <div className="flex flex-col items-center">
        <div className="hidden max-[1130px]:flex max-[1130px]:w-full max-[1130px]:max-w-[760px] max-md:flex-wrap sm:justify-center">
          <Stack title={mobile.name} stack={mobile.stack} />
          <GradientDashedLine direction="vertical" length={''} className="max-md:hidden" />
          <GradientDashedLine direction="horizontal" className="md:hidden" />
          <Stack title={shopify.name} stack={shopify.stack} />
        </div>
      </div>
      <GradientDashedLine className="min-[1130px]:hidden" />

      {/* Shopify + Tools */}
      <div className="flex flex-col items-center">
        <div className="flex max-[1130px]:w-full max-[1130px]:max-w-[760px] max-[1130px]:flex-wrap">
          <Stack title={shopify.name} stack={shopify.stack} className="max-[1130px]:hidden" />
          <GradientDashedLine direction="vertical" length={''} className="max-[1130px]:hidden" />
          <Stack
            title={'Languages/Tools/Libraries'}
            stack={libraries.stack.concat(tools.stack).concat(languages.stack)}
          />
        </div>
      </div>
      <GradientDashedLine />
    </section>
  )
}

export default TechStack
