<script lang="ts" context="module">
	import Highlight from '@lib/components/highlight.svelte';
	import Sticky from '@lib/components/sticky.svelte';
	import type { Props } from '@slides/types';

	export const props: Props = {
		animate: true
	};
</script>

<div class="full-size with-title">
	<Sticky as="h1" data-id="title" class="text-slate-950 p-4">Unit testing</Sticky>
	<Highlight
		lang="typescript"
		code={`
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'; // [!code --]
import { defineConfig } from 'vitest/config'; // [!code ++]

export default defineConfig({
	plugins: [sveltekit()],
	test: { // [!code ++]
		include: ['src/**/*.{test,spec}.{js,ts}'], // [!code ++]
	} // [!code ++]
});
`}
	/>
</div>
