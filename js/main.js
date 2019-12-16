//import { exists } from "fs";

$(function(){

	$('.header__slider').slick ({
		dots: true,
		infinite: true,
		fade: true,
		arrows: false,	
	});

	$('.market__slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				}
			}
		]
	});

	$('.advantages__slider').slick({
		infinite: true,
		arrows: false,
	});

	//Открывающееся верхнее меню
	let titleWrap = document.querySelectorAll('.header__title-wrap');

	for (let i = 0; i < titleWrap.length; i++) {
		titleWrap[i].addEventListener('click', show_list)
	}

	function show_list(e) {
		e.target.nextElementSibling.classList.toggle('open');
	}

	
	//Открывающееся нижнее меню в footer
	let titleElem = document.querySelectorAll('.footer__title');

	for ( let i = 0; i < titleElem.length; i++ ) {
		titleElem[i].addEventListener('click', show_list)
	}

	function show_list(e) {
		
		if (e.target.nextElementSibling.children[0].classList[0] === "header__menu-lower"){
			e.target.nextElementSibling.children[0].classList.toggle('open');
			e.target.nextElementSibling.children[1].classList.toggle('open');
		} else {
			e.target.nextElementSibling.classList.toggle('open');
		}
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

	if (e.target.classList[0] !== "header__title-wrap") {

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
	}

	// Отрабатываем клик по header__bar на ширине меньше 768px

	// Ширина окна
	let wi = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth

		if(wi < 769) {
			let header__wrap = document.querySelector('.header__wrap')
			let sandwich = document.getElementById('sandwich')
			sandwich.addEventListener('click', show_menu)

			function show_menu(e) {
				e.preventDefault()
				header__wrap.style.display = 'block'
			//	header__wrap.classList.toggle('open')
			}
		}

	// Скрываем показываем монеты на ширине меньше 768px
	let coin = document.getElementById('coin')
	let metal = document.getElementById('metal')

	let services__heading_second = document.querySelector('.services__heading_second')

	let services__heading_third = document.querySelector('.services__heading_third')

	services__heading_second.addEventListener('click', show_coin)

	services__heading_third.addEventListener('click', show_metal)

	function show_coin(e) {
		e.stopPropagation()
		console.log(55355354)

		coin.style.display = 'block'
		metal.style.display = 'none'
	}

	function show_metal(e) {
		e.stopPropagation()

		coin.style.display = 'none'
		metal.style.display = 'block'
	}
});

