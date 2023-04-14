<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import { Icon } from '$lib'

  export let open: boolean = false
  export let content: string = ''
  export let direction: PopoverPlacement = 'top'
  export let variant: '' | 'info' | 'positive' | 'negative' | 'warning' = ''
  export let icon: SvelteComponent | undefined = undefined

  const variantClass = variant ? `spectrum-Tooltip--${variant}` : ''
</script>

<span
  class="spectrum-Tooltip spectrum-Tooltip--{direction} {variantClass}"
  class:is-open={open}
>
  {#if icon}
    <Icon class="spectrum-Tooltip-typeIcon" {icon} />
  {/if}
  <span class="spectrum-Tooltip-label">{content}</span>
  <span class="spectrum-Tooltip-tip" />
</span>
