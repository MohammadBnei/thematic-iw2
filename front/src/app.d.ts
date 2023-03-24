// See https://kit.svelte.dev/docs/types#app

import type { TaskServiceClient } from '$lib/stub/task/task.client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			taskClient: TaskServiceClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
