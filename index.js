'use strict'

import { caseStudyPassword } from "./secret.js"

window.checkPassword = function checkPassword() {
    const password = document.getElementById('exampleInputPassword1').value
    console.log(password)
    if (password === caseStudyPassword) {
        console.log('SUCCESS')
    } else {
        console.log('FAILED')
    }
}

// jQuery(function($) {
//     $(window).on('scroll', function() {
//       console.log($(this).scrollTop());
// 		if ($(this).scrollTop() >= 100) {
// 			$('.navbar').addClass('fixed-top');
// 		} else if ($(this).scrollTop() == 0) {
// 			$('.navbar').removeClass('fixed-top');
// 		}
// 	});
	
// 	function adjustNav() {
// 		var winWidth = $(window).width(),
// 			dropdown = $('.dropdown'),
// 			dropdownMenu = $('.dropdown-menu');
		
// 		if (winWidth >= 768) {
// 			dropdown.on('mouseenter', function() {
// 				$(this).addClass('show')
// 					.children(dropdownMenu).addClass('show');
// 			});
			
// 			dropdown.on('mouseleave', function() {
// 				$(this).removeClass('show')
// 					.children(dropdownMenu).removeClass('show');
// 			});
// 		} else {
// 			dropdown.off('mouseenter mouseleave');
// 		}
// 	}
	
// 	$(window).on('resize', adjustNav);
	
// 	adjustNav();
// });