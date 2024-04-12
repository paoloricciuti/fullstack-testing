<script lang="ts">
	import Code from './code.svelte';
	import QrCode from 'qrcode-svg';

	export let code: string;
	export let title: number;
</script>

<h1>Question {title}</h1>
<div class="flex items-center">
	<Code class="m-0 basis-1/3" lang="diff">{code}</Code>
	<fieldset
		class="bg-stone-950 border basis-1/3 border-stone-600 aspect-[9/16] text-right p-4 grid justify-center"
	>
		<legend class="text-sm px-4 py-1 border border-stone-600 bg-stone-950 rounded-full"
			>Your answers</legend
		>
		{@html new QrCode({
			content: `https://fullstack-testing.ricciuti.app/vote/${title}`
		}).svg()}
		<a
			class="text-center text-4xl"
			target="_blank"
			href="https://fullstack-testing.ricciuti.app/vote/{title}">Vote</a
		>
	</fieldset>
</div>
