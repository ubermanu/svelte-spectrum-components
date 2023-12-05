import '$lib/styles.css'
import type { Preview } from '@storybook/svelte'
import ThemeDecorator from './ThemeDecorator.svelte'
import './storybook.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // @ts-ignore
  decorators: [() => ThemeDecorator],
}

export default preview
