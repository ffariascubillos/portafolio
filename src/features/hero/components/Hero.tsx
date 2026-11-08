import { TagList } from "@/shared/components/TagList"
import { Button } from "@/shared/components/ui/button"
import { profile } from "../data"

const base = import.meta.env.BASE_URL

export function Hero() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="flex min-h-svh flex-col pt-16">
      <div className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-10 px-6 py-12 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col items-center gap-3 md:order-2">
          <div className="clip-cut bg-primary p-[2px]">
            <img
              src={base + profile.photo}
              alt={profile.photoAlt}
              className="clip-cut size-48 bg-background object-cover md:size-64"
            />
          </div>
          {profile.available && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              Disponible para proyectos
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left">
          <h1 id="sobre-mi-title" className="neon-name text-4xl font-bold md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl text-primary md:text-2xl">{profile.role}</p>
          <p className="max-w-prose leading-relaxed">{profile.summary}</p>
          <span className="inline-block has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ring">
            <Button asChild className="clip-cut-sm rounded-button focus-visible:outline-none">
              <a href="#proyectos">Ver proyectos</a>
            </Button>
          </span>
          <div className="flex gap-4">
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
        </div>
      </div>
      <div className="border-t border-border bg-surface px-6 py-4">
        <TagList
          tags={profile.stack}
          label="Stack tecnológico"
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2"
        />
      </div>
    </section>
  )
}
