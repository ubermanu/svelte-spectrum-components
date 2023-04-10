<script lang="ts">
  import ColorLoupe from './ColorLoupe.svelte'

  export let color: string = ''
  export let disabled: boolean = false
  export let open: boolean = false

  const { class: additionalClasses, style, ...rest } = $$restProps
</script>

<div
  class="spectrum-ColorHandle {additionalClasses || ''}"
  style="--spectrum-picked-color: {color}; {style || ''}"
  {...rest}
>
  <div class="spectrum-ColorHandle-color" />
  {#if open}
    <ColorLoupe {color} open={true} />
  {/if}
</div>

<style>
  @import '@spectrum-css/colorhandle/dist/index-vars.css';
</style>
