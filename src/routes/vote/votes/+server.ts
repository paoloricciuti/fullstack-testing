import { error } from '@sveltejs/kit';
import { controllers } from './db';
import { COOKIE_NAME } from '@lib';

export function GET({ cookies }) {
	const id = cookies.get(COOKIE_NAME);
	if (!id) {
		error(500);
	}
	return new Response(
		new ReadableStream({
			start(_controller) {
				controllers.set(id, _controller);
			},
			cancel() {
				controllers.delete(id);
			}
		}),
		{
			headers: {
				'Cache-Control': 'no-cache',
				'Content-Type': 'text/event-stream'
			}
		}
	);
}
