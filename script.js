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