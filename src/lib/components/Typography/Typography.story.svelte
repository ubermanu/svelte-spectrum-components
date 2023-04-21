<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Heading } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Heading">
    <Theme>
      <Heading level={1} size="XXXL">HeadingXXXL</Heading>
      <Heading level={1} size="XXL">HeadingXXL</Heading>
      <Heading level={1}>HeadingXL</Heading>
      <Heading level={2}>HeadingL</Heading>
      <Heading level={3}>HeadingM</Heading>
      <Heading level={4}>HeadingS</Heading>
      <Heading level={5}>HeadingXS</Heading>
      <Heading level={6}>HeadingXXS</Heading>
    </Theme>
  </Hst.Variant>
</Hst.Story>
