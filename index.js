import { server } from './src/app.js';

server
	.listen({
		port: 8000,
	})
	.then(({ url }) => console.log(`Server Running at ${url}`));
