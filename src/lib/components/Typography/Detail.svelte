<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'
  export let serif: boolean = false
  export let light: boolean = false

  let { class: additionalClasses = '', ...rest } = $$restProps
</script>

<p
  class="spectrum-Detail {additionalClasses}"
  class:spectrum-Detail--sizeS={size === 'S'}
  class:spectrum-Detail--sizeM={size === 'M'}
  class:spectrum-Detail--sizeL={size === 'L'}
  class:spectrum-Detail--sizeXL={size === 'XL'}
  class:spectrum-Detail--serif={serif}
  class:spectrum-Detail--light={light}
  {...rest}
>
  <slot />
</p>
