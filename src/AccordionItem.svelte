<script lang="ts">
  export let open: boolean = false
  export let disabled: boolean = false
  export let label: string = ''

  // TODO: Check if the parent accordion has allowMultiple = true
  function toggle() {
    if (disabled) {
      return
    }
    open = !open
  }
</script>

<div
  class="spectrum-Accordion-item"
  class:is-open={open}
  class:is-disabled={disabled}
  role="presentation"
>
  <h3 class="spectrum-Accordion-itemHeading">
    <button
      class="spectrum-Accordion-itemHeader"
      type="button"
      id="spectrum-accordion-item-0-header"
      aria-controls="spectrum-accordion-item-0-content"
      aria-expanded={open}
      {disabled}
      on:click={toggle}>{label}</button
    >
    <svg
      class="spectrum-Icon spectrum-UIIcon-ChevronRight100 spectrum-Accordion-itemIndicator"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-css-icon-Chevron100" />
    </svg>
  </h3>

  <div
    class="spectrum-Accordion-itemContent"
    role="region"
    id="spectrum-accordion-item-0-content"
    aria-labelledby="spectrum-accordion-item-0-header"
  >
    <slot />
  </div>
</div>
