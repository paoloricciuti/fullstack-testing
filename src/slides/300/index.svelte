<script lang="ts" context="module">
	import Step from '@lib/components/step.svelte';
	import scared from './scared.gif';
	import type { Props } from '@slides/types';
	import Sticky from '@lib/components/sticky.svelte';
	export const props: Props = {
		image: scared
	};
</script>

<div class="flex justify-evenly h-96">
	<Step>
		<Sticky as="p" class="uppercase h-full grid items-center text-slate-900 p-10">Fullstack</Sticky>
	</Step>
	<Step class="testing">
		<Sticky as="p" class="uppercase h-full grid items-center text-slate-900 p-10">Testing</Sticky>
	</Step>
</div>

<style>
	:global(.fragment.visible.testing) {
		animation: scale-up 200ms ease-in forwards;
		animation-delay: 2s;
	}
	@keyframes scale-up {
		to {
			transform: scale(2) rotate(-10deg);
		}
	}
</style>
