<script lang="ts" context="module">
	import Highlight from '@lib/components/highlight.svelte';
	import Sticky from '@lib/components/sticky.svelte';
	import type { Props } from '@slides/types';

	export const props: Props = {
		animate: true
	};
</script>

<div class="full-size with-title">
	<Sticky as="h1" data-id="title" class="text-slate-950 p-4">End to end testing</Sticky>
	<div class="grid grid-cols-[auto,auto] grid-rows-[min-content,min-content,min-contentauto] gap-2">
		<div class="flex gap-2">
			<Highlight
				lang="typescript"
				class="text-3xl col-span-1 row-span-3"
				code={`
import { worker } from './mocks/client';

if (import.meta.env.MODE === 'test') {
	await worker.start();
}
`}
			/>
			<Highlight
				lang="typescript"
				class="text-3xl row-span-1"
				code={`
import { server } from './mocks/server';

if (import.meta.env.MODE === 'test') {
	server.listen();
}

`}
			/>
		</div>

		<Highlight
			lang="typescript"
			class="text-3xl col-span-2"
			code={`
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview', // [!code --]
		command: 'pnpm build -m test && pnpm preview -m test', // [!code ++]
		port: 4173,
		stderr: 'pipe', // [!code ++]
		stdout: 'pipe' // [!code ++]
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

`}
		/>
	</div>
</div>
