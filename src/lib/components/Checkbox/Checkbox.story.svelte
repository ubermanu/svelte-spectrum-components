<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Checkbox, Theme } from '$lib'

  export let Hst: Hst

  let invalid = false
  let disabled = false
  let readonly = false
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Default
          </h4>
          <Checkbox label="Checkbox" />
          <br />
          <Checkbox label="Checkbox" checked />
          <br />
          <Checkbox label="Checkbox" indeterminate />
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Invalid
          </h4>
          <Checkbox label="Checkbox" invalid />
          <br />
          <Checkbox label="Checkbox" invalid checked />
          <br />
          <Checkbox label="Checkbox" invalid indeterminate />
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Disabled
          </h4>
          <Checkbox label="Checkbox" disabled />
          <br />
          <Checkbox label="Checkbox" disabled checked />
          <br />
          <Checkbox label="Checkbox" disabled indeterminate />
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Read-only
          </h4>
          <Checkbox label="Checkbox" readonly />
          <br />
          <Checkbox label="Checkbox" readonly checked />
          <br />
          <Checkbox label="Checkbox" readonly indeterminate />
        </div>
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
