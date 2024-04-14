<script lang="ts">
	import QrCode from 'qrcode-svg';
	import Highlight from './highlight.svelte';
	import { type BundledLanguage } from 'shiki';

	export let code: string;
	export let lang: BundledLanguage;
	export let title: number;
	let class_name = '';
	export { class_name as class };
</script>

<h1 class="mb-4">Question {title}</h1>
<div class="grid grid-cols-3">
	<div class="col-span-2 grid bg-stone-950 border border-stone-600 grid-rows-[1fr_auto]">
		<div class="{class_name} border-b border-stone-600 max-w-full overflow-auto">
			<Highlight
				{code}
				{lang}
				options={{
					containerStyle: false
				}}
			/>
		</div>
		<a
			class="text-center text-lg justify-self-center font-mono p-4"
			target="_blank"
			href="https://fullstack-testing.ricciuti.app/vote/{title}"
			>https://fullstack-testing.ricciuti.app/vote/{title}</a
		>
	</div>
	<div
		class="bg-stone-950 border basis-1/3 border-stone-600 aspect-[9/16] text-right p-4 grid place-items-center"
	>
		{@html new QrCode({
			content: `https://fullstack-testing.ricciuti.app/vote/${title}`
		}).svg()}
		<a
			class="text-center text-4xl"
			target="_blank"
			href="https://fullstack-testing.ricciuti.app/vote/{title}">Vote</a
		>
	</div>
</div>
