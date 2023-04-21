<script lang="ts">
  import { isDark } from 'histoire/client'
  import Theme from '$lib/components/Theme/Theme.svelte'
</script>

<Theme color={isDark() ? 'dark' : 'light'} {...$$restProps}>
  <slot />
</Theme>
