<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1
  export let size: TShirtSize | undefined = undefined
  export let weight: 'light' | 'heavy' | undefined = undefined
  export let serif: boolean = false

  const sizeMap: Record<number, TShirtSize> = {
    1: 'XL',
    2: 'L',
    3: 'M',
    4: 'S',
    5: 'XS',
    6: 'XXS',
  }

  // Automatically set size based on level if not set
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

<svelte:element
  this={`h${level}`}
  class="spectrum-Heading {additionalClasses}"
  {...rest}
>
  <slot />
</svelte:element>
