<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Icon } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  import Alert18 from 'svelte-spectrum-icons/workflow/Alert18.svelte'
  import Checkmark18 from 'svelte-spectrum-icons/workflow/Checkmark18.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Icon icon={Alert18} />
    <Icon icon={Checkmark18} size="L" />
  </Theme>
</Hst.Story>
