import type { Meta, StoryObj } from '@storybook/svelte'
import type { SvelteComponent } from 'svelte'
import { Copy18, Delete18, Edit18 } from '../../../../../svelte-spectrum-icons'
import ActionButton from './ActionButton.story.svelte'

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  title: 'Components/ActionButton',
}

export default meta

type Story = StoryObj<typeof meta>

const icons: Partial<SvelteComponent>[] = [Edit18, Copy18, Delete18]

export const Standard: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {},
  }),
}

export const Quiet: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      quiet: true,
    },
  }),
}

export const Emphasized: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      emphasized: true,
    },
  }),
}

export const EmphasizedAndQuiet: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      emphasized: true,
      quiet: true,
    },
  }),
}

export const StaticWhite: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      staticWhite: true,
    },
  }),
}

export const StaticBlack: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      staticBlack: true,
    },
  }),
}

export const StaticWhiteAndQuiet: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      staticWhite: true,
      quiet: true,
    },
  }),
}

export const StaticBlackAndQuiet: Story = {
  // @ts-ignore
  render: () => ({
    Component: ActionButton,
    props: {
      staticBlack: true,
      quiet: true,
    },
  }),
}
