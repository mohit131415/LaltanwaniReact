import Hero from "../components/Hero"
import Video from "../components/Video"
import Experience from "../components/Experience"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"


export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Video />
      <Experience />
      <Stats />
      <Testimonials />
      {/* <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Explore Our Blog</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover insights on education, leadership, and personal development from Dr. Lal Tanwani.
          </p>
          <Button asChild size="lg">
            <Link to="/blog">Visit the Blog</Link>
          </Button>
        </div>
      </section> */}
      <Newsletter />
    </main>
  )
}

