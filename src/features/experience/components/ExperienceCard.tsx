import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { TagList } from "@/shared/components/TagList"
import type { Experience } from "../data"

const Rich = ({ text }: { text: string }) =>
  text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))

export function ExperienceCard({ company, role, period, bullets, clients, tags }: Experience) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{company}</CardTitle>
        <p className="font-medium">{role}</p>
        <p className="text-sm opacity-80">{period}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {bullets.map((b) => (
            <li key={b}>
              <Rich text={b} />
            </li>
          ))}
        </ul>
        <p className="text-sm">
          <strong>Clientes:</strong> {clients}
        </p>
        <h4 className="font-semibold">Tecnologías utilizadas</h4>
        <TagList tags={tags} />
      </CardContent>
    </Card>
  )
}
