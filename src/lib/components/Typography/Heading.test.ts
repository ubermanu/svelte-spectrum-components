import { render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import HeadingTest from './Heading.test.svelte'

test('Renders as H1 by default', async () => {
  const { getByTestId } = render(HeadingTest)
  expect(getByTestId('heading')).toBeTruthy()
  expect(getByTestId('heading').tagName).toBe('H1')
})

test('Renders as H2', async () => {
  const { getByTestId } = render(HeadingTest, { props: { level: 2 } })
  expect(getByTestId('heading')).toBeTruthy()
  expect(getByTestId('heading').tagName).toBe('H2')
})
