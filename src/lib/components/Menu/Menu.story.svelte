<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { logEvent } from 'histoire/client'
  import { Menu, MenuItem, MenuGroup, Divider } from '$lib'
  import { Copy18, Edit18 } from 'svelte-spectrum-icons/workflow'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant name="Standard">
    <Theme>
      <div class="spectrum-Examples--row">
        <Menu on:select={(e) => logEvent('select', e)}>
          <MenuItem>Deselect</MenuItem>
          <MenuItem>Select Inverse</MenuItem>
          <MenuItem>Feathers...</MenuItem>
          <MenuItem>Select and Mask...</MenuItem>
          <MenuItem>Save Selection</MenuItem>
          <Divider />
          <MenuItem disabled>Make Work Path</MenuItem>
        </Menu>

        <Menu on:select={(e) => logEvent('select', e)}>
          <MenuGroup heading="Section heading">
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
            <MenuItem>Action 3</MenuItem>
          </MenuGroup>
          <Divider />
          <MenuGroup heading="Section heading">
            <MenuItem icon={Edit18}>Edit</MenuItem>
            <MenuItem icon={Copy18} disabled>Copy</MenuItem>
          </MenuGroup>
        </Menu>

        <Menu on:select={(e) => logEvent('select', e)}>
          <MenuGroup heading="San Francisco">
            <MenuItem>Financial District</MenuItem>
            <MenuItem>South of Market</MenuItem>
            <MenuItem>North Beach</MenuItem>
          </MenuGroup>
          <Divider />
          <MenuGroup heading="Oakland">
            <MenuItem>City Center</MenuItem>
            <MenuItem disabled>Jack London Square</MenuItem>
            <MenuItem selected>
              My best friend's mom's house in the burbs just off Silverado
              street
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
    </Theme>
  </Hst.Variant>

  <Hst.Variant name="Selectable">
    <Theme>
      <div
        style="display: flex; align-items: flex-start; justify-content: space-around;"
      >
        <Menu selectable on:select={(e) => logEvent('select', e)}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem selected>Item 2</MenuItem>
          <MenuItem disabled>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </Menu>
        <Menu selectable multiple on:select={(e) => logEvent('select', e)}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem selected>Item 2</MenuItem>
          <MenuItem disabled>Item 3</MenuItem>
          <MenuItem selected>Item 4</MenuItem>
        </Menu>
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style>
  .spectrum-Examples--row {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
</style>
