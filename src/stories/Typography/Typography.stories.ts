import type { Meta, StoryObj } from '@storybook/svelte'
import HeadingStory from './Heading.story.svelte'

const meta: Meta = {
  title: 'Components/Typography',
}

export default meta

type Story = StoryObj<typeof meta>

export const Heading: Story = {
  // @ts-ignore
  render: () => ({
    Component: HeadingStory,
  }),
}
