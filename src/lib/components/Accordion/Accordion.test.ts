import { fireEvent, render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import AccordionTest from './Accordion.test.svelte'

test('Renders with no children', async () => {
  const { getByTestId } = render(AccordionTest, {
    props: { items: [] },
  })

  expect(getByTestId('accordion')).toBeTruthy()
  expect(getByTestId('accordion').children.length).toBe(0)
})

test('Renders with children', async () => {
  const { getByTestId } = render(AccordionTest, {
    props: {
      items: [
        { id: 1, title: 'Title 1', content: 'Content 1' },
        { id: 2, title: 'Title 2', content: 'Content 2' },
      ],
    },
  })

  expect(getByTestId('accordion')).toBeTruthy()
  expect(getByTestId('accordion-item-1')).toBeTruthy()
  expect(getByTestId('accordion-item-2')).toBeTruthy()
  expect(getByTestId('accordion').children.length).toBe(2)
})

test('Click on a child closes the others', async () => {
  const { getByTestId } = render(AccordionTest, {
    props: {
      items: [
        { id: 1, title: 'Title 1', content: 'Content 1' },
        { id: 2, title: 'Title 2', content: 'Content 2' },
        { id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
  })

  await fireEvent.click(
    getByTestId('accordion-item-1').querySelector('button')!
  )

  expect(
    getByTestId('accordion-item-1').classList.contains('is-open')
  ).toBeTruthy()

  await fireEvent.click(
    getByTestId('accordion-item-2').querySelector('button')!
  )

  expect(
    getByTestId('accordion-item-1').classList.contains('is-open')
  ).toBeFalsy()

  expect(
    getByTestId('accordion-item-2').classList.contains('is-open')
  ).toBeTruthy()
})

test('Click on a child does not close the others, if multiple', async () => {
  const { getByTestId } = render(AccordionTest, {
    props: {
      multiple: true,
      items: [
        { id: 1, title: 'Title 1', content: 'Content 1' },
        { id: 2, title: 'Title 2', content: 'Content 2' },
        { id: 3, title: 'Title 3', content: 'Content 3' },
      ],
    },
  })

  await fireEvent.click(
    getByTestId('accordion-item-1').querySelector('button')!
  )

  expect(
    getByTestId('accordion-item-1').classList.contains('is-open')
  ).toBeTruthy()

  await fireEvent.click(
    getByTestId('accordion-item-2').querySelector('button')!
  )

  expect(
    getByTestId('accordion-item-1').classList.contains('is-open')
  ).toBeTruthy()

  expect(
    getByTestId('accordion-item-2').classList.contains('is-open')
  ).toBeTruthy()
})
