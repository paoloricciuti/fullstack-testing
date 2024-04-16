<script lang="ts" context="module">
	import Step from '@lib/components/step.svelte';
	import type { Props } from '@slides/types';
	import caveman from './caveman.jpg';
	import Sticky from '@lib/components/sticky.svelte';
	import fire from './fire.jpg';
	import art from './art.jpg';
	export const props: Props = {
		image: caveman
	};
</script>

<div class="grid place-items-center grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full">
	<Step type="img" src={fire} order="0" class="w-1/2 transform rotate-3" />
	<Step type="img" src={art} order="1" class="w-1/2 transform -rotate-3" />

	<Step order="2">
		<Sticky as="div" class="font-mono flex text-slate-950 p-8 text-9xl justify-evenly gap-8">
			<Step order="2">S<Step order="5" type="span" class="text-4xl">ingle</Step></Step>
			<Step order="3">P<Step order="6" type="span" class="text-4xl">age</Step></Step>
			<Step order="4">A<Step order="7" type="span" class="text-4xl">pplication</Step></Step>
		</Sticky>
	</Step>
</div>
