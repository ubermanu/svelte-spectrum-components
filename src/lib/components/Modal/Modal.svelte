<script lang="ts">
  import { setContext } from 'svelte'

  export let open: boolean = false
  export let fullscreen: boolean = false

  const closeModal = () => {
    open = false
  }

  const openModal = () => {
    open = true
  }

  setContext('modal', { open, fullscreen, closeModal, openModal })

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div class="spectrum-Modal-wrapper {additionalClasses}" {...rest}>
  <div
    class="spectrum-Modal"
    class:spectrum-Modal--fullscreen={fullscreen}
    class:is-open={open}
  >
    <slot />
  </div>
</div>
