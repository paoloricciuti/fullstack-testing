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
-	const { page } = $props();
+	const { user_id, page } = $props();

	$effect(()=>{
+		const controller = new AbortController();
+		(async () => {
+			const res = await fetch(\`/profile/\${user_id}\`, { 
+				signal: controller.signal
+			});
+			const profile = await res.json();
-			navigator.sendBeacon('/analytics', { page });
+			navigator.sendBeacon('/analytics', { page, profile });
+		})();
+		return ()=>{
+			controller.abort();
+		}
	});
<` +
		`/script>
`}
/>
