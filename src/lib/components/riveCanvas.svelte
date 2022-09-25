<!-- @credit
- https://github.com/in03/atira-blog
- https://github.com/petercoyne/splice-v7
-->
<script>
	import { onMount } from 'svelte';
	import { Rive } from '@rive-app/canvas';
	export let source;
	export let canvasWidth = 320;
	export let canvasHeight = 320;
	let rive, canvas;

	onMount(async () => {
		rive = new Rive({
			src: source,
			canvas: canvas,
			autoplay: true
		});
	});
</script>
<div id='riv-wrapper'>
	<canvas
		width={canvasWidth}
		height={canvasHeight}
		bind:this={canvas}
		id='retina-canvas'
	/>
</div>
<style>
	#riv-wrapper {
		/* border: solid 1px blue;   */
		text-align: center;
		display: inline;
		width: 80%;
	}
</style>
