<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Accordion, AccordionItem } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
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
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Multiple">
    <Theme>
      <Accordion multiple>
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
  </Hst.Variant>
</Hst.Story>
