<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Edit18 } from 'svelte-spectrum-icons/workflow'
  import { ActionButton } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ActionButton size="S">Edit</ActionButton>
    <ActionButton>Edit</ActionButton>
    <ActionButton icon={Edit18}>Edit</ActionButton>
    <ActionButton icon={Edit18} size="XL">Edit</ActionButton>
    <ActionButton icon={Edit18} />
    <ActionButton icon={Edit18} hold />
    <ActionButton icon={Edit18} disabled />
    <ActionButton icon={Edit18} selected />
    <ActionButton icon={Edit18} quiet />
    <ActionButton icon={Edit18} emphasized selected />
    <ActionButton icon={Edit18} staticWhite />
    <ActionButton icon={Edit18} staticBlack />
  </Theme>
</Hst.Story>
