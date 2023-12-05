<script lang="ts">
  import { setContext } from 'svelte'
  import { createAccordion, melt } from '@melt-ui/svelte'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let appearance: 'compact' | 'regular' | 'spacious' = 'regular'
  export let size: TShirtSize = 'M'

  export let multiple: boolean = false
  export let disabled: boolean = false

  const accordion = createAccordion({
    defaultValue: [],
    multiple,
    disabled,
  })

  const {
    elements: { root },
  } = accordion

  setContext('accordion', accordion)

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  use:melt={$root}
  class="spectrum-Accordion"
  class:spectrum-Accordion--sizeS={size === 'S'}
  class:spectrum-Accordion--sizeM={size === 'M'}
  class:spectrum-Accordion--sizeL={size === 'L'}
  class:spectrum-Accordion--sizeXL={size === 'XL'}
  class:spectrum-Accordion--compact={appearance === 'compact'}
  class:spectrum-Accordion--spacious={appearance === 'spacious'}
  {...rest}
>
  <slot />
</div>
