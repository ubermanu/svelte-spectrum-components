<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import { Icon } from '$lib'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let variant:
    | 'neutral'
    | 'accent'
    | 'informative'
    | 'positive'
    | 'negative' = 'neutral'

  export let size: TShirtSize = 'M'

  export let icon: SvelteComponent | undefined = undefined

  export let color: 'white' | 'black' = 'white'

  export let fixed:
    | 'inline-start'
    | 'inline-end'
    | 'block-start'
    | 'block-end'
    | undefined = undefined

  const fixedClass = fixed ? `spectrum-Badge--fixed-${fixed}` : ''
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Badge spectrum-Badge--size{size} spectrum-Badge--{variant} {additionalClasses} {fixedClass}"
  class:spectrum-Badge--black-text={color === 'black'}
  {...rest}
>
  {#if icon}
    <Icon
      {icon}
      {size}
      class="spectrum-Badge-icon {!$$slots.default
        ? 'spectrum-Badge-icon--noLabel'
        : ''}"
    />
  {/if}
  {#if $$slots.default}
    <div class="spectrum-Badge-label">
      <slot />
    </div>
  {/if}
</div>
