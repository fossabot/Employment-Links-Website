const express = require( 'express' ),
  fs = require( 'fs' ),
  pathModule = require( 'path' ),
  pug = require( 'pug' ),
  config = require( 'config' );

const app = express();

port = config.get( 'port' );

app.use( express.static( pathModule.join( __dirname, '/public' ) ) );
app.set( 'views', './views' );
app.set( 'view engine', 'pug' );

const views = fs.readdirSync( './views' );
console.log( views );

/**
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {function} next
 */
function handler( req ) {

  /* The destination of req */
  let path = req.path;

  /* Strip the preceding slash */
  path = path.replace( '/', '' );

  console.log( path );

  /* Indicates request for 'domain.com/' or 'domain.com/home' */
  if ( path === '' || path === 'home' ) path = 'index';

  console.log( path );
  if ( !views.includes( path + '.pug' ) ) path = 'coming-soon';

  return path;
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