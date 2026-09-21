import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TagList } from './TagList'

describe('TagList', () => {
  it('renders one list item per tag', () => {
    render(<TagList tags={['React', 'Tailwind', 'Vite']} />)
    const items = screen.getAllByRole('listitem')
    expect(items.map((i) => i.textContent)).toEqual(['React', 'Tailwind', 'Vite'])
  })

  it('renders an empty list without tags', () => {
    render(<TagList tags={[]} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
