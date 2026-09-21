import type { ReactNode } from "react"
import { useInView } from "@/shared/hooks/useInView"
import { cn } from "@/lib/utils"

type Props = { id: string; title: string; children: ReactNode; className?: string }

export function Section({ id, title, children, className }: Props) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "transition-all duration-700 motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}
