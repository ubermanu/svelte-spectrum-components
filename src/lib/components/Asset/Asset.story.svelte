<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { AssetImage, AssetFile, AssetFolder } from '$lib'
  import exampleAva from '$lib/assets/example-ava.jpg'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Image">
    <Theme>
      <AssetImage src={exampleAva} />
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="File">
    <Theme>
      <AssetFile />
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Folder">
    <Theme>
      <AssetFolder />
    </Theme>
  </Hst.Variant>
</Hst.Story>
