<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  let { class: additionalClasses = '', ...rest } = $$restProps
</script>

<p
  class="spectrum-Body {additionalClasses}"
  class:spectrum-Body--sizeXS={size === 'XS'}
  class:spectrum-Body--sizeS={size === 'S'}
  class:spectrum-Body--sizeM={size === 'M'}
  class:spectrum-Body--sizeL={size === 'L'}
  class:spectrum-Body--sizeXL={size === 'XL'}
  class:spectrum-Body--sizeXXL={size === 'XXL'}
  class:spectrum-Body--sizeXXXL={size === 'XXXL'}
  {...rest}
>
  <slot />
</p>
