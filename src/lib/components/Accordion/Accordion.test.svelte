<script lang="ts">
  import Accordion from './Accordion.svelte'
  import AccordionItem from './AccordionItem.svelte'

  export let items: { id: number; title: string; content: string }[] = []
</script>

<Accordion data-testid="accordion" {...$$restProps}>
  {#each items as item}
    <AccordionItem title={item.title} data-testid="accordion-item-{item.id}">
      {item.content}
    </AccordionItem>
  {/each}
</Accordion>
