const header = require('./components/header')
const footer = require('./components/footer')
const scripts = require('./components/scripts')

const document = (head, body) => `
<!DOCTYPE html>
<html lang="en">
${head}
<body>
  <div class="container-fluid main p-0 m-0" id="main">
    ${header.main}
    ${body.modals.length > 1 ? body.modals.join('\n\n') : body.modals}
    <section class="fdb-block pt-0" id="content">
      <div class="container">
        <!-- Begin Main-Body Content -->
        ${body.content}
        <!-- End Main-Body Content -->
      </div>
    </section>
    ${footer}
  </div>
  ${header.mobileDiv}
  ${scripts}
</body>
</html>
`

// ANCHOR module.exports
module.exports = document
