import RevealText from '../../components/RevealText'
import TagLine from './TagLine'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div data-h1 className="grid h-screen items-center justify-center">
      <div className="content flex flex-col items-center justify-center">
        <RevealText
          revealFrom="right"
          delay={0.6}
          text="React / React Native Developer"
          className="text-[28px] selection:bg-gray-200 selection:text-[#121212]"
        />

        <div className="name-section text-[10rem] max-md:text-[120px]">
          <h1 aria-hidden="false" className="hidden">
            VIKRAM
          </h1>
          <RevealText text="VIKRAM" className="selection:bg-gray-200 selection:text-[#121212]" />
        </div>
        <TagLine />
      </div>
    </div>
  )
}

export default Hero
