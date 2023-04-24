import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import MenuTest from './Menu.test.svelte'

test('Renders with no children', async () => {
  const { getByTestId } = render(MenuTest, {
    props: { items: [] },
  })

  expect(getByTestId('menu')).toBeTruthy()
  expect(getByTestId('menu').children.length).toBe(0)
})
