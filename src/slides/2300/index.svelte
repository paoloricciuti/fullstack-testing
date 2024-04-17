<script lang="ts">
	import Highlight from '@lib/components/highlight.svelte';
	import Sticky from '@lib/components/sticky.svelte';
</script>

<div class="grid gap-8">
	<Sticky as="h1" class="text-slate-950 p-4">Unit</Sticky>
	<Highlight
		lang="typescript"
		code={`
import { my_simple_function } from './my_simple_function';
import { it, expect } from 'vitest';
`}
	/>
</div>
