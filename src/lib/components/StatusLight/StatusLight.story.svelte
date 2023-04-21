<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import StatusLight from './StatusLight.svelte'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Sizing">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <StatusLight size="S">Small</StatusLight>
        </div>
        <div class="spectrum-Examples-item">
          <StatusLight size="M">Medium</StatusLight>
        </div>
        <div class="spectrum-Examples-item">
          <StatusLight size="L">Large</StatusLight>
        </div>
        <div class="spectrum-Examples-item">
          <StatusLight size="XL">Extra Large</StatusLight>
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Wrapping">
    <Theme>
      <StatusLight color="celery">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id
        interdum velit laoreet id donec ultrices tincidunt. Sollicitudin nibh
        sit amet commodo nulla facilisi. Auctor urna nunc id cursus. Sem viverra
        aliquet eget sit amet tellus cras adipiscing.
      </StatusLight>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Colors">
    <Theme>
      <StatusLight color="gray">Gray Status</StatusLight>
      <StatusLight color="red">Red Status</StatusLight>
      <StatusLight color="orange">Orange Status</StatusLight>
      <StatusLight color="yellow">Yellow Status</StatusLight>
      <StatusLight color="chartreuse">Chartreuse Status</StatusLight>
      <StatusLight color="celery">Celery Status</StatusLight>
      <StatusLight color="green">Green Status</StatusLight>
      <StatusLight color="seafoam">Seafoam Status</StatusLight>
      <StatusLight color="cyan">Cyan Status</StatusLight>
      <StatusLight color="blue">Blue Status</StatusLight>
      <StatusLight color="indigo">Indigo Status</StatusLight>
      <StatusLight color="purple">Purple Status</StatusLight>
      <StatusLight color="fuchsia">Fuchsia Status</StatusLight>
      <StatusLight color="magenta">Magenta Status</StatusLight>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Variants">
    <Theme>
      <StatusLight variant="neutral">Neutral</StatusLight>
      <StatusLight variant="accent">Accent</StatusLight>
      <StatusLight variant="info">Info</StatusLight>
      <StatusLight variant="positive">Positive</StatusLight>
      <StatusLight variant="notice">Notice</StatusLight>
      <StatusLight variant="negative">Negative</StatusLight>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style global>
  @import '$lib/histoire/styles.css';
</style>
