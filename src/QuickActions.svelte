<script lang="ts">
  export let textOnly: boolean = false
  export let open: boolean = false

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div
  class="spectrum-QuickActions {additionalClasses || ''}"
  class:is-open={open}
  class:spectrum-QuickActions--textOnly={textOnly}
  {...rest}
>
  <slot />
</div>

<style>
  @import '@spectrum-css/quickaction/dist/index-vars.css';
</style>
