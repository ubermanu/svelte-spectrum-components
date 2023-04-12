<script lang="ts">
  export let size: TShirtSize = 'M'
  export let staticWhite: boolean = false
  export let staticBlack: boolean = false
  export let vertical: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<hr
  class="spectrum-Divider spectrum-Divider--size{size} {additionalClasses}"
  class:spectrum-Divider--staticWhite={staticWhite}
  class:spectrum-Divider--staticBlack={staticBlack}
  class:spectrum-Divider--vertical={vertical}
  {...rest}
/>

<style>
  .spectrum-Divider--vertical {
    align-self: stretch;
    height: auto;
  }
</style>
