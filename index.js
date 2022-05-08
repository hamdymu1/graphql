import { app } from './src/app.js';

app
	.listen({
		port: 8000,
	})
	.then(({ url }) => console.log(`Server Running at ${url}`));
