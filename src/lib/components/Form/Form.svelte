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
