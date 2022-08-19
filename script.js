const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListeners();

function allEventListeners() {
	navToggler.addEventListener('click', togglerClick);
	navLinks.forEach(elem => {
		elem.addEventListener('click', navLinkClick);
		elem.addEventListener('click', smoothScroll);
	});
}

function smoothScroll(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: 'smooth',
	});
}

function togglerClick() {
	navToggler.classList.toggle('toggler-open');
	navMenu.classList.toggle('open');
}

function navLinkClick() {
	if (navMenu.classList.contains('open')) {
		navToggler.click();
	}
}
