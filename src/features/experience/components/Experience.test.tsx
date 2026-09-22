import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience } from '../data'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders one card per job with period, clients and tags', () => {
    render(<Experience />)
    expect(experience.map((e) => e.company)).toEqual([
      'CORFO',
      'McCann WorldGroup / MRM',
      'EL LIVING (Zoo Digital)',
    ])
    for (const e of experience) {
      const card = screen.getByText(e.company).closest('[data-slot="card"]') as HTMLElement
      expect(card).not.toBeNull()
      const scope = within(card)
      expect(scope.getByText(e.role)).toBeInTheDocument()
      expect(scope.getByText(e.period)).toBeInTheDocument()
      expect(card).toHaveTextContent(e.clients)
      const tags = scope.getAllByRole('listitem').filter((li) => e.tags.includes(li.textContent ?? ''))
      expect(tags.map((t) => t.textContent)).toEqual(e.tags)
    }
  })

  it('renders **bold** markers as <strong> without literal asterisks', () => {
    const { container } = render(<Experience />)
    expect(container.textContent).not.toContain('**')
    const bold = experience[0].bullets.find((b) => b.includes('WPO'))?.match(/\*\*(.+?)\*\*/)?.[1] ?? ''
    expect(bold).not.toBe('')
    expect(screen.getByText(bold).tagName).toBe('STRONG')
  })
})
