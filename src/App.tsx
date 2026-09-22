import { Hero } from "@/features/hero/components/Hero"
import { Experience } from "@/features/experience/components/Experience"
import { Projects } from "@/features/projects/components/Projects"
import { Header } from "@/features/navigation/components/Header"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
    </>
  )
}
