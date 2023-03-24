import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createTask: async ({ request }) => {
		const data = await request.formData();
		const description = data.get('description') as string;
		const dueDate = data.get('dueDate') as string;

		if (!description) {
			return fail(400, { error: 'you must set the description' });
		}

		// create the task in the server with grpc

		return {
			success: true,
			data: {}
		};
	}
};
