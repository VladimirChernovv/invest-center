$(function(){

	$('.header__slider').slick ({
		dots: true,
		infinite: true,
		fade: true,
		arrows: false,
		responsive: [
			{
				breakpoint
			}
	});

	//Открывающееся верхнее меню
	// let titleWrap = document.querySelectorAll('.header__title-wrap');

	// for (let i = 0; i < titleWrap.length; i++) {
	// 	titleWrap[i].addEventListener('click', show_list)
	// }

	// function show_list(e) {
	// 	e.target.nextElementSibling.classList.toggle('open');
	// }

	
	//Открывающееся нижнее меню в footer
	let titleElem = document.querySelectorAll('.footer__title');

	for ( let i = 0; i < titleElem.length; i++ ) {
		titleElem[i].addEventListener('click', show_list)
	}

	function show_list(e) {
		e.target.nextElementSibling.classList.toggle('open');
	}


});

// О Банке
let opend = document.querySelector('.opend');

opend.addEventListener('click', function (e) {
	e.stopPropagation()

	let submenu1 = document.querySelector('.submenu1')

	if (submenu1.style.display === "block") {
		submenu1.style.display = "none";
	} else {
		submenu1.style.display = "block"
	}
});

// Частным клиентам
let clients = document.querySelector('.clients');
clients.addEventListener('click', function (e) {
	e.stopPropagation()

	let submenu2 = document.querySelector('.submenu2')

	if (submenu2.style.display === "block") {
		submenu2.style.display = "none";
	} else {
		submenu2.style.display = "block"
	}
});

// Корпоративным клиентам
let corporate = document.querySelector('.corporate');
corporate.addEventListener('click', function (e) {
	e.stopPropagation()

	let submenu3 = document.querySelector('.submenu3')

	if (submenu3.style.display === "block") {
		submenu3.style.display = "none";
	} else {
		submenu3.style.display = "block"
	}
});

// Услуги на ранке ценных бумаг
let bonds = document.querySelector('.bonds');
bonds.addEventListener('click', function (e) {
	e.stopPropagation()

	let submenu4 = document.querySelector('.submenu4')

	if (submenu4.style.display === "block") {
		submenu4.style.display = "none";
	} else {
		submenu4.style.display = "block"
	}
});

// Отрабатываем клик по body
let body = document.querySelector('body');

body.addEventListener('click', function (e) {
	
	let submenu1 = document.querySelector('.submenu1');
	if (submenu1.style.display === "block") {
		submenu1.style.display = "none";
	}

	let submenu2 = document.querySelector('.submenu2');
	if (submenu2.style.display === "block") {
		submenu2.style.display = "none";
	}

	let submenu3 = document.querySelector('.submenu3');
	if (submenu3.style.display === "block") {
		submenu3.style.display = "none";
	}

	let submenu4 = document.querySelector('.submenu4');
	if (submenu4.style.display === "block") {
		submenu4.style.display = "none";
	}
});

