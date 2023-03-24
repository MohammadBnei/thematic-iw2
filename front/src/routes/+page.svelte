<script lang="ts">
	import { browser } from '$app/environment';
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

{#each tasks as task}
	<h1>{task.dueDate}</h1>
	<p>{task.description}</p>
	<input type="checkbox" checked={task.done} />
{/each}
