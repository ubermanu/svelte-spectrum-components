<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Breadcrumb, BreadcrumbItem, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Breadcrumb>
      <BreadcrumbItem separator={true} label="Item 1" />
      <BreadcrumbItem separator={true} label="Item 2" />
      <BreadcrumbItem current={true} label="Item 3" />
    </Breadcrumb>
  </Theme>
</Hst.Story>
