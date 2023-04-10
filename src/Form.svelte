<script lang="ts">
  export let labelsAbove: boolean = false
</script>

<form
  class="spectrum-Form"
  class:spectrum-Form--labelsAbove={labelsAbove}
  {...$$restProps}
>
  <slot />
</form>

<style>
  @import '@spectrum-css/fieldlabel/dist/index-vars.css';
</style>
