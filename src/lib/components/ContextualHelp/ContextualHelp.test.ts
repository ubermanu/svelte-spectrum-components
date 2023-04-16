import { fireEvent, render } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import ContextualHelpTest from './ContextualHelp.test.svelte'

test('Renders with no content', async () => {
  const { getByTestId } = render(ContextualHelpTest)

  expect(getByTestId('contextual-help')).toBeTruthy()
})

test('Renders with content', async () => {
  const { getByTestId } = render(ContextualHelpTest, {
    props: {
      content: 'This is some content',
    },
  })

  expect(getByTestId('contextual-help')).toBeTruthy()
  expect(
    getByTestId('contextual-help').querySelector(
      '.spectrum-ContextualHelp-body'
    )!.textContent
  ).toContain('This is some content')

  // Closed by default
  expect(
    getByTestId('contextual-help')
      .querySelector('.spectrum-ContextualHelp-popover')!
      .classList.contains('is-open')
  ).toBeFalsy()

  // Open when clicked
  await fireEvent.click(getByTestId('contextual-help').querySelector('button')!)

  expect(
    getByTestId('contextual-help')
      .querySelector('.spectrum-ContextualHelp-popover')!
      .classList.contains('is-open')
  ).toBeTruthy()
})
