import { TagList } from "@/shared/components/TagList"
import { cn } from "@/lib/utils"
import type { Experience } from "../data"

type Props = Experience & { current?: boolean }

export function ExperienceCard({ company, role, period, description, clients, tags, current }: Props) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-2 -left-[8px] size-3.5 rotate-45 border-2 border-primary",
          current ? "bg-primary" : "bg-background",
        )}
      />
      <article className="space-y-3">
        <header className="space-y-1">
          <h3 className="text-xl font-semibold">{company}</h3>
          {role && <p className="font-medium">{role}</p>}
          <p className="text-sm text-muted-foreground">{period}</p>
        </header>
        <p className="text-sm leading-relaxed">{description}</p>
        {clients && (
          <p className="text-sm">
            <strong>Clientes:</strong> {clients}
          </p>
        )}
        {tags && (
          <>
            <h4 className="font-semibold">Tecnologías utilizadas</h4>
            <TagList tags={tags} />
          </>
        )}
      </article>
    </li>
  )
}
