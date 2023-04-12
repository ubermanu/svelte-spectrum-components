<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Accordion, AccordionItem, Theme } from '..'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <p>Default</p>
    <Accordion>
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
    <br />
    <p>Multiple</p>
    <Accordion allowMultiple>
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
  </Theme>
</Hst.Story>
