const autoload = require('@fastify/autoload')
const path = require('path')

module.exports = async function users(app, opts) {
  app.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    options: {
      prefix: opts.prefix
    }
  })
}
