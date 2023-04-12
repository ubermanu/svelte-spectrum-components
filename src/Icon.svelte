<script lang="ts">
  import type { SvelteComponent } from 'svelte'

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

<style>
  @import '@spectrum-css/icon/dist/vars.css';
  @import '@spectrum-css/icon';
</style>
