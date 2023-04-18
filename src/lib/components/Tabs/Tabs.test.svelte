<script lang="ts">
  import Tabs from './Tabs.svelte'
  import Tab from './Tab.svelte'

  export let items = <{ id: string; label: string; selected: boolean }[]>[]
</script>

<Tabs data-testid="tabs" {...$$restProps}>
  {#each items as item}
    <Tab data-testid="tab-item-{item.id}" selected={item.selected ?? false}>
      {item.label}
    </Tab>
  {/each}
</Tabs>
