<script lang="ts">
  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let compact: boolean = false
  export let quiet: boolean = false
  export let justified: boolean = false
</script>

<div
  class="spectrum-ActionGroup spectrum-ActionGroup--size{size}"
  class:spectrum-ActionGroup--compact={compact}
  class:spectrum-ActionGroup--quiet={quiet}
  class:spectrum-ActionGroup--vertical={orientation === 'vertical'}
  class:spectrum-ActionGroup--justified={justified}
>
  <slot />
</div>
