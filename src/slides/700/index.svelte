<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	lang="svelte"
	title={4}
	class="text-2xl"
	code={`
<` +
		`script>
	let mouseX = $state();
	let mouseY = $state();

	function handle_mouse_move(e){ // [!code ++]
		mouseX = e.clientX; // [!code ++]
		mouseX = e.clientY; // [!code ++]
	} // [!code ++]

	$effect(()=>{
		window.addEventListener('mousemove', ()=>{ // [!code --]
			mouseX = e.clientX; // [!code --]
			mouseX = e.clientY; // [!code --]
		}); // [!code --]
		window.addEventListener('mousemove', handle_mouse_move); // [!code ++]
		return ()=>{ // [!code ++]
			window.removeEventListener('mousemove', handle_mouse_move); // [!code ++]
		} // [!code ++]
	});
<` +
		`/script>
<!-- please ignore that this could've been done with <svelte:window /> -->
{mouseX} x {mouseY}
`}
/>
