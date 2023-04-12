<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'accent' | 'negative' = 'accent'

  export let size: TShirtSize = 'M'

  export let treatment: 'fill' | 'outline' = 'fill'

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-Button spectrum-Button--{treatment} spectrum-Button--{variant} spectrum-Button--size{size} {additionalClasses}"
  class:spectrum-Button--staticWhite={staticWhite}
  class:spectrum-Button--staticBlack={staticBlack}
  {...rest}
  on:click
>
  <slot name="icon" />
  <span class="spectrum-Button-label"><slot /></span>
</button>

<style>
  @import '@spectrum-css/button';
</style>
