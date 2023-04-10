<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import Icon from './Icon.svelte'

  export let variant:
    | 'neutral'
    | 'accent'
    | 'informative'
    | 'positive'
    | 'negative' = 'neutral'

  export let size: TShirtSize = 'M'

  export let icon: SvelteComponent | undefined = undefined

  export let fixed:
    | 'inline-start'
    | 'inline-end'
    | 'block-start'
    | 'block-end'
    | undefined = undefined

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div
  class="spectrum-Badge spectrum-Badge--size{size} spectrum-Badge--{variant} {additionalClasses ||
    ''} {fixed ? `spectrum-Badge--fixed-${fixed}` : ''}"
  {...rest}
>
  {#if icon}
    <Icon
      {icon}
      class="spectrum-Badge-icon {!$$slots.default
        ? 'spectrum-Badge-icon--no-label'
        : ''}"
    />
  {/if}
  <div class="spectrum-Badge-label">
    <slot />
  </div>
</div>

<style>
  @import '@spectrum-css/badge/dist/index-vars.css';
</style>
