<script lang="ts">
	import { enhance } from '$app/forms';
	import roughjs from 'roughjs';
	import { onMount } from 'svelte';

	export let data;

	$: live_data = data.votes;

	onMount(() => {
		const event_source = new EventSource('/vote/votes', { withCredentials: true });
		function listener(e: MessageEvent) {
			live_data = JSON.parse(e.data);
		}
		event_source.addEventListener('update-votes', listener);
		return () => {
			event_source.removeEventListener('update-votes', listener);
		};
	});

	function rough(node: SVGSVGElement, val: typeof live_data) {
		const svg = roughjs.svg(node);
		const rects: Array<SVGElement> = [];
		const width = 80 / val.length;
		const gap = 5;
		const draw_options = {
			fill: '#ff3e00',
			roughness: 0.5,
			preserveVertices: true,
			hachureGap: 1.5
		};
		const back = svg.rectangle(0, 0, 100, 100, {
			fill: 'white',
			fillStyle: 'solid',
			roughness: 0.5,
			preserveVertices: true
		});
		node.appendChild(back);
		for (let i = 0; i < val.length; i++) {
			const value = val[i];
			let rect = svg.rectangle(
				10 + i * width + gap / 2,
				90 - value,
				width - gap,
				value,
				draw_options
			);
			node.appendChild(rect);
			rects.push(rect);
		}
		let line = svg.line(0, 95, 100, 95);
		node.appendChild(line);
		return {
			update(new_val: typeof live_data) {
				for (let i = 0; i < new_val.length; i++) {
					const value = new_val[i];
					let rect = svg.rectangle(
						10 + i * width + gap / 2,
						90 - value,
						width - gap,
						value,
						draw_options
					);
					node.replaceChild(rect, rects[i]);
					rects.splice(i, 1, rect);
				}
			}
		};
	}
	const yes_and_no = ['yes', 'no'] as const;
</script>

<div class="p-4">
	<h1 class="text-center">Question {data.question}</h1>
	<svg class="transform -rotate-1" use:rough={live_data} viewBox="0 0 100 100"></svg>
	<form class="voter" method="post" use:enhance>
		{#each yes_and_no as vote}
			<button class:text-[#ff3e00]={data.user_vote[vote]} name="vote" value={vote}>{vote}</button>
		{/each}
	</form>
	{#if data.question !== '6'}
		<a class="text-center" href="/vote/{+data.question + 1}">Next</a>
	{/if}
</div>

<style>
	.voter {
		display: flex;
		justify-content: space-evenly;
	}
	svg,
	form,
	a {
		max-width: min(40rem, 90%);
		margin: auto;
		display: block;
	}
</style>
