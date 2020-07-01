const Koa = require('koa');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');

const server = new Koa();

server.use(koaBody({
  jsonLimit: '10kb'
}));

const config = {
	port: process.env.PORT,
}

server.use(helmet());

server.use(async (ctx) => {
	if (ctx.method === 'GET' && ctx.path === '/push') {
		const data = ctx.request.body;

		if (data.pusher && data.pusher.name === 'aamulumi') {
			console.log('ok');
		}
	} else {
		ctx.throw(404, 'Not found');
	}
});

server.on('error', (err) => {
	console.error(err);
});

server.listen(config.port);

console.log(`Server ready on port ${config.port}`);
