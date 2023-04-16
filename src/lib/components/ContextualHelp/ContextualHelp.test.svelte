<script lang="ts">
  import ContextualHelp from './ContextualHelp.svelte'
  export let content: string = ''
</script>

<ContextualHelp data-testid="contextual-help" {...$$restProps}>
  {content}
</ContextualHelp>
