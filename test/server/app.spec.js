const path = require('path')
const chalk = require('chalk')

const root = path.resolve(__dirname, '..', '..')
const serverDir = path.join(root, 'server')

const test = require('ava')
const request = require('supertest')

let server
test.beforeEach('Server Cold-Start', t => {
	/* Bust the cache -- *ka-powwww* */
	delete require.cache[require(serverDir)]

	console.log(chalk.grey.bold('Booting a new server instance ...'))
	/* Aaand boot 'em up again. */
	server = require(serverDir)

	console.log(chalk.grey.bold('Done!'))
})

test.afterEach.always('Roll up the Server Instance', async (t) => {
	console.log(chalk.grey.bold('Closing the server ...'))
	await server.close()
	console.log(chalk.grey.bold('Closed.'))
})

test('Responds to request at root', t => {
	request(server)
		.get('/')
		.expect(200, t.pass())
})
