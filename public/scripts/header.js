/* eslint-disable */
var body = document.querySelector( 'body' );
var main = document.querySelector( '#main' );
var header = document.querySelector( 'header' );
var spacer = document.createElement( 'div' );
spacer.setAttribute( 'id', 'spacer' )
spacer.setAttribute( 'style', 'height: 70px;' );


function headerMorph() {
  console.log( 'headerMorph' )
  var viewTop = window.scrollY;
  console.log( viewTop )
  if ( viewTop > 70 * 5 ) {
    console.log( 'should go' )
    if ( !header.classList.contains( 'shadow' ) ) header.classList.add( 'shadow' );
    if ( !header.classList.contains( 'sticky-top' ) ) header.classList.add( 'sticky-top' );
    main.prepend( spacer );
  } else {
    console.log( 'should undo' )
    if ( document.querySelector( '#spacer' ) ) document.querySelector( '#spacer' ).remove();
    if ( header.classList.contains( 'shadow' ) ) header.classList.remove( 'shadow' );
    if ( header.classList.contains( 'sticky-top' ) ) header.classList.remove( 'sticky-top' );
  }
}


var slideoutMenu = document.querySelector( '#menu' ).cloneNode( true );
var slideout = new Slideout( {
  'panel': document.getElementById( 'main' ),
  'menu': document.getElementById( 'menu' ),
  'padding': 320,
  'tolerance': 70,
  'touch': false
} );

function manageSlideout() {
  document.querySelector( 'header button' ).addEventListener( 'click', function () {
    slideout.toggle();
  } );

  document.querySelector( '#menu button.close' ).addEventListener( 'click', function () {
    slideout.toggle();
  } );

}

onloadFns.push( headerMorph, manageSlideout );
onresizeFns.push( manageSlideout);

window.onscroll = headerMorph;
