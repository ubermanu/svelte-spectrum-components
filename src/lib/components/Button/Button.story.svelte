<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Button } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: 400 }}>
  <Hst.Variant title="Sizes">
    <Theme>
      <Button size="S">Button</Button>
      <Button size="M">Button</Button>
      <Button size="L">Button</Button>
      <Button size="XL">Button</Button>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Disabled">
    <Theme>
      <Button disabled>Button</Button>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Outline">
    <Theme>
      <Button treatment="outline" size="S">Button</Button>
      <Button treatment="outline" size="M">Button</Button>
      <Button treatment="outline" size="L">Button</Button>
      <Button treatment="outline" size="XL">Button</Button>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Outline disabled">
    <Theme>
      <Button treatment="outline" disabled>Button</Button>
    </Theme>
  </Hst.Variant>
</Hst.Story>
