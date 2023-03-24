import { FindAllRequest, FindAllResponse } from '$lib/stub/task/task';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const res = await locals.taskClient.findAll(FindAllRequest.create());
	const response: FindAllResponse = res.response;
  
	return new Response(
		JSON.stringify({
			tasks: response.tasks
		})
	);
};
