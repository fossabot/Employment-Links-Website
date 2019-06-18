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
	// 'etag': false,
	'extensions': ['html'],
	'index': false,
	// 'maxAge': '1d',
	'redirect': false
	// 'setHeaders': function ( res, path, stat ) {
	// 	res.set( 'x-timestamp', Date.now() )
	// }
}

/* Returns a shallow index of the contents of './views' */
// const views = fs.readdirSync( './public/pages' )

app.get( '/images/*', ( req, res, next ) => {
	const reqpath = req.path.replace( 'images', 'imgs' )
	res.sendFile(
		`/${reqpath}`,
		{
			'root': './public'
		},
		err => {
			if ( err ) console.log( err )
			else console.log( 'Sent: ' + reqpath )
		}
	)
} )

app.get( '/scripts/*', ( req, res, next ) => {
	const reqpath = req.path
	res.sendFile(
		`./${reqpath}`,
		{
			'root': './public'
		},
		err => {
			if ( err ) console.log( err )
			else console.log( 'Sent: ' + reqpath )
		}
	)
} )

app.get( '/styles/*', ( req, res, next ) => {
	const reqpath = req.path
	res.sendFile(
		`./${reqpath}`,
		{
			'root': './public'
		},
		err => {
			if ( err ) console.log( err )
			else console.log( 'Sent: ' + reqpath )
		}
	)
} )

app.get( '/*', ( req, res, next ) => {
	const reqpath = req.path
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

	res.sendFile(
		`./pages/${srvpath}`,
		{
			'root': './public'
		},
		err => {
			if ( err ) console.log( err )
			else console.log( 'Sent: ' + reqpath )
		}
	)
} )

app.listen( port, () => console.log( `Server listening on port ${port}` ) )
