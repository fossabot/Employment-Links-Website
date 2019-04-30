const express = require( 'express' ),
  path = require( 'path' ),
  pug = require( 'pug' ),
  electricity = require( 'electricity' ),
  config = require( 'config' );

const compiler = pug.compileFile,
  app = express();

port = config.get( 'port' );

app.use( express.static( path.join( __dirname, '/public' ) ) );
app.set( 'views', './views' );
app.set( 'view engine', 'pug' );


app.get( '/', ( req, res ) => res.render( 'index', {
  'cache'    : false,
  'filename' : 'index',
  'page'     : 'index'
} ) );

app.get( '/contact', ( req, res ) => res.render( 'contact', {
  'cache'    : false,
  'filename' : 'contact',
  'page'     : 'contact'
} ) );

app.listen( port, () => console.log( `Server listening on port ${port}` ) );
