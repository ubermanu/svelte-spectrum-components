<script lang="ts">
  import Heading from './Heading.svelte'

  export let content = ''
</script>

<Heading data-testid="heading" {...$$restProps}>{content}</Heading>
