import { Menu } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet"
import { Icon } from "@/shared/components/Icon"
import { cn } from "@/lib/utils"
import { useDisclosure } from "../hooks/useDisclosure"
import { useActiveSection } from "../hooks/useActiveSection"
import { NAV_IDS, NAV_LINKS } from "../links"

export function Header() {
  const { open, onOpenChange, close } = useDisclosure()
  const active = useActiveSection(NAV_IDS)

  const links = (onClick?: () => void, className?: string) =>
    NAV_LINKS.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        onClick={onClick}
        aria-current={active === id ? "page" : undefined}
        className={cn(
          "text-text/70 transition-colors hover:text-text aria-[current=page]:text-text aria-[current=page]:font-semibold",
          className,
        )}
      >
        {label}
      </a>
    ))

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#sobre-mi" className="font-semibold text-text">
          Felipe Farías
        </a>
        <nav aria-label="Navegacion principal" className="hidden gap-6 md:flex">
          {links()}
        </nav>
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu de navegacion"
              aria-expanded={open}
            >
              <Icon icon={Menu} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-surface text-text">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Navegacion principal</SheetDescription>
            <nav aria-label="Navegacion movil" className="flex flex-col gap-4 p-6 pt-12">
              {links(close, "text-lg")}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
