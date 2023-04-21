<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import Radio from './Radio.svelte'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Sizing">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <form>
            <Radio name="pets" label="Kittens" size="S" checked />
            <br />
            <Radio name="pets" label="Puppies" size="S" />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <form>
            <Radio name="pets" label="Kittens" size="M" checked />
            <br />
            <Radio name="pets" label="Puppies" size="M" />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <form>
            <Radio name="pets" label="Kittens" size="L" checked />
            <br />
            <Radio name="pets" label="Puppies" size="L" />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <form>
            <Radio name="pets" label="Kittens" size="XL" checked />
            <br />
            <Radio name="pets" label="Puppies" size="XL" />
          </form>
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Standard">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Default
          </h4>
          <form>
            <Radio name="pets" label="Kittens" checked />
            <br />
            <Radio name="pets" label="Puppies" />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Invalid
          </h4>
          <form>
            <Radio name="pets" label="Kittens" checked invalid />
            <br />
            <Radio name="pets" label="Puppies" invalid />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Disabled
          </h4>
          <form>
            <Radio name="pets" label="Kittens" checked disabled />
            <br />
            <Radio name="pets" label="Puppies" disabled />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Read-only
          </h4>
          <form>
            <Radio name="pets" label="Kittens" checked readonly />
            <br />
            <Radio name="pets" label="Puppies" readonly />
          </form>
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Emphasized">
    <Theme>
      <div class="spectrum-Examples">
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Default
          </h4>
          <form>
            <Radio name="pets" label="Kittens" emphasized checked />
            <br />
            <Radio name="pets" label="Puppies" emphasized />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Invalid
          </h4>
          <form>
            <Radio name="pets" label="Kittens" emphasized checked invalid />
            <br />
            <Radio name="pets" label="Puppies" emphasized invalid />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Disabled
          </h4>
          <form>
            <Radio name="pets" label="Kittens" emphasized checked disabled />
            <br />
            <Radio name="pets" label="Puppies" emphasized disabled />
          </form>
        </div>
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Read-only
          </h4>
          <form>
            <Radio name="pets" label="Kittens" emphasized checked readonly />
            <br />
            <Radio name="pets" label="Puppies" emphasized readonly />
          </form>
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Wrapping behavior">
    <Theme>
      <Radio>
        Radio with an extraordinarily long label please don't do this but if you
        did it should wrap text when it gets longer than the container which
        contains the radio which has an unacceptably long label
      </Radio>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style global>
  @import '$lib/histoire/styles.css';
</style>
