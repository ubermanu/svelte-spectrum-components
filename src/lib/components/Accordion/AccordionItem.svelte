<script lang="ts">
  import { getContext } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import { melt, type Accordion } from '@melt-ui/svelte'
  import { Icon } from '$lib'
  import { Chevron100 } from 'svelte-spectrum-icons'

  const id = uuid()

  export let open: boolean = false
  export let disabled: boolean = false
  export let label: string = ''

  const accordion = getContext<Accordion>('accordion')

  const {
    elements: { item, trigger, content },
    states: { value },
    helpers: { isSelected },
  } = accordion

  if (open) {
    $value?.push(id)
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  use:melt={$item({ value: id, disabled })}
  class="spectrum-Accordion-item"
  class:is-open={$isSelected(id)}
  class:is-disabled={disabled}
  {...rest}
>
  <h3 class="spectrum-Accordion-itemHeading">
    <button
      use:melt={$trigger(id)}
      class="spectrum-Accordion-itemHeader"
      type="button"
      {disabled}
    >
      {label}
    </button>
    <span class="spectrum-Accordion-itemIconContainer">
      <Icon
        icon={Chevron100}
        class="spectrum-UIIcon-ChevronRight75 spectrum-Accordion-itemIndicator"
      />
    </span>
  </h3>

  <div use:melt={$content(id)} class="spectrum-Accordion-itemContent">
    <slot />
  </div>
</div>
