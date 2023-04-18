<script lang="ts">
  import { Divider, CloseButton, ButtonGroup, Icon } from '$lib'
  import {
    createEventDispatcher,
    getContext,
    type SvelteComponent,
  } from 'svelte'

  export let size: 'small' | 'medium' | 'large' | 'fullscreen' = 'medium'
  export let open: boolean = false
  export let heading: string = ''
  export let dismissable: boolean = false
  export let noDivider: boolean = false
  export let icon: SvelteComponent | undefined = undefined
  export let image: string | undefined = undefined

  const dispatch = createEventDispatcher()
  const modal = getContext('modal')

  $: if (modal?.fullscreen) {
    size = 'fullscreen'
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Dialog spectrum-Dialog--{size} {additionalClasses}"
  class:spectrum-Dialog--dismissable={dismissable}
  class:spectrum-Dialog--noDivider={noDivider}
  role="dialog"
  tabindex="-1"
  aria-modal={modal?.open ? 'true' : 'false'}
  {...rest}
>
  <div class="spectrum-Dialog-grid">
    {#if image}
      <div
        class="spectrum-Dialog-hero"
        style={`background-image: url(${image})`}
      />
    {/if}
    <h1 class="spectrum-Dialog-heading">{heading}</h1>
    {#if icon}
      <Icon class="spectrum-Dialog-typeIcon" {icon} />
    {/if}
    {#if !noDivider}
      <Divider class="spectrum-Dialog-divider" />
    {/if}
    <section class="spectrum-Dialog-content">
      <slot />
    </section>
    {#if dismissable}
      <CloseButton
        aria-label="Dismiss"
        class="spectrum-Dialog-closeButton"
        on:click={() => dispatch('dismiss')}
      />
    {/if}
    {#if $$slots.buttons}
      <ButtonGroup
        class="spectrum-Dialog-buttonGroup spectrum-Dialog-buttonGroup--noFooter"
      >
        <slot name="buttons" />
      </ButtonGroup>
    {/if}
  </div>
</div>
