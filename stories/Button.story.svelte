<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Button, Theme } from '../src/main.ts'

  export let Hst: Hst

  let disabled = false
  let content = 'Click me!'
</script>

<Hst.Story>
  <Hst.Variant title="Default">
    <Theme>
      <Button {disabled}>
        {content}
      </Button>
    </Theme>
    <svelte:fragment slot="controls">
      <Hst.Text bind:value={content} title="Content" />
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
    </svelte:fragment>
  </Hst.Variant>
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
