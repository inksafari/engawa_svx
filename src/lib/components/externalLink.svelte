<!--
	https://github.com/rodneylab/astro-blog-markdown/blob/06bdee0c7108e4abd9c4b3bf20b9331722f776dc/src/components/Footer.svelte
	<ExternalLink
		ariaLabel="Go to the @inksafari Twitter Page"
		href={`https://twitter.com/intent/user?screen_name=inksafari`}
	/>
-->
<script>
  export let rel = 'nofollow noopener noreferrer';
  export let target = '_blank';
  export let href;
  export let ariaLabel;
</script>

<a aria-label={ariaLabel} {href} {rel} {target}><slot /></a>
