<script lang="ts" context="module">
	import Diff from '@lib/components/diff.svelte';
	import type { Props } from '@slides/types';
	export const props: Props = {};
</script>

<Diff
	lang="svelte"
	title={5}
	class="text-4xl"
	code={`
<` +
		`script>
	let value = $state(0);
</` +
		`script>

<label>Amount (minimum 10):
	<input type="number" {value} oninput={(e)=>{
		const new_value = e.target.valueAsNumber;
		value = "pls work! 😭"; // [!code --]
		value = Math.max(new_value, 10);
	}} />
</label>
`}
/>
