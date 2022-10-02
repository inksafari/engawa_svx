<script>
	import { page } from '$app/stores';
	import Error from '$lib/layouts/Error.svelte';
	// $: ({error, status} = $page)
</script>

<!-- Specify status, but leave everything else -->
<Error page={{ ...$page, status: 404 }} />
