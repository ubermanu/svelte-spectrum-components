import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import ThemeTest from './Theme.test.svelte'

test('Renders', async () => {
  const { getByTestId } = render(ThemeTest)
  expect(getByTestId('theme')).toBeTruthy()
  expect(getByTestId('theme').classList.contains('spectrum')).toBe(true)
})
