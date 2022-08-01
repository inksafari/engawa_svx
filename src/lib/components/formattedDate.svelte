<script lang="ts">
	export let dateAttr, dateString
	const date = dateString.substr(0, dateString.indexOf('T'))

	const isoDate = new Date(date).toISOString()
	const displayDate = new Date(date).toLocaleDateString(
		undefined,
		{ year: '2-digit', month: 'short', day: '2-digit' }
	)
</script>
<time itemprop="{dateAttr}" datetime="{isoDate}">
	{displayDate}
</time>
<!--
	@links:
	https://github.com/drhayes/drhayes.io/blob/main/src/lib/components/articleDate.svelte
	https://github.com/EricRovell/eric-rovell/blob/main/src/lib/components/Datetime.svelte
	https://github.com/PurotoApp/Blog/blob/main/src/lib/compareDates.ts
	https://github.com/erbridge/website-theme/blob/89f38a8cb737b90ba41f7900e99f6e73ff84cd87/components/LongDate.svelte
-->
