'use strict'

const caseStudyPassword = process.env.CASE_STUDY_SECRET

window.checkPassword = function checkPassword() {
    const password = document.getElementById('exampleInputPassword1').value
    console.log(password)
    console.log(caseStudyPassword)
    if (password === caseStudyPassword) {
        console.log('SUCCESS')
        // window.location.href = "http://127.0.0.1:5502/caseStudy1.html"

        window.location.href = "https://wakakoux/caseStudy1.html"
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