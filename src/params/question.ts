import { votes, type Questions } from '../routes/vote/votes/db';

export function match(param): param is Questions {
	return votes.has(param as never);
}
