import $ from 'jquery';

class ModalContact {
	constructor() {
		this.openModalContactBtn = $(".open-modal-contact");
		this.modalContact = $(".modal-contact");
		this.closeModalContactBtn = $(".modal-contact__closeX");
		this.events();
	}

	events() {
		// clicking open modal button
		this.openModalContactBtn.click(this.openModalContact.bind(this));

		// clicking close button
		this.closeModalContactBtn.click(this.closeModalContact.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {    // if esc key pushed
			this.closeModalContact();
		}
	}

	openModalContact() {
		this.modalContact.addClass("modal-contact--showMe");
		return false;   //doesn't cause the # link to refresh-go to top
	}

	closeModalContact() {
		this.modalContact.removeClass("modal-contact--showMe");
		return false;
	}
}


export default ModalContact;