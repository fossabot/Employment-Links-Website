/* eslint-disable */


/**
 *
 */
function mobileAdjustment() {
  const opp = document.querySelector( '.opportunities' ),
    oppCardContainer = opp.children[ 0 ],
    oppCardRow = oppCardContainer.children[ 1 ],
    card0 = oppCardRow.children[ 0 ],
    serviceCard = document.querySelector( '#primary' ),
    serviceCardClone = serviceCard.cloneNode( -1 ),
    careerCard = document.querySelector( '#secondary' ),
    careerCardClone = careerCard.cloneNode( -1 ),
    cardButtons = oppCardRow.getElementsByTagName( 'a' );
  if ( window.screen.width <= 600 ) {
    oppCardRow.removeChild( serviceCard );
    oppCardRow.removeChild( careerCard );
    oppCardRow.prepend( careerCardClone );
    oppCardRow.prepend( serviceCardClone );

    document.querySelectorAll( '.display-switch' ).forEach( function ( el ) {
      el.classList.remove( 'display-1', 'display-2', 'display-3', 'display-4' )
    } );

    for (var i = 0; i < cardButtons.length; i++) {
      var btn = cardButtons[i];
      btn.classList.remove( 'btn-outline-light' );
      btn.classList.add( 'btn-light', 'btn-lg', 'btn-block' );
    }
  } else {
    oppCardRow.removeChild( serviceCard );
    oppCardRow.removeChild( careerCard );
    oppCardRow.prepend( serviceCardClone );
    oppCardRow.prepend( careerCardClone );
    document.querySelectorAll( '.display-switch' ).forEach( function ( el ) {
      var classList = el.classList;
      if ( classList.contains( 'd1' ) ) classList.add( 'display-1' );
      if ( classList.contains( 'd2' ) ) classList.add( 'display-2' );
      if ( classList.contains( 'd3' ) ) classList.add( 'display-3' );
      if ( classList.contains( 'd4' ) ) classList.add( 'display-4' );
    } );
    for ( var i = 0; i < cardButtons.length; i++ ) {
      if ( i === 1 ) continue;
      var btn = cardButtons[i];
      btn.classList.add( 'btn-outline-light' );
      btn.classList.remove( 'btn-light', 'btn-lg', 'btn-block' );
    }
  }
}

var global = {};
var bridge = document.querySelector( '#bridge' ),
  section1 = document.querySelectorAll( 'section' )[ 1 ],
  section0 = document.querySelectorAll( 'section' )[ 0 ],
  section0row = section0.children[ 0 ].children[ 0 ];



var birds = '<div class="birdcontainer"><div class="bird-container bird-container--one"><div class="bird bird--one"></div></div><div class="bird-container bird-container--two"><div class="bird bird--two"></div></div></div>'


var bridge = document.querySelector( '#bridge' ),
  bridgeBCR = bridge.getBoundingClientRect();
var bridgeClicks = [];

window.load = ( function () {
  mobileAdjustment();

  var textHeight = section0row.clientHeight,
    bridgeHeight = bridge.clientHeight;
  section0.setAttribute( 'style', ( section0.getAttribute( 'style' ) || '' ) + 'min-height: ' + ( textHeight + bridgeHeight + 40 ) + 'px; ' );


} )()

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
}

containBridge();

window.onresizeFns.push( mobileAdjustment, containBridge );
