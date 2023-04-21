<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Badge } from '$lib'
  import { Info18 } from 'svelte-spectrum-icons/workflow'
  import Theme from '$lib/histoire/Theme.svelte'
  // FIXME: Icon is not rendered correctly in stories

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="informative">Informative</Badge>
      <Badge variant="negative">Negative</Badge>
      <Badge variant="positive">Positive</Badge>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Sizes">
    <Theme>
      <Badge size="S">Small</Badge>
      <Badge size="M">Medium</Badge>
      <Badge size="L">Large</Badge>
      <Badge size="XL">Extra Large</Badge>
      <br />
      <br />
      <Badge icon={Info18} size="S" />
      <Badge icon={Info18} size="M" />
      <Badge icon={Info18} size="L" />
      <Badge icon={Info18} size="XL" />
      <br />
      <br />
      <Badge icon={Info18} size="S">Small</Badge>
      <Badge icon={Info18} size="M">Medium</Badge>
      <Badge icon={Info18} size="L">Large</Badge>
      <Badge icon={Info18} size="XL">Extra Large</Badge>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Fixed edges">
    <Theme>
      <Badge icon={Info18} fixed="inline-start">Label Text</Badge>
      <Badge icon={Info18} fixed="inline-end">Label Text</Badge>
      <Badge icon={Info18} fixed="block-start">Label Text</Badge>
      <Badge icon={Info18} fixed="block-end">Label Text</Badge>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Text and Icon Color">
    <Theme>
      <Badge icon={Info18}>Label Text</Badge>
      <Badge icon={Info18} color="black">Label Text</Badge>
    </Theme>
  </Hst.Variant>
</Hst.Story>
