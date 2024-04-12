<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	title={2}
	code_class="text-2xl"
	code={`
<` +
		`script>
	import { onMount } from 'svelte';
	let mouseX;
	let mouseY;

+	function handle_mouse_move(e){
+		mouseX = e.clientX;
+		mouseX = e.clientY;
+	}

	onMount(()=>{
-		window.addEventListener('mousemove', ()=>{
-			mouseX = e.clientX;
-			mouseX = e.clientY;
-		});
+		window.addEventListener('mousemove', handle_mouse_move);
+		return ()=>{
+			window.removeEventListener('mousemove', handle_mouse_move);
+		}
	});
<` +
		`/script>

{mouseX} x {mouseY}
`}
/>
