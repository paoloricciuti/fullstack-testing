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
import { my_fn } from './my_fn';
import { it, describe, expect } from 'vitest';

describe('my function', ()=>{
	it('works as expected', ()=>{
		const result = my_fn();
		expect(result).toBeDefined();
	});
});
`}
	/>
</div>
