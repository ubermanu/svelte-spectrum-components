<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Avatar } from '$lib'
  import exampleAva from '$lib/assets/example-ava.jpg'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
      <div class="spectrum-Examples spectrum-Examples--vertical">
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={50} />
          <Avatar src={exampleAva} size={50} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={75} />
          <Avatar src={exampleAva} size={75} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={100} />
          <Avatar src={exampleAva} size={100} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={200} />
          <Avatar src={exampleAva} size={200} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={300} />
          <Avatar src={exampleAva} size={300} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={400} />
          <Avatar src={exampleAva} size={400} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={500} />
          <Avatar src={exampleAva} size={500} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={600} />
          <Avatar src={exampleAva} size={600} disabled />
        </div>
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} size={700} />
          <Avatar src={exampleAva} size={700} disabled />
        </div>
      </div>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="With Link">
    <Theme>
      <div class="spectrum-Examples spectrum-Examples--vertical">
        <div class="spectrum-Examples-item">
          <Avatar src={exampleAva} href="javascript:" size={700} />
          <Avatar src={exampleAva} href="javascript:" size={700} disabled />
        </div>
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style>
  .spectrum-Examples {
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 6px;
  }

  .spectrum-Examples--vertical {
    flex-direction: column;
  }
</style>
