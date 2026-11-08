import { Badge } from "@/shared/components/ui/badge"

export function TagList({ tags, label, className }: { tags: string[]; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={className ?? "flex flex-wrap gap-2"}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary">{tag}</Badge>
        </li>
      ))}
    </ul>
  )
}
