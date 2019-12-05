$(function(){

$('.header__slider').slick ({
	dots: true,
	infinite: true,
	fade: true,
	// prevArrow: false,
	// nextArrow: false,
	arrows: false,
});
	
	let titleElem = document.querySelectorAll('.footer__title');

	for ( let i = 0; i < titleElem.length; i++ ) {
		titleElem[i].addEventListener('click', show_list)
	}

	function show_list(e) {
		e.target.nextElementSibling.classList.toggle('open');
	}


});

// document.getElementById('nav').onmouseover = function (event) {
// 	var target = event.target;
// 	if (target.className == 'header__sup-item') {
// 		var s = target.getElementsByClassName('submenu');
// 		closeMenu();
// 		s[0].style.display = 'block';
// 	}
// }

// document.onmouseover = function (event) {
// 	var target = event.target;
// 	console.log(event.target);
// 	if (target.className != 'menu-item' && target.className != 'submenu') {
// 		closeMenu();
// 	}
// }

// function closeMenu() {
// 	var menu = document.getElementById('nav');
// 	var subm = document.getElementsByClassName('submenu');
// 	for (var i = 0; i < subm.length; i++) {
// 		subm[i].style.display = "none";
// 	}
// }

// var el = document.getElementsByClassName('submenu__list-item');
// for (var i = 0; i < el.length; i++) {
// 	el[i].addEventListener('mouseenter', showSub, false);
// 	el[i].addEventListener('mouseleave', hideSub, false);
// }

// function showSub() {
// 	if (this.children.length > 1) {
// 		this.children[1].style.height = "auto";
// 		this.children[1].style.opacity = "1";
// 		this.children[1].style.overflow = "visible";
// 	} else {
// 		return false;
// 	}
// }

// function hideSub() {
// 	if (this.children.length > 1) {
// 		this.children[1].style.height = "0";
// 		this.children[1].style.opacity = "0";
// 		this.children[1].style.overflow = "hidden";
// 	} else {
// 		return false;
// 	}
// }

// $('.header__bank.with-sub').on('click', function (e) {
// 	e.preventDefault();
// 	$(this).addClass('.opened')
// });


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

//Аккордеон

// function accordion(selector) {
// 	let accordion = $(selector);
// 	let spans = accordion.children('span');
// 	let divs = accordion.children('div');

// 	accordion
// 	.addClass('accordion')
// 	.on('click', '.accordion__control', function (e) {
// 		e.preventDefault();

// 		let a = $(this);
// 		let active = a.hasClass('accordion__control_active');

// 		accordion
// 			.find('.accordion__control_active')
// 			.removeClass('accordion__control_active');
// 		accordion
// 			.find('.accordion__panel_active')
// 			.removeClass('accordion__panel_active');

// 		if (!active) {
// 			a
// 				.addClass('accordion__control_active')
// 				.next()
// 				.addClass('accordion__panel_active');
// 		}
// 	});

// 	spans.each(function (){
// 		let span = $(this);
// 		span.replaceWith(
// 			'<a href="#" class="accordion__control">'
// 			+ span.text()
// 			+ '</a>'
// 		);
// 	});
// 	divs.addClass('accordion__panel')
// }

// accordion('#accordion');

