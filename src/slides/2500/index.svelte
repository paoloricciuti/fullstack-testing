<script lang="ts">
	import Highlight from '@lib/components/highlight.svelte';
	import Notes from '@lib/components/notes.svelte';
	import Sticky from '@lib/components/sticky.svelte';
	import type { Props } from '@slides/types';

	export const props: Props = {
		animate: true
	};
</script>

<Notes
	>{`
- Explain the change
- Explain resolve.conditions 
- Remember them to put vitest setup in src for TS types
- Remember the environment
`}
</Notes>
<div class="full-size with-title">
	<Sticky as="h1" data-id="title" class="text-slate-950 p-4">Component testing</Sticky>
	<div class="grid grid-cols-[auto,auto,auto] grid-rows-[min-content,min-content,auto] gap-4">
		<Highlight
			lang="bash"
			class="col-span-full text-3xl"
			code={`pnpm install -D @testing-library/svelte @testing-library/jest-dom happy-dom`}
		/>
		<Highlight
			lang="typescript"
			class="text-2xl col-span-2 row-span-2"
			code={`
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode })=>({ // [!code ++]
	plugins: [sveltekit()],
	resolve: { // [!code ++]
		conditions: mode === 'test' ? ['browser'] : [], // [!code ++]
	}, // [!code ++]
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		setupFiles: ['./src/vitest-setup.ts'], // [!code ++]
	}
})); // [!code ++]
`}
		/>
		<Highlight
			lang="typescript"
			class="text-2xl"
			code={`
import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';
`}
		/>
		<Highlight
			lang="typescript"
			class="text-2xl"
			code={`
/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Welcome from '$lib/Welcome.svelte';

describe('WelcomeComponent', () => {
	it('greets to the svelte summit', () => {
		const { getByText } = render(Welcome);
		const greet = getByText('Svelte Summit!');
		expect(greet).toBeInTheDocument();
	});
});

`}
		/>
	</div>
</div>
