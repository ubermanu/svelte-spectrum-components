<script lang="ts">
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div class="spectrum-Asset">
  <img class="spectrum-Asset-image {additionalClasses}" alt {...rest} />
</div>

<style>
  @import '@spectrum-css/asset/dist/index-vars.css';
</style>
