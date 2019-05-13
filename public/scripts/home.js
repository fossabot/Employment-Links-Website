/* eslint-disable */


/**
 *
 */
function mobileAdjustment() {
  if ( window.screen.width <= 768 ) {
    document.querySelector( 'section' ).classList.remove( 'bg-image-fixed' );
    document.querySelector( 'section' ).classList.add( 'bg-image' );

    document.querySelectorAll( '.display-switch' ).forEach( function ( el ) {
      el.classList.remove( 'display-1', 'display-2', 'display-3', 'display-4' )
    } );
  } else {
    document.querySelector( 'section' ).classList.add( 'bg-image-fixed' );
    document.querySelector( 'section' ).classList.remove( 'bg-image' );

    document.querySelectorAll( '.display-switch' ).forEach( function ( el ) {
      var classList = el.classList;
      if ( classList.contains( 'd1' ) ) classList.add( 'display-1' );
      if ( classList.contains( 'd2' ) ) classList.add( 'display-2' );
      if ( classList.contains( 'd3' ) ) classList.add( 'display-3' );
      if ( classList.contains( 'd4' ) ) classList.add( 'display-4' );
    } );
  }
}

var global = {};
var bridge = document.querySelector( '#bridge' ),
  section1 = document.querySelectorAll( 'section' )[ 1 ],
  section0 = document.querySelectorAll( 'section' )[ 0 ],
  section0row = section0.children[ 0 ].children[ 0 ];



const initialSection0Style = section0.getAttribute( 'style' ) || '';
function resizeCalibration() {
  mobileAdjustment();
  document.querySelector('.carousel').carousel({
    interval: 2000
  })
}



onloadFns.push( resizeCalibration );
onresizeFns.push( resizeCalibration );
