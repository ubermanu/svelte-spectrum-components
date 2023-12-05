import type { Meta, StoryObj } from '@storybook/svelte'
import type { SvelteComponent } from 'svelte'
// @ts-ignore
import { Copy18, Delete18, Edit18 } from 'svelte-spectrum-icons/workflow'
import ActionBar from './ActionBar.story.svelte'

const meta: Meta<typeof ActionBar> = {
  component: ActionBar,
  title: 'Components/ActionBar',
}

export default meta

type Story = StoryObj<typeof meta>

const actions: { text?: string; icon?: SvelteComponent }[] = [
  { text: 'Edit', icon: Edit18 },
  { text: 'Copy', icon: Copy18 },
  { text: 'Delete', icon: Delete18 },
]

export const Standard: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionBar,
    props: {
      actions,
    },
  }),
}

export const Emphasized: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionBar,
    props: {
      actions,
      emphasized: true,
    },
  }),
}
