<script lang="ts">
  export let allowMultiple: boolean = false
</script>

<div class="spectrum-Accordion" role="region">
  <slot />
</div>

<style>
  @import '@spectrum-css/accordion/dist/index-vars.css';
</style>
