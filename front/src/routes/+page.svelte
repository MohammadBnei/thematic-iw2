<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import type { Task } from '$lib/stub/task/task';
	import { onMount } from 'svelte';

	let tasks: Task[] = [];

	if (browser)
		onMount(async () => {
			const res = await fetch('/task');
			const json = await res.json();

			tasks = json.tasks;
		});
</script>

<div class="flex flex-col justify-around items-center bg-base-200 w-screen h-screen">
	<div>
		<h1 class="text-4xl">Task Manager</h1>
	</div>
	<div class="flex flex-col gap-3">
		{#each tasks as task}
			<div>
				<h1 class="text-lg">{task.dueDate}</h1>
				<p>{task.description}</p>
				<input class="checkbox" type="checkbox" checked={task.done} />
			</div>
		{/each}
	</div>
	<form
		action="/task?/createTask"
		method="post"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'success') {
					tasks.push(result.data?.data?.task);
					tasks = tasks;
				}
			};
		}}
	>
		<input type="text" name="description" />
		<input type="datetime" name="dueDate" />
		<button type="submit">Create Task</button>
	</form>
</div>
