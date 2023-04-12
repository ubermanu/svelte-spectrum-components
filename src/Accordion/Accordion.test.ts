import { render } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'

import Accordion from './Accordion.svelte'

describe('Accordion.svelte', () => {
  it('Renders with minimal props', async () => {
    const { getByTestId } = render(Accordion)
    expect(getByTestId('accordion')).toBeTruthy()
  })
})
