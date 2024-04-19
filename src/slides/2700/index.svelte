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
		<Highlight lang="bash" class="col-span-1 text-3xl" code={`pnpm install msw@latest -D`} />
		<Highlight lang="bash" class="text-3xl row-span-1 col-span-1" code={`npx msw --init`} />
		<Highlight
			lang="typescript"
			class="text-3xl col-span-1 row-span-3"
			code={`
import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('https://yourapi.com/:id/*',
	({ cookies, params, request }) => {
		const url = new URL(request.url);
		const version = url.searchParams.get('v');
		const auth = cookies.auth;
		return HttpResponse.json({
			mocked: true,
			id: params.id,
			version,
			auth
		});
	})
];
`}
		/>
		<Highlight
			lang="json"
			class="text-3xl row-span-1"
			code={`
{
  "name": "my-app",
  "msw": {
    "workerDirectory": "./static"
  }
}
`}
		/>
		<div class="text-3xl row-span-2 flex flex-col gap-4">
			<Highlight
				lang="typescript"
				code={`
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
`}
			/>
			<Highlight
				lang="typescript"
				code={`
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
`}
			/>
		</div>
	</div>
</div>
