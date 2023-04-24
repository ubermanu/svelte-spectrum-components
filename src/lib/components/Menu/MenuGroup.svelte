<script lang="ts">
  import { v4 as uuid } from '@lukeed/uuid'
  import { setContext } from 'svelte'

  const headingId = uuid()

  export let heading: string = ''

  setContext('menuGroup', true)
</script>

<li role="presentation">
  <span class="spectrum-Menu-sectionHeading" aria-hidden="true" id={headingId}>
    {heading}
  </span>
  <ul class="spectrum-Menu" role="group" aria-labelledby={headingId}>
    <slot />
  </ul>
</li>
