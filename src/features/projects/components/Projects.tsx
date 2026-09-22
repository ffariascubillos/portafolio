import { Section } from "@/shared/components/Section"
import { Button } from "@/shared/components/ui/button"
import { projects } from "../data"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <Section
      id="proyectos"
      title="Proyectos"
      className="mx-auto max-w-6xl space-y-6 px-6 py-12 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-2 [&_h2]:text-center [&_h2]:text-2xl [&_h2]:font-semibold"
    >
      <p className="text-justify">
        Selección de proyectos en los que he participado, con foco en desarrollo frontend, experiencia de usuario, implementación responsive y soluciones web orientadas a objetivos de negocio.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button asChild className="rounded-button">
          <a href="#sobre-mi">Subamos</a>
        </Button>
      </div>
    </Section>
  )
}
