import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Section } from './Section'

describe('Section', () => {
  it('renders an accessible section labelled by its title, with children', () => {
    render(
      <Section id="about" title="Sobre mí">
        <p>contenido</p>
      </Section>,
    )
    const region = screen.getByRole('region', { name: 'Sobre mí' })
    expect(region).toHaveAttribute('id', 'about')
    expect(screen.getByRole('heading', { level: 2, name: 'Sobre mí' })).toHaveAttribute('id', 'about-title')
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })

  it('is visible without IntersectionObserver', () => {
    expect('IntersectionObserver' in globalThis).toBe(false)
    render(<Section id="x" title="T">c</Section>)
    const region = screen.getByRole('region', { name: 'T' })
    expect(region).not.toHaveClass('opacity-0')
    expect(region).not.toHaveClass('translate-y-6')
  })
})
