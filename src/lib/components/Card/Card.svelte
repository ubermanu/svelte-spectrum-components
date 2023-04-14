<script lang="ts">
  import { Asset, QuickActions } from '$lib'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'
  export let quiet: boolean = false

  export let title: string = ''
  export let subtitle: string = ''
  export let description: string = ''
  export let coverPhoto: string = ''

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Card spectrum-Card--size{size} {additionalClasses}"
  class:spectrum-Card--quiet={quiet}
  tabindex="0"
  role="figure"
  {...rest}
>
  {#if coverPhoto}
    <div class="spectrum-Card-preview">
      <Asset
        src={coverPhoto}
        style="max-width: 75%; max-height: 75%; object-fit: contain;"
      />
    </div>
  {/if}
  <div class="spectrum-Card-body">
    <div class="spectrum-Card-header">
      <div
        class="spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS"
      >
        {title}
      </div>
      {#if $$slots['action-button']}
        <div class="spectrum-Card-actionButton">
          <slot name="action-button" />
        </div>
      {/if}
    </div>
    <div class="spectrum-Card-content">
      {#if subtitle}
        <div
          class="spectrum-Card-subtitle spectrum-Detail spectrum-Detail--sizeS"
        >
          {subtitle}
        </div>
      {/if}
      {#if description}
        <div class="spectrum-Card-description">{description}</div>
      {/if}
      <slot />
    </div>
  </div>
  {#if $$slots.footer}
    <div class="spectrum-Card-footer">
      <slot name="footer" />
    </div>
  {/if}
  {#if $$slots['quick-actions']}
    <QuickActions class="spectrum-Card-quickActions">
      <slot name="quick-actions" />
    </QuickActions>
  {/if}
</div>
