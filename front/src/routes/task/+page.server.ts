import type { Task } from '$lib/stub/task/task';
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

			const task: Task = res.response.task;
			
			return {
				success: true,
				data: {
					task: {
						id: task.id,
						dueDate: task?.dueDate,
						done: task?.done,
						description: task?.description
					}
				}
			};
		} catch (error) {
			return fail(400, { error });
		}
	}
};
