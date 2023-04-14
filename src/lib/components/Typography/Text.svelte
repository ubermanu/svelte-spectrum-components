<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  let { class: additionalClasses = '', ...rest } = $$restProps
</script>

<p
  class="spectrum-Body spectrum-Body--size{size} {additionalClasses}"
  {...rest}
>
  <slot />
</p>
