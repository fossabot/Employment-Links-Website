/* Express Modules & Built-Ins */
const pathModule = require('path')
const express = require('express')
const serveStatic = require('serve-static')

/* Logging Module(s) */
const rfs = require('rotating-file-stream')
const morgan = require('morgan')

const app = express()

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
	extensions: [
		'html', 'js'
	],
	maxAge: 0,
	dotfiles: 'ignore'
}

/** @type {import('serve-static').ServeStaticOptions} */
const generalOptions = {
	maxAge: 0,
	dotfiles: 'ignore'
}

const pathModifier = (req, res, next) => {
	if (req.url.includes('home')) req.url = req.url.replace('home', 'index')
	next()
}

/* For requests to routes along the /styles/ and /scripts/ routes */
app.use('/', serveStatic(pathModule.join(__dirname, '..', 'public'), generalOptions))

/* For <img> src values that still have the old path */
app.use('/images', serveStatic(pathModule.join(__dirname, '..', 'public', 'imgs'), generalOptions))

/* For the pages */
app.use('/', pathModifier, serveStatic(pathModule.join(__dirname, '..', 'public', 'pages'), pagesOptions))

// ANCHOR module.exports
module.exports = app
