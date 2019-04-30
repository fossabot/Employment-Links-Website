/* eslint-disable */
var body = document.querySelector( 'body' );
var header = document.querySelector( 'header' );
var spacer = document.createElement( 'div' );
spacer.setAttribute( 'id', 'spacer' )
spacer.setAttribute( 'style', 'height: 70px;' );

function headerMorph() {
  var viewTop = window.scrollY,
    headerHeight = header.offsetHeight;
  if ( viewTop > headerHeight * 10 ) {
    if ( !header.classList.contains( 'shadow' ) ) header.classList.add( 'shadow' );
    if ( !header.classList.contains( 'fixed-top' ) ) header.classList.add( 'fixed-top' );
    body.prepend( spacer );
  } else {
    if ( document.querySelector( '#spacer' ) ) document.querySelector( '#spacer' ).remove();
    if ( header.classList.contains( 'shadow' ) ) header.classList.remove( 'shadow' );
    if ( header.classList.contains( 'fixed-top' ) ) header.classList.remove( 'fixed-top' );
  }
  window.setTimeout( function () {
    return;
  }, 500 );
}
window.onload = headerMorph();
window.onscroll = headerMorph;
