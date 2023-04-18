<script lang="ts">
  import { Checkbox } from '$lib'

  export let title: string
  export let subtitle: string
  export let coverPhoto: string
  export let selected: boolean = false
  export let selection: 'checkbox' | 'highlight' | 'ordered' = 'checkbox'
  export let order: number = 0
  export let dropTarget: boolean = false

  const toggle = () => {
    selected = !selected
  }
</script>

<div
  class="spectrum-AssetCard"
  class:spectrum-AssetCard--checkboxSelection={selection === 'checkbox'}
  class:spectrum-AssetCard--highlightSelection={selection === 'highlight'}
  class:spectrum-AssetCard--orderedSelection={selection === 'ordered'}
  class:is-drop-target={dropTarget}
  class:is-selected={selected}
  tabindex="0"
  role="figure"
  on:click|preventDefault={toggle}
>
  <div class="spectrum-AssetCard-assetContainer">
    {#if coverPhoto}
      <img class="spectrum-AssetCard-asset" src={coverPhoto} alt />
    {/if}
    <div class="spectrum-AssetCard-selectionOverlay" />
  </div>
  <div class="spectrum-AssetCard-header">
    {#if title}
      <div class="spectrum-AssetCard-title">{title}</div>
    {/if}
    {#if subtitle}
      <div class="spectrum-AssetCard-headerContent">{subtitle}</div>
    {/if}
  </div>
  {#if $$slots.default}
    <div class="spectrum-AssetCard-content">
      <slot />
    </div>
  {/if}
  <div class="spectrum-AssetCard-selectionIndicator">
    {#if selection === 'checkbox'}
      <Checkbox
        containerClass="spectrum-AssetCard-checkbox"
        bind:checked={selected}
        emphasized
      />
    {/if}
    {#if selection === 'ordered'}
      <div class="spectrum-AssetCard-selectionOrder">{order}</div>
    {/if}
  </div>
</div>
