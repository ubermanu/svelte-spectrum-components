<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Form, Textfield, FormItem, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Form>
      <FormItem label="Textfield">
        <Textfield placeholder="Placeholder" value="Value" />
      </FormItem>
    </Form>
  </Theme>
</Hst.Story>
