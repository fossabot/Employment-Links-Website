// ANCHOR module.exports
module.exports = `
<header class="navbar navbar-expand-sm bsnav bsnav-sticky bsnav-sticky-slide">
  <div class="container px-4">
    <a class="navbar-brand" href="/">
      <imgsrc="images/logo-text-b.png"style="max-height: 50px; height: 5vh"/>
    </a>
    <button class="navbar-toggler toggler-spring">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-end">
      <ul class="navbar-nav navbar-mobile mr-0">
        <li class="nav-item px-md-3"><a class="nav-link" href="/">Home</a></li>
        <li class="nav-item px-md-3 dropdown dropdown-horizontal">
          <a class="nav-link" href="">
            Services
            <i class="fa fa-angle-down caret"></i>
          </a>
          <ul class="navbar-nav border-bottom border-top">
            <div class="container text-md-right px-4">
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="/services">Services Home</a>
              </li>
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="/services-overview">Overview</a>
              </li>
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="/services-person-centered">Person-Centered</a>
              </li>
              <li class="nav-item pl-md-3">
                <a class="nav-link" href="/services-referral">Referral</a>
              </li>
            </div>
          </ul>
        </li>
        <li class="nav-item px-md-3 dropdown dropdown-horizontal">
          <a class="nav-link" href="">
            Careers
            <i class="fa fa-angle-down caret"></i>
          </a>
          <ul class="nav navbar-nav border-bottom border-top">
            <div class="container text-md-right px-4">
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="/careers">Careers Home</a>
              </li>
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="">Positions</a>
              </li>
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="">Apply</a>
              </li>
              <li class="nav-item pl-md-3">
                <a class="nav-link" href="">EEO Policy</a>
              </li>
            </div>
          </ul>
        </li>
        <li class="nav-item px-md-3 dropdown dropdown-horizontal">
          <a class="nav-link" href="">
            Partners
            <i class="fa fa-angle-down caret"></i>
          </a>
          <ul class="nav navbar-nav border-bottom border-top">
            <div class="container text-md-right px-4">
              <li class="nav-item mr-md-3 px-md-3">
                <a class="nav-link" href="">Partners Home</a>
              </li>
              <li class="nav-item pl-md-3">
                <a class="nav-link" href="">Resources</a>
              </li>

            </div>
          </ul>
         </li>
        <li class="nav-item px-md-3">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</header>
`
