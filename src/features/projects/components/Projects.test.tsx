import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../data'
import { Projects } from './Projects'

const base = import.meta.env.BASE_URL

describe('Projects', () => {
  it('renders one card per project', () => {
    const { container } = render(<Projects />)
    expect(container.querySelectorAll('[data-slot="card-title"]')).toHaveLength(projects.length)
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    }
  })

  it('gives every image a unique, non-empty alt and lazy loading', () => {
    render(<Projects />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(projects.length)
    const alts = imgs.map((i) => i.getAttribute('alt'))
    expect(alts.every(Boolean)).toBe(true)
    expect(new Set(alts).size).toBe(alts.length)
    imgs.forEach((img) => expect(img).toHaveAttribute('loading', 'lazy'))
  })

  it('renders every link with the right href, prefixing BASE_URL to local ones', () => {
    render(<Projects />)
    for (const p of projects) {
      for (const l of p.links) {
        const expected = l.local ? base + l.href : l.href
        const link = screen
          .getAllByRole('link', { name: l.label })
          .find((a) => a.getAttribute('href') === expected)
        expect(link, `${p.title}: ${l.label}`).toBeDefined()
      }
    }
  })

  it('opens every link in a new tab with noopener noreferrer', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link').filter((a) => a.getAttribute('href') !== '#sobre-mi')
    expect(links).toHaveLength(projects.flatMap((p) => p.links).length)
    for (const a of links) {
      expect(a).toHaveAttribute('target', '_blank')
      expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('renders the internal "Subamos" anchor without target _blank', () => {
    render(<Projects />)
    const link = screen.getByRole('link', { name: /Subamos/ })
    expect(link).toHaveAttribute('href', '#sobre-mi')
    expect(link).not.toHaveAttribute('target', '_blank')
  })
})
