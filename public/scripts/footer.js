/* eslint-disable */
var allSections = document.querySelectorAll( 'section' ),
  firstSection = allSections[ 0 ],
  lastSection = allSections[ allSections.length - 1 ];

function setFooterMargin() {
  var footer = document.querySelector( 'footer' ),
    footerHeight = footer.offsetHeight;

  var lastSectionStyle = lastSection.getAttribute( 'style' ) || '';

  lastSection.setAttribute( 'style', lastSectionStyle + ' margin-bottom: ' + footerHeight + 'px; ' );
}

setFooterMargin();

window.onResizeFns.push( setFooterMargin );
