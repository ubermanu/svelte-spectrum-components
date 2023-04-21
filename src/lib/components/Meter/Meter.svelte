<script lang="ts">
  import { ProgressBar } from '$lib'

  export let size: 'S' | 'L' = 'L'
  export let variant: 'positive' | 'notice' | 'negative' | null = null

  const variantClassMap = {
    positive: 'is-positive',
    notice: 'is-notice',
    negative: 'is-negative',
  }

  // FIXME: Make the progressbar ignore the size prop when it's null

  const variantClass = variantClassMap[variant] ?? ''
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<ProgressBar
  class="spectrum-Meter--size{size} {variantClass} {additionalClasses}"
  size={null}
  {...rest}
/>
