<script lang="ts">
  import { getContext } from 'svelte'

  let start, size
  const { orientation, tabs, selectedTabId } = getContext('tabs')

  $: tab = $tabs.find((tab) => tab.id === $selectedTabId) ?? $tabs[0] ?? null

  // If horizontal, we need to set the left position of the selection indicator
  // according to the index of the selected tab.
  $: if (orientation === 'horizontal' && tab) {
    const rect = tab.el.getBoundingClientRect()
    const containerRect = tab.el.parentElement.getBoundingClientRect()
    start = rect.left - containerRect.left
    size = rect.width
  }

  // If vertical, we need to set the top position of the selection indicator
  // according to the index of the selected tab.
  $: if (orientation === 'vertical' && tab) {
    const rect = tab.el.getBoundingClientRect()
    const containerRect = tab.el.parentElement.getBoundingClientRect()
    start = rect.top - containerRect.top
    size = rect.height
  }
</script>

<div
  class="spectrum-Tabs-selectionIndicator"
  role="presentation"
  style:transform={orientation === 'horizontal'
    ? `translateX(${start}px)`
    : `translateY(${start}px)`}
  style:width={orientation === 'horizontal' ? `${size}px` : null}
  style:height={orientation === 'vertical' ? `${size}px` : null}
>
  &nbsp;
</div>
