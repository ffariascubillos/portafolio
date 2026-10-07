import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '../data'
import { Experience } from './Experience'

const cardOf = (company: string) =>
  screen.getByText(company).closest('[data-slot="card"]') as HTMLElement

describe('Experience', () => {
  it('renders one card per job in CV order with period, description and optional clients/tags', () => {
    render(<Experience />)
    expect(experience.map((e) => e.company)).toEqual([
      'Desarrollador Web & Mobile Freelance',
      'CORFO',
      'McCann WorldGroup / MRM',
      'EL LIVING (Zoo Digital)',
    ])
    for (const e of experience) {
      const card = cardOf(e.company)
      expect(card).not.toBeNull()
      const scope = within(card)
      if (e.role) expect(scope.getByText(e.role)).toBeInTheDocument()
      expect(scope.getByText(e.period)).toBeInTheDocument()
      expect(scope.getByText(e.description).tagName).toBe('P')
      if (e.clients) expect(card).toHaveTextContent(e.clients)
      const tags = scope.queryAllByRole('listitem').map((li) => li.textContent)
      expect(tags).toEqual(e.tags ?? [])
    }
  })

  it('omits the clients line when the CV lists none', () => {
    render(<Experience />)
    for (const company of ['Desarrollador Web & Mobile Freelance', 'CORFO']) {
      expect(cardOf(company)).not.toHaveTextContent('Clientes:')
    }
  })

  it('renders no literal ** markers', () => {
    const { container } = render(<Experience />)
    expect(container.textContent).not.toContain('**')
  })
})
