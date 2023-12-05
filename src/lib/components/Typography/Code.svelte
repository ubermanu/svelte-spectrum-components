<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  let { class: additionalClasses = '', ...rest } = $$restProps
</script>

<code
  class="spectrum-Code {additionalClasses}"
  class:spectrum-Code--sizeXS={size === 'XS'}
  class:spectrum-Code--sizeS={size === 'S'}
  class:spectrum-Code--sizeM={size === 'M'}
  class:spectrum-Code--sizeL={size === 'L'}
  class:spectrum-Code--sizeXL={size === 'XL'}
  {...rest}
>
  <slot />
</code>
