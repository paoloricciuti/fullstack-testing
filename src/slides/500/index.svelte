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
	import { slide } from 'svelte/transition';
	let users = $state([...]);
	let open = $state(false);
<` +
		`/script>

<button onclick={()=>{ open = !open; }}>User list</button>
{#if open}
	<ul>
	{#each users as user}
		<li transition:slide> // [!code --]
		<li transition:slide|global> // [!code ++]
			<a href="/profile/{user.id}">{user.name} {user.last_name}</a>
		</li>
	{/each}
	</ul>
{/if}
`}
/>
