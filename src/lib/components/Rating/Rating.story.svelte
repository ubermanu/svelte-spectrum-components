<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Rating } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
      <Rating />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Selected">
    <Theme>
      <Rating value={3} />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Read-only">
    <Theme>
      <Rating value={3} readonly />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Emphasized">
    <Theme>
      <Rating emphasized />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Emphasized (selected)">
    <Theme>
      <Rating emphasized value={3} />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Emphasized (read-only)">
    <Theme>
      <Rating emphasized value={3} readonly />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Theme>
      <Rating value={3} disabled />
    </Theme>
  </Hst.Variant>
</Hst.Story>
