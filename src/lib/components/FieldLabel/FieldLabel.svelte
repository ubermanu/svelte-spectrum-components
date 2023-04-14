<script lang="ts">
  export let size: TShirtSize = 'M'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<label
  class="spectrum-FieldLabel spectrum-FieldLabel--size{size} {additionalClasses}"
  {...rest}
>
  <slot />
</label>
