<script lang="ts">
  import Cross75 from 'svelte-spectrum-icons/ui/CrossMedium.svelte'
  import Icon from './Icon.svelte'

  export let size: TShirtSize = 'M'

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false
</script>

<button
  class="spectrum-CloseButton spectrum-CloseButton--size{size}"
  class:spectrum-CloseButton--staticWhite={staticWhite}
  class:spectrum-CloseButton--staticBlack={staticBlack}
  {...$$restProps}
>
  <Icon
    icon={Cross75}
    {size}
    class="spectrum-CloseButton-UIIcon spectrum-UIIcon-Cross75"
  />
</button>

<style>
  @import '@spectrum-css/closebutton/dist/index-vars.css';
</style>
