<script lang="ts">
  import { Icon } from '$lib'
  import { Chevron100 } from 'svelte-spectrum-icons/ui'

  export let separator: boolean = false

  export let label: string = ''

  export let href: string | undefined = undefined

  export let current: boolean = false

  export let disabled: boolean = false
</script>

<li class="spectrum-Breadcrumbs-item">
  <slot>
    <a
      class="spectrum-Breadcrumbs-itemLink"
      role="link"
      tabindex="0"
      {href}
      aria-current={current ? 'page' : undefined}
      class:is-disabled={disabled}
    >
      {label}
    </a>
  </slot>
  {#if separator}
    <Icon
      icon={Chevron100}
      class="spectrum-UIIcon-ChevronRight100 spectrum-Breadcrumbs-itemSeparator"
    />
  {/if}
</li>
