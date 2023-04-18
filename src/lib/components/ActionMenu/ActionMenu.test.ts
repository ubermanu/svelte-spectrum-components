import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import ActionMenuTest from './ActionMenu.test.svelte'

test('Renders with no items', async () => {
  const { getByTestId } = render(ActionMenuTest)
  expect(getByTestId('action-menu')).toBeTruthy()
})

test('Renders with menu items', async () => {
  const { getByTestId } = render(ActionMenuTest, {
    props: {
      items: [
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
        { id: 3, label: 'Item 3' },
        { id: 4, label: 'Item 4' },
      ],
    },
  })

  expect(getByTestId('action-menu')).toBeTruthy()

  expect(getByTestId('action-menu-item-1')).toBeTruthy()
  expect(getByTestId('action-menu-item-2')).toBeTruthy()
  expect(getByTestId('action-menu-item-3')).toBeTruthy()
  expect(getByTestId('action-menu-item-4')).toBeTruthy()
})
