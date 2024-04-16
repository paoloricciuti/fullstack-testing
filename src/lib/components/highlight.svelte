<script lang="ts">
	import { type BundledLanguage, type BundledTheme, type SpecialLanguage } from 'shiki';
	import { transformerNotationDiff } from '@shikijs/transformers';
	import highlighter from './highlighter';

	export let code: string;
	export let lang: BundledLanguage | SpecialLanguage;
	export let theme: BundledTheme = 'github-dark-default';
	let class_name = '';
	export { class_name as class };

	function indent(string: string) {
		const tabs = string
			.split('\n')
			.filter(Boolean)[0]
			.split('')
			.filter((char) => char === '\t')
			.join('');
		return string
			.split(/(\n)/)
			.map((line) => line.replace(tabs, ''))
			.join('')
			.trim();
	}

	$: to_render = highlighter.codeToHtml(indent(code), {
		lang,
		theme,
		transformers: [
			{
				pre(node) {
					node.tagName = 'div';
					node.properties.class = 'pre-like';
					node.properties.style = '';
					return node;
				}
			},
			transformerNotationDiff()
		]
	});
</script>

<div class={class_name}>
	{@html to_render}
</div>

<style lang="postcss">
	div :global(code) {
		counter-reset: step;
		counter-increment: step 0;
	}
	div :global(code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
	}
	div :global(.diff) {
		--color: theme(colors.red.500);
		background-color: color-mix(in srgb, var(--color) 30%, transparent);
		display: inline-block;
		width: 100%;
	}
	div :global(.diff.add) {
		--color: theme(colors.green.500);
		background-color: color-mix(in srgb, var(--color) 30%, transparent);
		display: inline-block;
		width: 100%;
	}
	div :global(.diff.add::before) {
		content: '+';
	}
	div :global(.diff.remove::before) {
		content: '-';
	}
</style>
