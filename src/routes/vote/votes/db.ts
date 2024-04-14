export const controllers = new Map<string, ReadableStreamDefaultController<string>>();

export const votes = new Map([
	['1' as const, { yes: new Set<string>(), no: new Set<string>() }],
	['2' as const, { yes: new Set<string>(), no: new Set<string>() }],
	['3' as const, { yes: new Set<string>(), no: new Set<string>() }],
	['4' as const, { yes: new Set<string>(), no: new Set<string>() }]
]);

export type Questions = typeof votes extends Map<infer Keys, unknown> ? Keys : never;

export function add_vote(question: Questions, id: string, vote: 'yes' | 'no') {
	const question_set = votes.get(question)!;
	if (!question_set.yes.has(id) && !question_set.no.has(id)) {
		question_set[vote].add(id);
		const values = [question_set.yes.size, question_set.no.size];
		controllers.forEach((controller, key) => {
			if (key !== id) {
				controller?.enqueue(`event: update-votes\ndata: ${JSON.stringify(values)}\n\n`);
			}
		});
	}
}
