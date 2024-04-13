<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	title={2}
	class="text-2xl"
	code={`
<` +
		`script>
	let mouseX = $state();
	let mouseY = $state();

+	function handle_mouse_move(e){
+		mouseX = e.clientX;
+		mouseX = e.clientY;
+	}

	$effect(()=>{
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
