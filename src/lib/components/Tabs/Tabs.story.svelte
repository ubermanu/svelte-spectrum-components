<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Tabs, Tab } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <p>Horizontal</p>
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab selected>Tab 3</Tab>
    </Tabs>
    <br />
    <p>Vertical</p>
    <Tabs orientation="vertical">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  </Theme>
</Hst.Story>
