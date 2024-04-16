<script lang="ts" context="module">
	import Highlight from '@lib/components/highlight.svelte';
</script>

<Highlight
	class="grid place-items-center"
	code={`
if(TESTING){
	window.fetch = function(url, init){
		// return your mocked data
	}
}
`}
	lang="typescript"
></Highlight>
