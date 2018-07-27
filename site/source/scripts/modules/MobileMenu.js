import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.mainHeader = $(".main-header");
		this.menuIcon = $(".main-header__menu-icon");
		this.menuContent = $(".main-header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleMobileMenu.bind(this));
	}

	toggleMobileMenu() {
		this.menuContent.toggleClass("main-header__menu-content--showMenu");
		this.mainHeader.toggleClass("main-header--showMenu");
		this.menuIcon.toggleClass("main-header__menu-icon--closeX");
	}
}

export default MobileMenu;