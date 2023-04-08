<script lang="ts">
  import '@spectrum-css/button/dist/index-vars.css'
  import '@spectrum-css/button/dist/index.css'

  export let variant: 'primary' | 'secondary' | 'accent' | 'negative' = 'accent'

  export let size: 'S' | 'M' | 'L' | 'XL' = 'M'

  export let treatment: 'fill' | 'outline' = 'fill'

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<button
  class="spectrum-Button spectrum-Button--{treatment} spectrum-Button--{variant} spectrum-Button--size{size} {additionalClasses ||
    ''}"
  class:spectrum-Button--staticWhite={staticWhite}
  class:spectrum-Button--staticBlack={staticBlack}
  {...rest}
>
  <slot name="icon" />
  <span class="spectrum-Button-label"><slot /></span>
</button>
