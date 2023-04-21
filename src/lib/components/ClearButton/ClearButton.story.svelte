<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import ClearButton from './ClearButton.svelte'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Sizing">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <ClearButton size="S" />
        </div>
        <div class="spectrum-Examples-item">
          <ClearButton size="M" />
        </div>
        <div class="spectrum-Examples-item">
          <ClearButton size="L" />
        </div>
        <div class="spectrum-Examples-item">
          <ClearButton size="XL" />
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Theme>
      <ClearButton disabled />
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Over background">
    <Theme>
      <div
        style="background-color: rgb(15, 121, 125); color: rgb(15, 121, 125); padding: 15px 20px;"
      >
        <ClearButton overBackground />
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style global>
  @import '$lib/histoire/styles.css';
</style>
