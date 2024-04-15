<script lang="ts" context="module">
	import Step from '@lib/components/step.svelte';
	import scared from './stretch.gif';
	import type { Props } from '@slides/types';
	import Sticky from '@lib/components/sticky.svelte';
	export const props: Props = {
		image: scared
	};
</script>

<Step class="grid gap-12">
	<Step grow>
		<Sticky as="p" class="h-full grid items-center text-slate-900 p-10"
			>100% coverage is a lie</Sticky
		>
	</Step>
	<Step grow>
		<Sticky as="p" class="h-full grid items-center text-slate-900 p-10"
			>I will use opinionated tools but there's probably a way to do what i'm gonna show with your
			tool too</Sticky
		>
	</Step>
</Step>
