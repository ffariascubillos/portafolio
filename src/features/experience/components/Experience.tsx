import { Section } from "@/shared/components/Section"
import { experience } from "../data"
import { ExperienceCard } from "./ExperienceCard"

export function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiencia"
      className="mx-auto max-w-6xl space-y-6 px-6 py-12 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-2 [&_h2]:text-center [&_h2]:text-2xl [&_h2]:font-semibold"
    >
      <p className="text-justify">
        Experiencia laboral en Arquitectura, diseño y desarrollo web, implementación frontend y backend, mantenimiento de plataformas digitales y colaboración con equipos de diseño, marketing y negocio para clientes de distintos rubros.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((e) => (
          <ExperienceCard key={e.company} {...e} />
        ))}
      </div>
    </Section>
  )
}
