<script lang="ts">
  import '@spectrum-css/vars/dist/spectrum-large.css'
  import '@spectrum-css/vars/dist/spectrum-medium.css'

  import '@spectrum-css/vars/dist/spectrum-dark.css'
  import '@spectrum-css/vars/dist/spectrum-darkest.css'
  import '@spectrum-css/vars/dist/spectrum-light.css'

  export let theme: string = 'spectrum'
  export let color: string = 'light'
  export let scale: string = 'medium'
</script>

<div class="spectrum spectrum--light spectrum--medium">
  <slot />
</div>
