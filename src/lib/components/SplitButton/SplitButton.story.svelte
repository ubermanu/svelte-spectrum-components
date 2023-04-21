<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import SplitButton from './SplitButton.svelte'
  import Theme from '$lib/histoire/Theme.svelte'
  import { logEvent } from 'histoire/client'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="CTA">
    <Theme>
      <SplitButton
        variant="accent"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
      <br />
      <SplitButton
        variant="accent"
        placement="left"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Primary">
    <Theme>
      <SplitButton
        variant="primary"
        treatment="outline"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
      <br />
      <SplitButton
        variant="primary"
        treatment="outline"
        placement="left"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Secondary">
    <Theme>
      <SplitButton
        variant="secondary"
        treatment="outline"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
      <br />
      <SplitButton
        variant="secondary"
        treatment="outline"
        placement="left"
        on:click={(e) => logEvent('click', e)}
        on:trigger={(e) => logEvent('trigger', e)}
      >
        Split Button
      </SplitButton>
    </Theme>
  </Hst.Variant>
</Hst.Story>
