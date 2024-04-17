<script lang="ts">
	import { Presentation, Slide } from '@components';
	import type { Props } from '@slides/types';
	import type { ComponentType, SvelteComponent } from 'svelte';
	const slides = Object.entries(
		import.meta.glob<{
			default: ComponentType<SvelteComponent>;
			component?: ComponentType<SvelteComponent>;
			props?: Props;
		}>('../slides/**/index.svelte', {
			eager: true
		})
	)
		.map(([filename, exports]) => {
			const matches = filename.match(/slides\/(?<number>\d+)\/index.svelte/);
			return [+matches!.groups!.number, exports] as const;
		})
		.sort(([num_a], [num_b]) => num_a - num_b);
</script>

<svelte:head>
	<title>Fullstack testing</title>
</svelte:head>

<Presentation>
	{#each slides as [_, slide]}
		<svelte:component
			this={slide.component ?? Slide}
			on:in={slide.props?.on_in}
			on:out={slide.props?.on_out}
			{...slide.props ?? {}}
		>
			<svelte:component this={slide.default} />
		</svelte:component>
	{/each}
</Presentation>
