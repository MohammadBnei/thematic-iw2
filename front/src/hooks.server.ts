import type { Handle } from '@sveltejs/kit';
import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import { ChannelCredentials } from '@grpc/grpc-js';
import { TaskServiceClient } from '$lib/stub/task/task.client';

const taskClient = new TaskServiceClient(
	new GrpcTransport({
		host: 'localhost:3000',
		channelCredentials: ChannelCredentials.createInsecure()
	})
);

export const handle: Handle = async ({ resolve, event }) => {
	event.locals.taskClient = taskClient;

	const response = await resolve(event);

	return response;
};
