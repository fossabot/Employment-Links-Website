const express = require( 'express' )
const fs = require( 'fs' )
const pathModule = require( 'path' )
const rfs = require( 'rotating-file-stream' )
const morgan = require( 'morgan' )
const config = require( 'config' )

const app = express()

/* Public port to expose (to NginX) */
const port = config.get( 'port' )

const accessLogStream = rfs( 'access.log', {
	'interval': '1d', // rotate daily
	'path': pathModule.join( __dirname, 'log' )
} )

app.use(
	morgan( 'combined', {
		'stream': accessLogStream
	} )
)

const staticOptions = {
	'dotfiles': 'ignore',
	'extensions': ['html'],
	'index': true,
	'redirect': false
}

function sendFileResolved ( res, path ) {
	res.sendFile( `./${path}`, { 'root': './public' },
		err => {
			if ( err ) console.log( err )
			else console.log( 'Sent: ' + path )
		}
	)
}

app.get( '/images/*', ( req, res ) => {
	const reqpath = req.path.replace( 'images', 'imgs' )
	sendFileResolved( res, reqpath )
} )

app.get( '/scripts/*', ( req, res ) => {
	const reqpath = req.path
	sendFileResolved( res, reqpath )
} )

app.get( '/styles/*', ( req, res ) => {
	const reqpath = req.path
	sendFileResolved( res, reqpath )
} )

app.get( '/*', ( req, res ) => {
	const reqpath = 'pages/' + req.path
	let filename = req.path.split( '/' ).pop()

  let srvpath = reqpath

	if ( filename ) {
		filename = filename.replace( 'home', 'index' )
		filename = filename.includes( '.html' ) ? filename : filename + '.html'
		srvpath = reqpath
			.split( '/' )
			.slice( 0, reqpath.split( '/' ).length - 1 )
			.concat( filename )
			.join( '/' )
	}

	sendFileResolved( res, srvpath )
} )

app.listen( port, () => console.log( `Server listening on port ${port}` ) )
