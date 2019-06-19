const express = require('express')
const serveStatic = require('serve-static')
const pathModule = require('path')
const rfs = require('rotating-file-stream')
const morgan = require('morgan')
const config = require('config')

const app = express()

/* Public port to expose (to NginX) */
const port = config.get('port')

const accessLogStream = rfs('access.log', {
	interval: '1d', // rotate daily
	path: pathModule.join(__dirname, 'log')
})

app.use(
	morgan('combined', {
		stream: accessLogStream
	})
)

/** @type {import('serve-static').ServeStaticOptions} */
const pagesOptions = {
	extensions: ['html', 'js'],
	maxAge: 0,
	dotfiles: 'ignore'
}

/** @type {import('serve-static').ServeStaticOptions} */
const generalOptions = {
	maxAge: 0,
	dotfiles: 'ignore'
}

/* For requests to /styles/:file and /scripts/:file */
app.use('/', serveStatic(pathModule.join(__dirname, 'public'), generalOptions))

/* For the pages themselves */
app.use('/', serveStatic(pathModule.join(__dirname, 'public', 'pages'), pagesOptions))

/* For <img> src values that still have the old path */
app.use('/images', serveStatic(pathModule.join(__dirname, 'public', 'imgs'), generalOptions))

app.use('/', (req, res, next) => {
	if (req.path.includes('images')) req.path = req.path.replace('images', 'imgs')
	next()
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
