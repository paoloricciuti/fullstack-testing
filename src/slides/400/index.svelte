<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	title={1}
	code={`
<` +
		`script>
   export let name;
-  $: trimmed = name.trim();
+  let trimmed = name.trim();
<` +
		`/script>

{#if trimmed}
    Your name is {name}
{:else}
    You need to provide a name
{/if}
`}
/>
