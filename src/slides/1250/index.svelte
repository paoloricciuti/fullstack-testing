<script lang="ts" context="module">
	import Step from '@lib/components/step.svelte';
	import type { Props } from '@slides/types';
	import art from './art.jpg';
	import Sticky from '@lib/components/sticky.svelte';
	export const props: Props = {
		image: art
	};
</script>

<Step order="2">
	<Sticky as="div" class="font-mono flex text-slate-950 p-8 text-9xl justify-evenly gap-8">
		<Step order="2">S<Step order="5" type="span" class="text-4xl">ingle</Step></Step>
		<Step order="3">P<Step order="6" type="span" class="text-4xl">age</Step></Step>
		<Step order="4">A<Step order="7" type="span" class="text-4xl">pplication</Step></Step>
	</Sticky>
</Step>
