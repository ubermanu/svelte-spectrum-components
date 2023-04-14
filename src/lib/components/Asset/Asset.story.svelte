<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Asset } from '$lib'
  import exampleAva from '$lib/assets/example-ava.jpg'

  export let Hst: Hst
</script>

<Hst.Story>
  <Asset
    src={exampleAva}
    style="max-width: 75%; max-height: 75%; object-fit: contain;"
  />
</Hst.Story>
