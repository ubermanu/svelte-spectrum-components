<script lang="ts">
  import '@spectrum-css/fieldlabel/dist/index-vars.css'

  export let labelsAbove: boolean = false
</script>

<form
  class="spectrum-Form"
  class:spectrum-Form--labelsAbove={labelsAbove}
  {...$$restProps}
>
  <slot />
</form>
