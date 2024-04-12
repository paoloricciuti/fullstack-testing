<script lang="ts" context="module">
	import Step from '@lib/components/step.svelte';
	import src from './image.gif';
	import type { Props } from '@slides/types';
	import Sticky from '@lib/components/sticky.svelte';

	export const props: Props = {
		image: src
	};
</script>

<Step class="custom rotate">
	<Sticky as="h1" class="text-8xl uppercase text-slate-900 p-10">Fullstack testing!</Sticky>
</Step>

<style>
	:global(.fragment.custom.rotate) {
		transform: rotate(0) scale(0);
		transition-duration: 2s;
	}
	:global(.fragment.visible.custom.rotate) {
		transform: rotate(2turn) scale(1);
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
	}
</style>
