<script lang="ts">
  export let theme: string = 'spectrum'
  export let color: string = 'light'
  export let scale: string = 'medium'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum spectrum--{color} spectrum--{scale} {additionalClasses}"
  {...rest}
>
  <slot />
</div>
