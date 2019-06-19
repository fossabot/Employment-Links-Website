const path = require('path')

const testDir = path.resolve(__dirname, 'test')
const pattern = path.join(testDir, '**', '*.js')

const files = [pattern]

const sources = [path.join(path.resolve(__dirname, 'server'), '**', '*.js')]

const environmentVariables = {
	'NODE_ENV': 'development'
}

const verbose = true

// ANCHOR module.exports
export default {
	files,
	sources,
	environmentVariables,
	verbose
}
