import { useInView } from "@/shared/hooks/useInView"
import { TagList } from "@/shared/components/TagList"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent } from "@/shared/components/ui/card"
import { cn } from "@/lib/utils"
import { profile } from "../data"

const base = import.meta.env.BASE_URL

export function Hero() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section
      ref={ref}
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden pt-16"
    >
      <img
        src={`${base}images/montanas.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div
        className={cn(
          "mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-12 text-center transition-all duration-700 motion-reduce:transition-none",
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        <img
          src={base + profile.photo}
          alt={profile.photoAlt}
          className="size-40 rounded-full border-4 border-border object-cover md:size-48"
        />
        <h1 id="sobre-mi-title" className="text-4xl font-bold md:text-6xl">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl">{profile.role}</p>
        <h3 className="text-lg font-semibold">Stack Tecnológico</h3>
        <div className="flex justify-center [&_ul]:justify-center">
          <TagList tags={profile.stack} />
        </div>
        <Card className="w-full">
          <CardContent className="space-y-4">
            <h2 className="border-b border-border pb-2 text-2xl font-semibold">
              Perfil Profesional
            </h2>
            <p className="leading-relaxed">{profile.summary}</p>
            <Button asChild className="rounded-button">
              <a href="#proyectos">Ver Trabajos</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="space-y-4">
            <h3 className="border-b border-border pb-2 text-lg font-semibold">Contacto</h3>
            <div className="flex justify-center gap-4">
              {profile.contacts.map(({ label, href, path, external }) => (
                <Button key={label} asChild variant="outline" size="icon-lg">
                  <a
                    href={href}
                    aria-label={label}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                      <path d={path} />
                    </svg>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
