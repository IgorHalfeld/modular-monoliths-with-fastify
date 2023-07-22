module.exports = async function(fastify, opts) {
	fastify.get('/:userId', {
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
