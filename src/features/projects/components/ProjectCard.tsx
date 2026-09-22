import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { TagList } from "@/shared/components/TagList"
import { Button } from "@/shared/components/ui/button"
import type { Project } from "../data"

const base = import.meta.env.BASE_URL

export function ProjectCard({ title, description, image, tags, links }: Project) {
  return (
    <Card className="overflow-hidden pt-0">
      <img
        src={base + image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-48 w-full object-cover object-top"
      />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-justify text-sm leading-relaxed">{description}</p>
        <TagList tags={tags} />
        <div className="mt-auto flex flex-wrap gap-2">
          {links.map(({ label, href, local }) => (
            <Button key={href} asChild className="rounded-button">
              <a href={local ? base + href : href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
