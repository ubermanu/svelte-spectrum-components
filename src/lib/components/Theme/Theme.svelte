<script lang="ts">
  export let theme: string = 'spectrum'
  export let color: string = 'light'
  export let scale: string = 'medium'
</script>

<div class="spectrum spectrum--{color} spectrum--{scale}" {...$$restProps}>
  <slot />
</div>
