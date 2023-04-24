<script lang="ts">
  import { v4 as uuid } from '@lukeed/uuid'
  import { FieldLabel, HelpText } from '$lib'
  import { setContext } from 'svelte'

  const labelId = uuid()
  const helpId = uuid()

  export let label: string = ''
  export let help: string = ''

  export let invalid: boolean = false
  export let required: boolean = false

  export let orientation: 'horizontal' | 'vertical' = 'vertical'
  export let sideLabel: boolean = false

  // TODO: Forward context to children components
  setContext('fieldGroup', { required, invalid })

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-FieldGroup spectrum-FieldGroup--toplabel {additionalClasses}"
  class:spectrum-FieldGroup--horizontal={orientation === 'horizontal'}
  class:spectrum-FieldGroup--vertical={orientation === 'vertical'}
  role="radiogroup"
  aria-labelledby={labelId}
  {...rest}
>
  <FieldLabel id={labelId} {required} position={sideLabel ? 'right' : null}>
    {label}
  </FieldLabel>
  <div class="spectrum-FieldGroupInputLayout" aria-describedby={helpId}>
    <slot />
    <HelpText id={helpId}>{help}</HelpText>
  </div>
</div>
