import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Download from '../components/Download'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Experience />
      <Testimonials />
      <Pricing />
      <Download />
      <Footer />
    </main>
  )
}
