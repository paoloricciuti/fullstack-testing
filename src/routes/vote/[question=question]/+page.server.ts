import { COOKIE_NAME } from '@lib';
import { votes, add_vote } from '../votes/db';
import { error } from '@sveltejs/kit';

export function load({ cookies, params: { question } }) {
	const id = cookies.get(COOKIE_NAME);
	if (!id) {
		cookies.set(COOKIE_NAME, crypto.randomUUID(), {
			path: '/vote'
		});
	}
	const question_set = votes.get(question)!;
	const values = [question_set.yes.size, question_set.no.size];
	const user_vote = { yes: !id || question_set.yes.has(id), no: !id || question_set.no.has(id) };
	return {
		votes: values,
		question,
		user_vote
	};
}

function assert_yes_or_no(vote: string): asserts vote is 'yes' | 'no' {
	if (!['yes', 'no'].includes(vote)) {
		error(400);
	}
}

export const actions = {
	async default({ request, cookies, params: { question } }) {
		const data = await request.formData();
		const id = cookies.get(COOKIE_NAME);
		const vote = String(data.get('vote'));
		if (vote && id) {
			assert_yes_or_no(vote);
			add_vote(question, id, vote);
		}
	}
};
