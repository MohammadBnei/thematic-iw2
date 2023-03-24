import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createTask: async ({ request, locals }) => {
		try {
			const data = await request.formData();
			const description = data.get('description') as string;
			const dueDate = data.get('dueDate') as string;

			if (!description) {
				return fail(400, { error: 'you must set the description' });
			}

			const res = await locals.taskClient.create({
				description,
				dueDate
			});

			return {
				success: true,
				data: {
					task: res.response.task
				}
			};
		} catch (error) {
			return fail(400, { error });
		}
	}
};
