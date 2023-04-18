<script lang="ts">
  export let size: 50 | 75 | 100 | 200 | 300 | 400 | 500 | 600 | 700 = 100
  export let disabled: boolean = false

  // Image
  export let src: string = ''
  export let alt: string = ''

  // Link
  export let href: string | undefined = undefined
  export let target: string | undefined = undefined

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Avatar spectrum-Avatar--size{size} {additionalClasses}"
  class:is-disabled={disabled}
  {...rest}
  on:click
>
  {#if href}
    <a {href} {target} class="spectrum-Avatar-link">
      <img class="spectrum-Avatar-image" {src} {alt} />
    </a>
  {:else}
    <img class="spectrum-Avatar-image" {src} {alt} />
  {/if}
</div>
