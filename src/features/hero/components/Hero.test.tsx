import { render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { mockIntersectionObserver, mockMatchMedia } from '@/test/mocks'
import { profile } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    mockMatchMedia(false)
    mockIntersectionObserver()
    render(<Hero />)
  })

  it('renders name, role and stack tags', () => {
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(profile.role)).toBeInTheDocument()
    const tags = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(tags.map((t) => t.textContent)).toEqual(profile.stack)
  })

  it('renders the portrait with its alt text', () => {
    expect(screen.getByRole('img', { name: 'Retrato de Felipe Farías' })).toBeInTheDocument()
  })

  it('links "Ver Trabajos" to the projects section', () => {
    expect(screen.getByRole('link', { name: 'Ver Trabajos' })).toHaveAttribute('href', '#proyectos')
  })

  it('renders contact links with accessible names and hrefs', () => {
    const hrefs = {
      GitHub: 'https://github.com/ffariascubillos',
      Correo: 'mailto:ffariascubillos@gmail.com',
      LinkedIn: 'https://www.linkedin.com/in/fc-felipe/',
    }
    for (const [name, href] of Object.entries(hrefs)) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
    }
  })

  it('opens external contacts safely in a new tab', () => {
    for (const name of ['GitHub', 'LinkedIn']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
    expect(screen.getByRole('link', { name: 'Correo' })).not.toHaveAttribute('target')
  })
})
