<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import Icon from './Icon.svelte'

  export let size: TShirtSize = 'M'
  export let variant: 'neutral' | 'positive' | 'negative' = 'neutral'
  export let icon: SvelteComponent | undefined = undefined
  export let disabled: boolean = false

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div
  class="spectrum-HelpText spectrum-HelpText--size{size} spectrum-HelpText--{variant} {additionalClasses ||
    ''}"
  class:is-disabled={disabled}
  {...rest}
>
  {#if icon}
    <Icon {icon} class="spectrum-HelpText-validationIcon" />
  {/if}
  <div class="spectrum-HelpText-text">
    <slot />
  </div>
</div>

<style>
  @import '@spectrum-css/helptext/dist/index-vars.css';
</style>
