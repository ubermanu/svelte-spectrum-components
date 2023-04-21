<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  export let color:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'chartreuse'
    | 'celery'
    | 'green'
    | 'seafoam'
    | 'cyan'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'fuchsia'
    | 'magenta'
    | undefined = undefined

  export let variant:
    | 'neutral'
    | 'accent'
    | 'info'
    | 'positive'
    | 'notice'
    | 'negative' = 'info'
</script>

<div
  class="spectrum-StatusLight spectrum-StatusLight--size{size} spectrum-StatusLight--{color ||
    variant}"
  {...$$restProps}
>
  <slot />
</div>
