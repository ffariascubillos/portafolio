import { Badge } from "@/shared/components/ui/badge"

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary">{tag}</Badge>
        </li>
      ))}
    </ul>
  )
}
