const express = require( 'express' ),
  fs = require( 'fs' ),
  pathModule = require( 'path' ),
  rfs = require( 'rotating-file-stram' ),
  morgan = require( 'morgan' ),
  config = require( 'config' );

const app = express(),
  /* Public port to expose (to NginX) */
  port = config.get( 'port' ),

  // create a rotating write stream
  accessLogStream = rfs( 'access.log', {
    'interval' : '1d', // rotate daily
    'path'     : path.join( __dirname, 'log' )
  } );

app.use( morgan( 'combined', {
  'stream': accessLogStream
} ) );

/* Establish public directory to serve static assets */
app.use( express.static( pathModule.join( __dirname, '/public' ) ) );

/* Set associations within the context of Express */
app.set( 'views', './views' );
app.set( 'view engine', 'pug' );

/* Returns a shallow index of the contents of './views' */
const views = fs.readdirSync( './views' ).filter(
  ( p ) => pathModule.extname( p ) === '.pug'
).map( p => p.replace( '.pug', '' ) );

/**
 * Evaluates an incoming request route against eligible files under './views'
 * @param {Express.Request} req
 * @returns {string} Path to the requested view, if it exists. Falls back to a 404 template.
 */
function handler( req ) {
  let path = req.path;
  /* Strip the preceding slash */
  path = path.replace( '/', '' );
  /* Indicates request was for 'domain.com/' or 'domain.com/home' */
  if ( path === '' || path === 'home' ) path = 'index';

  return !views.includes( path ) ?
    'coming-soon' :
    path;
}

app.use( ( req, res ) => {
  const path = handler( req );
  res.render( path, {
    'cache'    : false,
    'filename' : path,
    'page'     : path
  } );
} );



app.listen( port, () => console.log( `Server listening on port ${port}` ) );