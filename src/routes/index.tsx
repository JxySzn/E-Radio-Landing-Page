import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
    </main>
  )
}
