<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Tabs, Tab, Theme } from '$lib'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  </Theme>
</Hst.Story>
