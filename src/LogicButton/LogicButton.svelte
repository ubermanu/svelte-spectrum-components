<script lang="ts">
  export let variant: 'and' | 'or' = 'and'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-LogicButton spectrum-LogicButton--{variant} {additionalClasses}"
  {...rest}
>
  {variant}
</button>
