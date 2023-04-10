<script lang="ts">
  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div class="spectrum-Asset">
  <img class="spectrum-Asset-image {additionalClasses || ''}" alt {...rest} />
</div>

<style lang="postcss">
  @import '@spectrum-css/asset/dist/index-vars.css';
</style>
