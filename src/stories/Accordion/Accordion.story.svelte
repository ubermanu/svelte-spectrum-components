<script lang="ts">
  import Accordion from '$lib/components/Accordion/Accordion.svelte'
  import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte'

  export let multiple = false
</script>

<Accordion {multiple}>
  <AccordionItem label="Recent" open>
    <p>Item 1</p>
  </AccordionItem>
  <AccordionItem label="Architecture" disabled>
    <p>Item 2</p>
  </AccordionItem>
  <AccordionItem label="Nature">
    <p>Item 3</p>
  </AccordionItem>
  <AccordionItem
    label="Really Long Accordion Item According to Our Predictions"
  >
    <p>Item 4</p>
  </AccordionItem>
</Accordion>
