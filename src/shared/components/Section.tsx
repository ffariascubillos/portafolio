import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = { id: string; title: string; children: ReactNode; className?: string }

export function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn(className)}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}
