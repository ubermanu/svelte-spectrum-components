<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary'
  export let staticWhite: boolean = false
  export let staticBlack: boolean = false
  export let quiet: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<a
  class="spectrum-Link {additionalClasses}"
  class:spectrum-Link--secondary={variant === 'secondary'}
  class:spectrum-Link--staticWhite={staticWhite}
  class:spectrum-Link--staticBlack={staticBlack}
  class:spectrum-Link--quiet={quiet}
  {...rest}
>
  <slot />
</a>
