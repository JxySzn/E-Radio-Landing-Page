import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero.tsx'
import Stats from '../components/Stats.tsx'
import Features from '../components/Features.tsx'

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
