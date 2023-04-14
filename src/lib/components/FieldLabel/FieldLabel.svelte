<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<label
  class="spectrum-FieldLabel spectrum-FieldLabel--size{size} {additionalClasses}"
  {...rest}
>
  <slot />
</label>
