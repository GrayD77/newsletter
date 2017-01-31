var ModalWindow = {

	getHTML : function(innerHTML) {

		var html =`

			<div class="modal-container">
				<div class="modal-window">
					<button class="close-modal">X</button>
					<div class="modal-window-content">
						${innerHTML}
					</div>
				</div>
			</div>

		`

		return html;

	},

};