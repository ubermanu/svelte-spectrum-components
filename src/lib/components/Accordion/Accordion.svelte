<script lang="ts">
  import { setContext } from 'svelte'
  import { createAccordionContext } from './context'

  export let multiple: boolean = false

  const accordion = createAccordionContext({ multiple })

  // Update the multiple property on the context when the allowMultiple prop changes
  const { config } = accordion
  $: $config.multiple = multiple

  // Pass the context to the children
  setContext('accordion', accordion)

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div class="spectrum-Accordion {additionalClasses}" role="region" {...rest}>
  <slot />
</div>
