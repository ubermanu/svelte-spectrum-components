<script lang="ts">
  import { Icon } from '$lib'
  import { Star18, StarOutline18 } from 'svelte-spectrum-icons/workflow'

  export let value: number = 0
  export let min: number = 0
  export let max: number = 5

  export let readonly: boolean = false
  export let label: string = 'Rating'
  export let emphasized: boolean = false
  export let disabled: boolean = false

  $: value = Math.min(Math.max(value, min), max)
</script>

<div
  class="spectrum-Rating"
  class:spectrum-Rating--emphasized={emphasized}
  class:is-readOnly={readonly}
  class:is-disabled={disabled}
>
  <input
    class="spectrum-Rating-input"
    type="range"
    {min}
    {max}
    {value}
    {readonly}
    {disabled}
    aria-label={label}
  />

  {#each Array.from({ length: max - min }) as _, i}
    <span
      class="spectrum-Rating-icon"
      on:click={() => (value = i + 1)}
      class:is-selected={i < value}
    >
      <Icon icon={Star18} class="spectrum-Rating-starActive" />
      <Icon icon={StarOutline18} class="spectrum-Rating-starInactive" />
    </span>
  {/each}
</div>
