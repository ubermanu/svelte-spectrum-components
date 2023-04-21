<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Textfield } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst

  let placeholder = 'Placeholder'
</script>

<Hst.Story layout={{ type: 'grid', width: 400 }}>
  <Hst.Variant title="Default">
    <Theme>
      <div class="list">
        <Textfield {placeholder} />
        <Textfield {placeholder} invalid />
        <Textfield {placeholder} valid />
      </div>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Sizes">
    <Theme>
      <div class="list">
        <Textfield size="S" placeholder="Small" />
        <Textfield size="M" placeholder="Medium" />
        <Textfield size="L" placeholder="Large" />
        <Textfield size="XL" placeholder="Extra Large" />
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
