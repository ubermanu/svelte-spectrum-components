<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let icon: SvelteComponent

  export let size: TShirtSize = 'M'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<svelte:component
  this={icon}
  class="spectrum-Icon spectrum-Icon--size{size} {additionalClasses}"
  focusable="false"
  aria-hidden="true"
  {...rest}
/>
