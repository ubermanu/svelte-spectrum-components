<script lang="ts">
  import { setContext } from 'svelte'

  setContext('tagGroup', true)
</script>

<div class="spectrum-TagGroup" role="list" {...$$restProps}>
  <slot />
</div>
