import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '../data'
import { Experience } from './Experience'

const entryOf = (company: string) => screen.getByText(company).closest('li') as HTMLElement

describe('Experience', () => {
  it('renders one entry per job in CV order with period, description and optional clients/tags', () => {
    render(<Experience />)
    expect(experience.map((e) => e.company)).toEqual([
      'Desarrollador Web & Mobile Freelance',
      'CORFO',
      'McCann WorldGroup / MRM',
      'EL LIVING (Zoo Digital)',
    ])
    for (const e of experience) {
      const entry = entryOf(e.company)
      expect(entry).not.toBeNull()
      const scope = within(entry)
      if (e.role) expect(scope.getByText(e.role)).toBeInTheDocument()
      expect(scope.getByText(e.period)).toBeInTheDocument()
      expect(scope.getByText(e.description).tagName).toBe('P')
      if (e.clients) expect(entry).toHaveTextContent(e.clients)
      const tags = scope.queryAllByRole('listitem').map((li) => li.textContent)
      expect(tags).toEqual(e.tags ?? [])
    }
  })

  it('lists the 4 entries in an ordered list in CV order', () => {
    const { container } = render(<Experience />)
    const ol = container.querySelector('ol')
    expect(ol).not.toBeNull()
    const titles = Array.from(ol!.children).map((li) => li.querySelector('h3')?.textContent)
    expect(titles).toEqual(experience.map((e) => e.company))
  })

  it('omits the clients line when the CV lists none', () => {
    render(<Experience />)
    for (const company of ['Desarrollador Web & Mobile Freelance', 'CORFO']) {
      expect(entryOf(company)).not.toHaveTextContent('Clientes:')
    }
  })

  it('renders no literal ** markers', () => {
    const { container } = render(<Experience />)
    expect(container.textContent).not.toContain('**')
  })
})
