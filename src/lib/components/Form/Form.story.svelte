<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Form, Textfield, FormItem } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

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
