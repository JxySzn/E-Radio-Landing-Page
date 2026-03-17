import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Experience />
      <Testimonials />
    </main>
  )
}
