<script lang="ts">
	import Code from './code.svelte';
	import QrCode from 'qrcode-svg';

	export let code: string;
	export let title: number;
	export let code_class = '';
</script>

<h1>Question {title}</h1>
<div class="flex items-center">
	<div class="basis-2/3 grid gap-4">
		<div class={code_class}>
			<Code lang="diff">{code}</Code>
		</div>
		<a
			class="text-center text-lg justify-self-center font-mono"
			target="_blank"
			href="https://fullstack-testing.ricciuti.app/vote/{title}"
			>https://fullstack-testing.ricciuti.app/vote/{title}</a
		>
	</div>
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
