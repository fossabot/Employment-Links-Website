/* eslint-disable */
var body = document.querySelector( 'body' );
var main = document.querySelector( '#main' );
var header = document.querySelector( 'header' );
var spacer = document.createElement( 'div' );
spacer.setAttribute( 'id', 'spacer' )
spacer.setAttribute( 'style', 'height: 70px;' );


function headerMorph() {
  var viewTop = window.scrollY;
  if ( viewTop > 70 * 5 ) {
    if ( !header.classList.contains( 'shadow' ) ) header.classList.add( 'shadow' );
    if ( !header.classList.contains( 'fixed-top' ) ) header.classList.add( 'fixed-top' );
    main.prepend( spacer );
  } else {
    if ( document.querySelector( '#spacer' ) ) document.querySelector( '#spacer' ).remove();
    if ( header.classList.contains( 'shadow' ) ) header.classList.remove( 'shadow' );
    if ( header.classList.contains( 'fixed-top' ) ) header.classList.remove( 'fixed-top' );
  }
}


const slideoutMenu = document.querySelector( '#menu' ).cloneNode( true );

function manageSlideout() {
  const windowWidth = window.innerWidth;
  if ( windowWidth < 768 ) {
    document.querySelector( '#menu' ).classList.remove( 'hidden' );
    if ( !document.querySelector( '#menu' ) ) {
      document.querySelector( 'body' ).prepend( slideoutMenu );
    }
    var slideout = new Slideout( {
      'panel': document.getElementById( 'main' ),
      'menu': document.getElementById( 'menu' ),
      'padding': 320,
      'tolerance': 70,
      'touch': false
    } );

    document.querySelector( 'header button' ).addEventListener( 'click', function () {
      slideout.open();
    } );

    document.querySelector( '#menu button.close' ).addEventListener( 'click', function () {
      slideout.close();
    } );
  } else {
    if ( document.querySelector( '#menu' ) ) {
      document.querySelector( 'header button' ).removeEventListener( 'click', function () {
        slideout.open();
      } );
      document.querySelector( '#menu button.close' ).removeEventListener( 'click', function () {
        slideout.close();
      } );
      document.querySelector( '#menu' ).remove();
    }
  }
}

onloadFns.push( headerMorph, manageSlideout );
onresizeFns.push( manageSlideout );

window.onscroll = headerMorph;
