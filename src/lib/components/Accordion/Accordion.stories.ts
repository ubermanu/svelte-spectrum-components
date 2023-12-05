import type { Meta, StoryObj } from '@storybook/svelte'

import Accordion from './Accordion.story.svelte'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
}

export default meta

type Story = StoryObj<typeof meta>

export const Standard: Story = {
  // @ts-ignore
  render: () => ({
    Component: Accordion,
    props: {
      multiple: false,
    },
  }),
}

export const Multiple: Story = {
  // @ts-ignore
  render: () => ({
    Component: Accordion,
    props: {
      multiple: true,
    },
  }),
}
