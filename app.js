const express = require( 'express' ),
  fs = require( 'fs' ),
  path = require( 'path' ),
  pug = require( 'pug' ),
  config = require( 'config' );

const compiler = pug.compileFile,
  app = express();

port = config.get( 'port' );

app.use( express.static( path.join( __dirname, '/public' ) ) );
app.set( 'views', './views' );
app.set( 'view engine', 'pug' );

/**
 * @param {Express.Request} req
 * @param {*} res
 * @param {function} next
 */
function handler( req ) {
  let reqpath = req.path;

  if ( reqpath === '/' ) reqpath = 'index';
  reqpath = reqpath.replace( '/', '' );
  const views = fs.readdirSync( './views' );
  if ( !views.includes( reqpath + '.pug' ) ) reqpath = 'coming-soon';

  return reqpath;
}

app.use( ( req, res ) => {
  const page = handler( req );
  res.render( page, {
    'cache'    : false,
    'filename' : page,
    'page'     : page
  } );
} );


// app.get( '/', ( req, res ) => res.render( 'index', {
//   'cache'    : false,
//   'filename' : 'index',
//   'page'     : 'index'
// } ) );

// app.get( '/contact', ( req, res ) => res.render( 'contact', {
//   'cache'    : false,
//   'filename' : 'contact',
//   'page'     : 'contact'
// } ) );



app.listen( port, () => console.log( `Server listening on port ${port}` ) );