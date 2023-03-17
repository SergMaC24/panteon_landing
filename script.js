const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const decor = document.querySelector('.header-decor__top');

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		decor.classList.toggle('_active');
	});
}

// gallery 
var swiper1 = new Swiper(".slider-top", {
	slidesPerView:1.5,
	spaceBetween: 20,

	scrollbar: {
		el: ".swiper-scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next-unique-top',
		prevEl: '.swiper-button-prev-unique-top'
	},
	breakpoints: {
		// when window width is >= 992px
		992: {
		  slidesPerView: 4,
		  spaceBetween: 30
		},
		545: {
			slidesPerView: 2.5,
			spaceBetween: 30
		  },
	  }
});

var swiper2 = new Swiper(".slider-bottom", {
	slidesPerView:1.25,
	spaceBetween: 10,

	scrollbar: {
		el: ".swiper-scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next-unique-bot',
		prevEl: '.swiper-button-prev-unique-bot'
	},
	breakpoints: {
		// when window width is >= 992px
		992: {
		  slidesPerView: 3,
		  spaceBetween: 10
		},
		545: {
			slidesPerView: 2,
			spaceBetween: 10
		  },
	  }
});