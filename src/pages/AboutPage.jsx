import AboutHero from "../components/AboutHero.jsx"
import Vision from "../components/Vision"
import BookSection from "../components/BookSection"
import NewspaperCutouts from "../components/NewspaperCutouts"
import SectionHeading from "../components/SectionHeading"
import StorySection from "../components/StorySection"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <section>
        <Vision />
      </section>
      <section>
        <SectionHeading title="My Story" />
        <StorySection />
      </section>
      <section>
        <SectionHeading title="My First Book" />
        <BookSection />
      </section>
      <section>
        <SectionHeading title="In the News" />
        <NewspaperCutouts />
      </section>
    </main>
  )
}

