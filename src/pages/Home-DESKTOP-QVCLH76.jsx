import { Hero } from '../components/Hero.jsx'
import { StorySection } from '../components/StorySection.jsx'
import { AtmosphereSection } from '../components/AtmosphereSection.jsx'
import { SpecialsSection } from '../components/SpecialsSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <AtmosphereSection />
      <SpecialsSection />
    </>
  )
}
