const server = require('./server')

const config = require('config')

/* Public port to expose (to NginX) */
const port = config.get('port')

server.listen((port || 80), () => console.log(`Server listening on port ${port}`))
