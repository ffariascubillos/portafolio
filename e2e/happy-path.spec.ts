import { expect, test } from '@playwright/test'

test('happy path: sections load, nav updates on scroll, a local demo opens', async ({ page }) => {
  await page.goto('/')

  // Las 3 secciones principales existen.
  await expect(page.locator('#sobre-mi')).toBeVisible()
  await expect(page.locator('#experiencia')).toBeAttached()
  await expect(page.locator('#proyectos')).toBeAttached()

  const nav = page.getByRole('navigation', { name: 'Navegacion principal' })
  const experienciaLink = nav.getByRole('link', { name: 'Experiencia' })

  // Navegar a la sección de Experiencia.
  await experienciaLink.click()

  // Tras el scroll, el enlace clickeado queda marcado como activo.
  await expect(experienciaLink).toHaveAttribute('aria-current', 'page')

  // Abrir una demo local (Ripley Giftcard) en una pestaña nueva.
  const projectCard = page.locator('[data-slot="card"]', { hasText: 'Ripley - Giftcard' })
  const [demoPage] = await Promise.all([
    page.context().waitForEvent('page'),
    projectCard.getByRole('link', { name: 'Ver Proyecto' }).click(),
  ])
  await demoPage.waitForLoadState()

  await expect(demoPage).toHaveURL(/\/portafolio\/proyectos\/ripley-giftcard\//)
  await expect(demoPage).toHaveTitle(/Ripley/)

  // La demo se sirve correctamente (sin 404).
  const response = await page.request.get(demoPage.url())
  expect(response.status()).toBe(200)
})
