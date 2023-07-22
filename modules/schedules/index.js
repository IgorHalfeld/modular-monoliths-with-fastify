const fp = require('fastify-plugin')
const autoload = require('@fastify/autoload')
const path = require('path')

function CreateSchedulersStore() {
	const schedules = [
		{ id: 'schedule-1', userId: '123' },
		{ id: 'schedule-2', userId: '123' },
		{ id: 'schedule-3', userId: '321' },
	]

	function readAllByUserId(userId) {
		return schedules.filter(schedule => schedule.userId === userId)
	}

	return { readAllByUserId }
}

async function schedules(fastify, opts) {
	fastify.decorate('schedules', CreateSchedulersStore())

	// These routes would be created in their own child instances
	fastify.register(autoload, {
		dir: path.join(__dirname, 'routes'),
		options: {
			prefix: opts.prefix
		}
	})
}

module.exports = fp(schedules)
