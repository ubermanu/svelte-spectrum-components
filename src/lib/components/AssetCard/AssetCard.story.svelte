<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { AssetCard } from '$lib'
  import exampleCardPortrait from '$lib/assets/example-card-portrait.jpg'
  import exampleCardLandscape from '$lib/assets/example-card-landscape.jpeg'
  import exampleCardSquare from '$lib/assets/example-card-square.png'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '264' }}>
  <Hst.Variant title="Portrait">
    <Theme>
      <AssetCard coverPhoto={exampleCardPortrait} title="Card title">
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Landscape">
    <Theme>
      <AssetCard coverPhoto={exampleCardLandscape} title="Card title">
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Square">
    <Theme>
      <AssetCard coverPhoto={exampleCardSquare} title="Card title">
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Optional Content">
    <Theme>
      <AssetCard
        coverPhoto={exampleCardSquare}
        title="MVI_0123.mp4"
        subtitle="39:02"
      />
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Checkbox Selection">
    <Theme>
      <AssetCard
        coverPhoto={exampleCardPortrait}
        title="Card title"
        selection="checkbox"
      >
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Highlight Selection">
    <Theme>
      <AssetCard
        coverPhoto={exampleCardPortrait}
        title="Card title"
        selection="highlight"
      >
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Ordered Selection">
    <Theme>
      <AssetCard
        coverPhoto={exampleCardPortrait}
        title="Card title"
        selection="ordered"
        order={1}
      >
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Drop Target">
    <Theme>
      <AssetCard
        coverPhoto={exampleCardPortrait}
        title="Card title"
        selection="highlight"
        dropTarget
      >
        Image
      </AssetCard>
    </Theme>
  </Hst.Variant>
</Hst.Story>
