module.exports = async function(fastify, opts) {
	fastify.get('/', async (request, reply) => {
		return [
			{ userId: '123' },
			{ userId: '321' },
		]
	})

	fastify.get('/:userId/schedules', {
		schema: {
			params: {
				type: 'object',
				properties: {
					userId: { type: 'string' }
				}
			}
		}
	}, async (request, reply) => {
		const userId = request.params.userId
		return { schedules: await fastify.schedules.readAllByUserId(userId) }
	})
}
