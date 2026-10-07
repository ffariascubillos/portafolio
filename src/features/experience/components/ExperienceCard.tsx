import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { TagList } from "@/shared/components/TagList"
import type { Experience } from "../data"

export function ExperienceCard({ company, role, period, description, clients, tags }: Experience) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{company}</CardTitle>
        {role && <p className="font-medium">{role}</p>}
        <p className="text-sm opacity-80">{period}</p>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  )
}
