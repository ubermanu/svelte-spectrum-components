<script lang="ts">
  import '@spectrum-css/button/dist/index-vars.css'
  import '@spectrum-css/button/dist/index.css'

  export let variant:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'negative'
    | 'static' = 'accent'

  export let size: 'S' | 'M' | 'L' | 'XL' = 'M'

  export let treatment: 'fill' | 'outline' = 'fill'
</script>

<button
  class="spectrum-Button spectrum-Button--{treatment} spectrum-Button--{variant} spectrum-Button--size{size}"
  {...$$restProps}
>
  <slot name="icon" />
  <span class="spectrum-Button-label"><slot /></span>
</button>
