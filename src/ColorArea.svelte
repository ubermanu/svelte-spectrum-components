<script lang="ts">
  import ColorHandle from './ColorHandle.svelte'

  export let color: string = ''
  export let disabled: boolean = false
</script>

<div class="spectrum-ColorArea" class:is-disabled={disabled}>
  <div
    class="spectrum-ColorArea-gradient"
    style="background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgb(255, 0, 0);"
  />

  <ColorHandle class="spectrum-ColorArea-handle" {color} />

  <input
    type="range"
    class="spectrum-ColorArea-slider"
    name="x"
    aria-label="saturation and value"
    min="0"
    max="1"
    step="0.01"
  />
  <input
    type="range"
    class="spectrum-ColorArea-slider"
    name="y"
    aria-label="saturation and value"
    min="0"
    max="1"
    step="0.01"
  />
</div>

<style>
  @import '@spectrum-css/colorarea/dist/index-vars.css';
  @import '@spectrum-css/colorarea/dist/index.css';
</style>
