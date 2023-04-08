<script lang="ts">
  import '@spectrum-css/fieldlabel/dist/index-vars.css'

  export let size: Size = 'M'

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<label
  class="spectrum-FieldLabel spectrum-FieldLabel--size{size} {additionalClasses ||
    ''}"
  {...rest}
>
  <slot />
</label>
