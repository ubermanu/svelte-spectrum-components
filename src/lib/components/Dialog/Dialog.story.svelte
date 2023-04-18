<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Dialog, ConfirmationDialog, ErrorDialog, Theme } from '$lib'
  import cardPortrait from '$lib/assets/example-card-portrait.jpg'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Dialog">
    <Theme>
      <Dialog heading="Dialog">
        <p>Dialog content</p>
      </Dialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="No divider">
    <Theme>
      <Dialog
        heading="Disclaimer"
        dismissable
        noDivider
        on:dismiss={() => console.log('dismiss')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris
        augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas
        diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper
        viverra nam libero justo laoreet. Enim ut tellus elementum sagittis
        vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur
        libero id faucibus nisl. Diam volutpat commodo sed egestas egestas.
        Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a
        diam maecenas sed. Turpis in eu mi bibendum neque egestas congue.
        Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis.
      </Dialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Hero">
    <Theme>
      <Dialog
        heading="Disclaimer"
        dismissable
        noDivider
        image={cardPortrait}
        on:dismiss={() => console.log('dismiss')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris
        augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas
        diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper
        viverra nam libero justo laoreet. Enim ut tellus elementum sagittis
        vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur
        libero id faucibus nisl. Diam volutpat commodo sed egestas egestas.
        Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a
        diam maecenas sed. Turpis in eu mi bibendum neque egestas congue.
        Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis.
      </Dialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Confirmation">
    <Theme>
      <ConfirmationDialog
        heading="Enable Smart Filters?"
        on:cancel={() => console.log('cancel')}
        on:accept={() => console.log('accept')}
      >
        Smart filters are nondestructive and will preserve your original images.
      </ConfirmationDialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Confirmation (Informative)">
    <Theme>
      <ConfirmationDialog
        variant="informative"
        heading="Connect to WiFi"
        acceptLabel="Continue"
        on:cancel={() => console.log('cancel')}
        on:accept={() => console.log('accept')}
      >
        Please connect to WiFi to sync your projects or go to Settings to change
        your preferences.
      </ConfirmationDialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Confirmation (Destructive)">
    <Theme>
      <ConfirmationDialog
        variant="destructive"
        heading="Delete 3 Documents"
        acceptLabel="Delete"
        on:cancel={() => console.log('cancel')}
        on:accept={() => console.log('accept')}
      >
        Are you sure you want to delete the 3 selected documents?
      </ConfirmationDialog>
    </Theme>
  </Hst.Variant>
  <Hst.Variant title="Error">
    <Theme>
      <ErrorDialog
        heading="Unable to Share"
        on:accept={() => console.log('accept')}
      >
        An error occurred while sharing your project. Please verify the email
        address and try again.
      </ErrorDialog>
    </Theme>
  </Hst.Variant>
</Hst.Story>
