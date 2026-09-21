import type { LucideIcon, LucideProps } from "lucide-react"

type Props = LucideProps & { icon: LucideIcon; label?: string }

export function Icon({ icon: Glyph, label, ...props }: Props) {
  return label ? (
    <Glyph role="img" aria-label={label} {...props} />
  ) : (
    <Glyph aria-hidden="true" {...props} />
  )
}
