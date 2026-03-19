import RevealText from '../../components/RevealText'
import TagLine from './TagLine'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="grid h-screen items-center justify-center">
      <div className="content -mt-80 flex flex-col items-center md:-mt-40">
        <RevealText
          revealFrom="right"
          delay={0.6}
          text="React / React Native Developer"
          className="text-[clamp(1.25rem,1.25rem+0vw,1.25rem)] selection:bg-gray-200 selection:text-[#121212] opacity-80"
        />

        <div className="name-section text-[10rem] max-md:text-[120px]">
          <h1 aria-hidden="false" className="hidden text-[clamp(5.5rem,3.1667rem+5.3704vw,8rem)]">
            VIKRAM
          </h1>
          <RevealText
            text="VIKRAM"
            className="text-[clamp(5.5rem,2.5rem+8.3333vw,10rem)] selection:bg-gray-200 selection:text-[#121212]"
          />
        </div>
        <TagLine />
      </div>
    </section>
  )
}

export default Hero
