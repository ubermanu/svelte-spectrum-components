import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import TabsTest from './Tabs.test.svelte'

test('Renders without any children', async () => {
  const { getByTestId } = render(TabsTest)
  expect(getByTestId('tabs')).toBeTruthy()
})

test('Renders with children', async () => {
  const { getByTestId } = render(TabsTest, {
    props: {
      items: [
        { id: '1', label: 'Hello' },
        { id: '2', label: 'World', selected: true },
      ],
    },
  })

  expect(getByTestId('tabs')).toBeTruthy()
  expect(getByTestId('tabs').children.length).toBe(2 + 1) // 2 items + 1 selection indicator

  // Check that the first item is selected
  expect(getByTestId('tab-item-1')).toBeTruthy()
  expect(getByTestId('tab-item-1').classList.contains('is-selected')).toBe(
    false
  )

  // Check that the second item is not selected
  expect(getByTestId('tab-item-2')).toBeTruthy()
  expect(getByTestId('tab-item-2').classList.contains('is-selected')).toBe(true)
})
