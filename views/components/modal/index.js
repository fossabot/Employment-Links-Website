const modal = ( title, id, icon, body ) => `
<div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="contact-modal" aria-hidden="true" style="padding: 0;">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header text-center">
				<button class="close" type="button" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body px-md-5 mx-md-5">
				<div class="container">
					<div class="row text-center justify-content-center">
						<div class="col-12 col-md-8 col-lg-7 mb-5">
							<h1 class="text-center display-4 display-switch d4">
                <span style="font-size: 3rem">

                  ${icon || '<i class="fa fa-paper-plane mb-3 text-primary"></i>'}

								</span>
								<br />
								<span>${title}</span>
							</h1>
						</div>
					</div>
					<div class="row pt-4">
            <div class="col-12">

						${body}

						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-grey-500" type="button" data-dismiss="modal">
					Close
				</button>
			</div>
		</div>
	</div>
</div>
`
// ANCHOR module.exports
module.exports = modal
