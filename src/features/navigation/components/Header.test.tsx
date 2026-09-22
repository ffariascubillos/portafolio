import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

let callback: IntersectionObserverCallback

class StubObserver {
  observe = vi.fn()
  disconnect = vi.fn()
  constructor(cb: IntersectionObserverCallback) {
    callback = cb
  }
}

beforeEach(() => vi.stubGlobal('IntersectionObserver', StubObserver))
afterEach(() => vi.unstubAllGlobals())

const desktopNav = () => screen.getByRole('navigation', { name: 'Navegacion principal' })
const toggle = () => screen.getByRole('button', { name: 'Abrir menu de navegacion', hidden: true })

describe('Header', () => {
  it('renders the three links with their hrefs', () => {
    render(<Header />)
    const nav = within(desktopNav())
    expect(nav.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '#sobre-mi')
    expect(nav.getByRole('link', { name: 'Experiencia' })).toHaveAttribute('href', '#experiencia')
    expect(nav.getByRole('link', { name: 'Proyectos' })).toHaveAttribute('href', '#proyectos')
  })

  it('marks the active link with aria-current and updates it on scroll', () => {
    const section = document.createElement('section')
    section.id = 'proyectos'
    document.body.appendChild(section)
    render(<Header />)
    const nav = within(desktopNav())
    expect(nav.getByRole('link', { name: 'Inicio' })).toHaveAttribute('aria-current', 'page')
    expect(nav.getByRole('link', { name: 'Proyectos' })).not.toHaveAttribute('aria-current')

    act(() =>
      callback(
        [{ isIntersecting: true, target: section } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver,
      ),
    )
    expect(nav.getByRole('link', { name: 'Proyectos' })).toHaveAttribute('aria-current', 'page')
    expect(nav.getByRole('link', { name: 'Inicio' })).not.toHaveAttribute('aria-current')
    section.remove()
  })

  it('toggles aria-expanded on the hamburger button', async () => {
    render(<Header />)
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the menu when a link is clicked', async () => {
    render(<Header />)
    await userEvent.click(toggle())
    const mobile = within(screen.getByRole('navigation', { name: 'Navegacion movil' }))
    await userEvent.click(mobile.getByRole('link', { name: 'Experiencia' }))
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu with Escape', async () => {
    render(<Header />)
    await userEvent.click(toggle())
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    await userEvent.keyboard('{Escape}')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })
})
