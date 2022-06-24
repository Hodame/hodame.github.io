"use strict"

$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger, .menu__list, .menu__sign, .menu__body').toggleClass('burger')
	})
})

const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	  },
	  grabCursor: true,
	  autoplay: {
		delay:2000,
		disableOnInteraction:true,
	  },
	  autoHeight:true,
	  effect: "creative",
	  creativeEffect: {
		prev: {
		  shadow: true,
		  translate: [0, 0, -400],
		},
		next: {
		  translate: ["100%", 0, 120],
		},
	  },
})