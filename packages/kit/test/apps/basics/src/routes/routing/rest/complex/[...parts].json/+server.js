import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	return json({
		parts: params.parts
	});
}
