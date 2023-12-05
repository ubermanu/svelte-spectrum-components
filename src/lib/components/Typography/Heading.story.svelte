<script lang="ts">
  import Heading from '$lib/components/Typography/Heading.svelte'
</script>

<Heading level={1} size="XXXL" {...$$restProps}>
  HeadingXXXL <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={1} size="XXL" {...$$restProps}>
  HeadingXXL <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={1} {...$$restProps}>
  HeadingXL <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={2} {...$$restProps}>
  HeadingL <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={3} {...$$restProps}>
  HeadingM <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={4} {...$$restProps}>
  HeadingS <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={5} {...$$restProps}>
  HeadingXS <em>Emphasis</em> <strong>Strong</strong>.
</Heading>

<Heading level={6} {...$$restProps}>
  HeadingXXS <em>Emphasis</em> <strong>Strong</strong>.
</Heading>
