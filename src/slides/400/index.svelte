<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	lang="svelte"
	title={1}
	code={`
<` +
		`script>
   const { name } = $props();
  $: trimmed = name.trim(); // [!code --]
  let trimmed = name.trim(); // [!code ++]
<` +
		`/script>

{#if trimmed}
    Your name is {name}
{:else}
    You need to provide a name
{/if}
`}
/>
