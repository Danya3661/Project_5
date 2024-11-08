const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const headerLinkAll = document.querySelectorAll('.header_bottom__item_w');

burger.addEventListener('click', function () {
	headerMenu.classList.toggle('active');
});

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	// spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const tabButtonAll = document.querySelectorAll('[data-button__tub]');
const tubListAll = document.querySelectorAll('[data-list]');

tabButtonAll.forEach(function (element) {
	element.addEventListener('click', function (event) {
		if (element.classList.contains('active')) return;

		tabButtonAll.forEach(function (item) {
			item.classList.remove('active');
		});

		element.classList.add('active');

		tubListAll.forEach(function (item) {
			item.classList.remove('active');
		});
		console.log(event);

		document.querySelector('#' + event.target.dataset.button__tub).classList.add('active');
	});
});

const accordionTitleAll = document.querySelectorAll('[data-accordion-title]');

accordionTitleAll.forEach(function (item) {
	item.addEventListener('click', function () {
		if (item.classList.contains('active')) {
			item.classList.remove('active');

			return;
		} else {
			accordionTitleAll.forEach(function (i) {
				i.classList.remove('active');
			});
			item.classList.add('active');
		}
	});
});


