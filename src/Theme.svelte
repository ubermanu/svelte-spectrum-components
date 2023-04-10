<script lang="ts">
  export let theme: string = 'spectrum'
  export let color: string = 'light'
  export let scale: string = 'medium'
</script>

<div class="spectrum spectrum--{color} spectrum--{scale}">
  <slot />
</div>

<style>
  @import '@spectrum-css/vars/dist/spectrum-large.css';
  @import '@spectrum-css/vars/dist/spectrum-medium.css';

  @import '@spectrum-css/vars/dist/spectrum-dark.css';
  @import '@spectrum-css/vars/dist/spectrum-darkest.css';
  @import '@spectrum-css/vars/dist/spectrum-light.css';
</style>
