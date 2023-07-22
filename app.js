const path = require('path')
const autoload = require('@fastify/autoload')

module.exports = async function(fastify, opts) {
  fastify.register(autoload, {
    dir: path.join(__dirname, 'modules'),
    encapsulate: false,
    maxDepth: 1
  })
}
