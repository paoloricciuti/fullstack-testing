<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	lang="svelte"
	title={2}
	class="text-2xl"
	code={`
<` +
		`script>
	const { page } = $props(); // [!code --]
	const { user_id, page } = $props(); // [!code ++]

	$effect(()=>{
		const controller = new AbortController(); // [!code ++]
		(async () => { // [!code ++]
			const res = await fetch(\`/profile/\${user_id}\`, {  // [!code ++]
				signal: controller.signal // [!code ++]
			}); // [!code ++]
			const profile = await res.json(); // [!code ++]
			navigator.sendBeacon('/analytics', { page }); // [!code --]
			navigator.sendBeacon('/analytics', { page, profile }); // [!code ++]
		})(); // [!code ++]
		return ()=>{ // [!code ++]
			controller.abort(); // [!code ++]
		} // [!code ++]
	});
<` +
		`/script>
`}
/>
