<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	lang="svelte"
	title={6}
	class="text-2xl"
	code={`
<` +
		`script>
	import { locale, locales } from "$lib/locale"; // [!code --]
	import { locale, locales, getSystemLocale } from "$lib/locale"; // [!code ++]
	let open = $state(false);
</` +
		`script>
		
<button>
		Current locale: {$locale}// [!code --]
		Current locale: {$locale ?? getSystemLocale()} // [!code ++]
</button>
{#if open}
	<ul>
		<li> // [!code ++]
			<button onclick={()=> $locale = undefined }>System locale</button> // [!code ++]
		</li> // [!code ++]
		{#each locales as locale_option}
			<li>
				<button onclick={()=> $locale = locale_option }>
					{locale_option}
				</button>
			</li>
		{/each}
	</ul>
{/if}
`}
/>
