<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import { Icon } from '$lib'
  import { Alert18, CheckmarkCircle18, Info18 } from 'svelte-spectrum-icons'

  export let heading: string = ''
  export let variant: 'neutral' | 'info' | 'notice' | 'positive' | 'negative' =
    'neutral'
  export let icon: SvelteComponent | undefined = undefined
  export let disabled: boolean = false

  const variantIconMap = {
    info: Info18,
    positive: CheckmarkCircle18,
    notice: Alert18,
    negative: Alert18,
  }

  // Automatically insert an icon based on the variant
  $: if ('icon' in $$props === false && !icon) {
    icon = variantIconMap[variant] || undefined
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-InLineAlert spectrum-InLineAlert--{variant} {additionalClasses}"
  {...rest}
>
  <div class="spectrum-InLineAlert-header">
    {heading}
    {#if icon}
      <Icon {icon} class="spectrum-InLineAlert-icon" />
    {/if}
  </div>
  <div class="spectrum-InLineAlert-content"><slot /></div>
  {#if $$slots.footer}
    <div class="spectrum-InLineAlert-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>
