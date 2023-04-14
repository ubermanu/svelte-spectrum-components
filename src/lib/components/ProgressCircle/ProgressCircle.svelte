<script lang="ts">
  export let size: 'small' | 'medium' | 'large' = 'medium'
  export let staticWhite: boolean = false
  export let staticBlack: boolean = false
  export let indeterminate: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-ProgressCircle {additionalClasses}"
  class:spectrum-ProgressCircle--small={size === 'small'}
  class:spectrum-ProgressCircle--large={size === 'large'}
  class:spectrum-ProgressCircle--staticWhite={staticWhite}
  class:spectrum-ProgressCircle--staticBlack={staticBlack}
  class:spectrum-ProgressCircle--indeterminate={indeterminate}
  {...rest}
>
  <div class="spectrum-ProgressCircle-track" />
  <div class="spectrum-ProgressCircle-fills">
    <div class="spectrum-ProgressCircle-fillMask1">
      <div class="spectrum-ProgressCircle-fillSubMask1">
        <div class="spectrum-ProgressCircle-fill" />
      </div>
    </div>
    <div class="spectrum-ProgressCircle-fillMask2">
      <div class="spectrum-ProgressCircle-fillSubMask2">
        <div class="spectrum-ProgressCircle-fill" />
      </div>
    </div>
  </div>
</div>
