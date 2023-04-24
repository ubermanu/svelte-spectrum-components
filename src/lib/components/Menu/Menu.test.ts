import { fireEvent, render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import MenuTest from './Menu.test.svelte'

test('Renders with no children', async () => {
  const { getByTestId } = render(MenuTest, {
    props: { items: [] },
  })

  expect(getByTestId('menu')).toBeTruthy()
  expect(getByTestId('menu').children.length).toBe(0)
})

test('Renders with children', async () => {
  const { getByTestId } = render(MenuTest, {
    props: {
      items: [
        { id: 1, label: 'Item 1', value: 'item1' },
        { id: 2, label: 'Item 2', value: 'item2' },
        { id: 3, label: 'Item 3', value: 'item3' },
      ],
    },
  })

  expect(getByTestId('menu')).toBeTruthy()
  expect(getByTestId('menu').children.length).toBe(3)

  expect(getByTestId('menu-item-1')).toBeTruthy()
  expect(getByTestId('menu-item-1').textContent).toContain('Item 1')
})

test('Click on an item , selects it', async () => {
  const { getByTestId } = render(MenuTest, {
    props: {
      selectable: true,
      items: [
        { id: 1, label: 'Item 1', value: 'item1' },
        { id: 2, label: 'Item 2', value: 'item2' },
        { id: 3, label: 'Item 3', value: 'item3' },
      ],
    },
  })

  await fireEvent.click(getByTestId('menu-item-1'))

  expect(getByTestId('menu-item-1').classList.contains('is-selected')).toBe(
    true
  )

  await fireEvent.click(getByTestId('menu-item-2'))

  expect(getByTestId('menu-item-1').classList.contains('is-selected')).toBe(
    false
  )

  expect(getByTestId('menu-item-2').classList.contains('is-selected')).toBe(
    true
  )
})

test('Click on an item , selects it (multiple)', async () => {
  const { getByTestId } = render(MenuTest, {
    props: {
      selectable: true,
      multiple: true,
      items: [
        { id: 1, label: 'Item 1', value: 'item1' },
        { id: 2, label: 'Item 2', value: 'item2' },
        { id: 3, label: 'Item 3', value: 'item3' },
      ],
    },
  })

  await fireEvent.click(getByTestId('menu-item-1'))
  await fireEvent.click(getByTestId('menu-item-2'))

  expect(getByTestId('menu-item-1').classList.contains('is-selected')).toBe(
    true
  )

  expect(getByTestId('menu-item-2').classList.contains('is-selected')).toBe(
    true
  )

  expect(getByTestId('menu-item-3').classList.contains('is-selected')).toBe(
    false
  )
})
