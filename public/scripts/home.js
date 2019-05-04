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

if ( bridge ) {

  var birds = '<div class="birdcontainer"><div class="bird-container bird-container--one"><div class="bird bird--one"></div></div><div class="bird-container bird-container--two"><div class="bird bird--two"></div></div></div>'


  var bridgeBCR = bridge.getBoundingClientRect();
  var bridgeClicks = [];

  bridge.addEventListener( 'click',
    function () {
      bridgeClicks.push( new Date().getTime() );
      if ( bridgeClicks.length > 4 &&
        bridgeClicks.reverse()[ 0 ] - bridgeClicks[ 4 ] <= 3000 ) {
        document.querySelector( 'section' ).innerHTML += birds
        window.setTimeout( function () {
          bridgeClicks = [];
          document.querySelector( '.birdcontainer' ).remove();
        }, 15000 );
      }
    }
  );


  function containBridge() {
    bridge.classList.add( 'hidden' );

    var styleRule = function ( value ) {
      return 'right: ' + value + ';'
    }

    var currentStyle = bridge.getAttribute( 'style' ) || '';

    var bridgeWidth = bridge.getBoundingClientRect().width,
      pageWidth = window.innerWidth;

    console.log( bridgeWidth );

    if ( currentStyle.indexOf( 'vw' ) !== -1 ) {
      if ( bridgeWidth + ( pageWidth * .3 ) > pageWidth ) {
        bridge.setAttribute( 'style', styleRule( '0' ) );
      }
    } else {
      if ( bridgeWidth + ( pageWidth * .3 ) > pageWidth ) {
        bridge.setAttribute( 'style', styleRule( '0' ) );
      } else bridge.setAttribute( 'style', styleRule( '20vw' ) );
    }

    bridge.classList.remove( 'hidden' );
  }
}

const initialSection0Style = section0.getAttribute( 'style' ) || '';
function resizeCalibration() {
  mobileAdjustment();
  if ( bridge ) {
    containBridge();

    var textHeight = section0row.getBoundingClientRect().height,
      bridgeHeight = bridge.getBoundingClientRect().height;
    section0.setAttribute( 'style', ( initialSection0Style ) + 'min-height: ' + ( textHeight + bridgeHeight + 40 ) + 'px; ' );
  }
}



onloadFns.push( resizeCalibration );
onresizeFns.push( resizeCalibration );
