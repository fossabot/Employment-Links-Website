/* eslint-disable */
var body = document.querySelector( 'body' );
var main = document.querySelector( '#main' );
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
    main.prepend( spacer );
  } else {
    if ( document.querySelector( '#spacer' ) ) document.querySelector( '#spacer' ).remove();
    if ( header.classList.contains( 'shadow' ) ) header.classList.remove( 'shadow' );
    if ( header.classList.contains( 'fixed-top' ) ) header.classList.remove( 'fixed-top' );
  }
  window.setTimeout( function () {
    return;
  }, 500 );
}


const slideoutMenu = document.querySelector( '#menu' ).cloneNode( true );

function manageSlideout() {
  const windowWidth = window.innerWidth;
  if ( innerWidth < 768 ) {
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
      document.querySelector( '#shadow' ).classList.add( 'on' );
      document.querySelector( '#shadow' ).classList.remove( 'off' );
      slideout.open();
    } );

    document.querySelector( '#menu button.close' ).addEventListener( 'click', function () {
      document.querySelector( '#shadow' ).classList.add( 'off' );
      document.querySelector( '#shadow' ).classList.remove( 'on' );
      slideout.close();
    } );
  } else {
    if ( document.querySelector( '#menu' ) ) {
      document.querySelector( '#menu' ).remove();
      document.querySelector( 'header button' ).removeEventListener( 'click', function () {
        document.querySelector( '#shadow' ).classList.add( 'on' );
        document.querySelector( '#shadow' ).classList.remove( 'off' );
        slideout.open();
      } );
      document.querySelector( '#menu button.close' ).removeEventListener( 'click', function () {
        document.querySelector( '#shadow' ).classList.add( 'off' );
        document.querySelector( '#shadow' ).classList.remove( 'on' );
        slideout.close();
      } );
    }
  }
}

headerMorph();
manageSlideout();

window.onloadFns.push( headerMorph, manageSlideout );
window.onresizeFns.push( manageSlideout );

window.onscroll = headerMorph;
