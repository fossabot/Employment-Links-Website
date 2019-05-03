/* eslint-disable */
var body = document.querySelector( 'body' );
var header = document.querySelector( 'header' )
  headerHeight = header.getBoundingClientRect().height;
var spacer = document.createElement( 'div' );
spacer.setAttribute( 'id', 'spacer' )
spacer.setAttribute( 'style', 'height: '+headerHeight+'px;' );

document.querySelector('section').prepend( spacer );
