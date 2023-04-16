<script lang="ts">
  import Theme from './Theme.svelte'
</script>

<Theme data-testid="theme" {...$$restProps}>
  <slot />
</Theme>
