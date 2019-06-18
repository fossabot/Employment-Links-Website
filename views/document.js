const scripts =
	'<script src="scripts/modernizr-3.7.1.min.js"></script><script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script><scriptsrc="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"crossorigin="anonymous"></script><script src="/scripts/bootstrap.min.js"></script><script src="https://cdn.jsdelivr.net/gh/fitodac/bsnav@master/dist/bsnav.min.js"></script><script>var onresizeFns = [];var onloadFns = [];//- Set link attributes based on textvar navLink = document.querySelectorAll("a.nav-link");navLink.forEach(function(a) {var text = a.innerText;if (a.children) {for (var x = 0; x < a.children.length; x++) {text = text.replace(a.children[x].innerText, "");}}var link = "/" + text.split(" ")[0];a.setAttribute("href", link.toLowerCase());});var header = document.querySelector("header"),headerHeight = header.offsetHeight;var allSections = document.querySelectorAll("section"),firstSection = allSections[0],lastSection = allSections[allSections.length - 1];var footer = document.querySelector("footer"),footerHeight = footer.offsetHeight;// Set active page classvar page = window.location.pathname.split("/");page = page[page.length - 1];if (page === "") page = "home";page = "/" + page;var nav = document.querySelector(\'a[href="\' + page + \'"]\');if (nav) {nav.parentElement.classList.add("active");}</script><script src="/scripts/header.js"></script><script src="/scripts/footer.js"></script><script>window.ga = function() {ga.q.push(arguments);};ga.q = [];ga.l = +new Date();ga("create", "UA-127677411-1", "auto");ga("set", "transport", "beacon");ga("send", "pageview");</script><script src="https://www.google-analytics.com/analytics.js" async="" defer=""></script><script src="/scripts/home.js"></script><script>window.onload = function() {onloadFns.forEach(function(fn) {fn();});};window.onresize = function() {onresizeFns.forEach(function(fn) {fn();});};</script>'

const navs = {
	'header': require( './components/header' ),
	'footer': require( './components/footer' )
}

const document = ( head, body ) => `
<!DOCTYPE html>
<html lang="en">

${head}

<body>
<div class="container-fluid main p-0 m-0" id="main">

${navs.header.main}

${body}

${navs.footer}

${navs.header.footer}

</div>

${scripts}

</body>
</html>
`

// ANCHOR module.exports
module.exports = document
