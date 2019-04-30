/* eslint-disable */
document.querySelector( 'header' ).classList.remove( 'fixed-top' );
document.querySelector( 'footer' ).classList.remove( 'fixed-bottom' );

function setHeight() {
  const footerHeight = document.querySelector( 'footer' ).offsetHeight;
  const mapHeight = ( window.innerHeight * 0.33 );
  document.querySelector( '#map' ).setAttribute( 'style', 'height: ' + mapHeight + 'px' );
  document.querySelector( 'iframe' ).setAttribute( 'height', mapHeight );

  var section = document.querySelector( 'section' ),
    pageHeight = ( window.innerHeight - footerHeight ),
    minHeight = String('min-height: ' + pageHeight + 'px;');

  section.setAttribute( 'style', minHeight);

}

window.onload = setHeight();
