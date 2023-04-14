<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1
  export let size: TShirtSize | 'XXS' | 'XXXL' | undefined = undefined
  export let weight: 'light' | 'heavy' | undefined = undefined
  export let serif: boolean = false

  const sizeMap = {
    1: 'XL',
    2: 'L',
    3: 'M',
    4: 'S',
    5: 'XS',
    6: 'XXS',
  }

  if (!size) {
    size = sizeMap[level] ?? 'M'
  }

  let { class: additionalClasses = '', ...rest } = $$restProps

  if (size) {
    additionalClasses += ` spectrum-Heading--size${size}`
  }

  if (weight) {
    additionalClasses += ` spectrum-Heading--${weight}`
  }

  if (serif) {
    additionalClasses += ' spectrum-Heading--serif'
  }

  additionalClasses = additionalClasses.trim()
</script>

{#if level === 1}
  <h1 class={additionalClasses} {...rest}>
    <slot />
  </h1>
{:else if level === 2}
  <h2 class={additionalClasses} {...rest}>
    <slot />
  </h2>
{:else if level === 3}
  <h3 class={additionalClasses} {...rest}>
    <slot />
  </h3>
{:else if level === 4}
  <h4 class={additionalClasses} {...rest}>
    <slot />
  </h4>
{:else if level === 5}
  <h5 class={additionalClasses} {...rest}>
    <slot />
  </h5>
{:else if level === 6}
  <h6 class={additionalClasses} {...rest}>
    <slot />
  </h6>
{/if}
