<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import '@spectrum-css/icon/dist/index-vars.css'

  export let icon: SvelteComponent

  export let size: 'M' | 'L' = 'M'

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<svelte:component
  this={icon}
  class="spectrum-Icon spectrum-Icon--size{size} {additionalClasses || ''}"
  focusable="false"
  aria-hidden="true"
  {...rest}
/>
