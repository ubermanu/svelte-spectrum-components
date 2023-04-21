<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Avatar } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'
  import Tag from './Tag.svelte'
  import TagGroup from './TagGroup.svelte'
  import { CheckmarkCircle18 } from 'svelte-spectrum-icons/workflow'
  import exampleAva from '$lib/assets/example-ava.jpg'
  import { logEvent } from 'histoire/client'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme>
      <div class="spectrum-Examples spectrum-Examples--vertical">
        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Default
          </h4>
          <Tag>Tag label</Tag>
          <Tag icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag removable on:remove={(e) => logEvent('remove', e)}>
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Selected
          </h4>
          <Tag selected>Tag label</Tag>
          <Tag selected icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag selected removable on:remove={(e) => logEvent('remove', e)}>
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Invalid
          </h4>
          <Tag invalid>Tag label</Tag>
          <Tag invalid icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag invalid removable on:remove={(e) => logEvent('remove', e)}>
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Disabled
          </h4>
          <Tag disabled>Tag label</Tag>
          <Tag disabled icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag disabled removable on:remove={(e) => logEvent('remove', e)}>
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Selected + Invalid
          </h4>
          <Tag selected invalid>Tag label</Tag>
          <Tag selected invalid icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag
            selected
            invalid
            removable
            on:remove={(e) => logEvent('remove', e)}
          >
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>

        <div class="spectrum-Examples-item">
          <h4
            class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
          >
            Emphasized
          </h4>
          <Tag emphasized>Tag label</Tag>
          <Tag emphasized icon={CheckmarkCircle18}>Tag label</Tag>
          <Tag emphasized removable on:remove={(e) => logEvent('remove', e)}>
            <Avatar src={exampleAva} size={50} slot="icon" />
            Tag label
          </Tag>
        </div>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Group">
    <Theme>
      <TagGroup>
        <Tag>Tag label</Tag>
        <Tag icon={CheckmarkCircle18}>Tag label</Tag>
        <Tag removable on:remove={(e) => logEvent('remove', e)}>
          <Avatar src={exampleAva} size={50} slot="icon" />
          Tag label
        </Tag>
      </TagGroup>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style global>
  @import '$lib/histoire/styles.css';
</style>
