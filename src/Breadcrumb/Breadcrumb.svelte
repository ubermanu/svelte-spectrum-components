<script lang="ts">
  export let compact: boolean = false
  export let multiline: boolean = false
</script>

<ul
  class="spectrum-Breadcrumbs"
  class:spectrum-Breadcrumbs--compact={compact}
  class:spectrum-Breadcrumbs--multiline={multiline}
>
  <slot />
</ul>
