/* eslint-disable */

function moveContactInfo() {
  const contactColumn = document.querySelector( '#footer-contact' ),
    contactColumnClone = contactColumn.cloneNode( true ),
    footerRow = document.querySelector( '#footer-main-row' );

  const windowWidth = window.innerWidth;

  if ( windowWidth < 768 &&
    footerRow.children[ footerRow.children.length - 1 ].id === 'footer-contact' ) {
    contactColumn.remove();
    contactColumnClone.classList.add( 'pb-5' );
    footerRow.prepend( contactColumnClone );

  } else if ( windowWidth > 768 &&
    footerRow.children[ 0 ].id === 'footer-contact' ) {
    contactColumn.remove();
    footerRow.append( contactColumnClone );
  }
}

function setMargin() {
  const mainFooter = document.querySelector( '#footer-main-row' ),
    subfooter = document.querySelector( '#subfooter' ),
    subfooterHeight = subfooter.getBoundingClientRect().height;

  mainFooter.setAttribute( 'style', 'margin-bottom: ' + subfooterHeight + 'px; ' );
}

onloadFns.push( moveContactInfo, setMargin );
onresizeFns.push( moveContactInfo, setMargin );
