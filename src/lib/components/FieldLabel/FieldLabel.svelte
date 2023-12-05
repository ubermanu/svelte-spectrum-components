<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { Icon } from '$lib'
  import { Asterisk100 } from 'svelte-spectrum-icons'

  export let size: TShirtSize = 'M'
  export let position: 'left' | 'right' | '' = ''
  export let required: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<label
  class="spectrum-FieldLabel spectrum-FieldLabel--size{size} {additionalClasses}"
  class:spectrum-FieldLabel--right={position === 'right'}
  class:spectrum-FieldLabel--left={position === 'left'}
  {...rest}
>
  <slot />
  {#if required}
    <Icon
      class="spectrum-UIIcon-Asterisk100 spectrum-FieldLabel-requiredIcon"
      icon={Asterisk100}
    />
  {/if}
</label>
