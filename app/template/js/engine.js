$(document).ready(function(){


	// // mobile-menu
	// $('#navbar').each(function(){
	// 	var $this = $(this),
	// 		$link = $('.navbar-toggle'),
	// 		$close = $('.close-menu'),

	// 		init = function(){
	// 			$link.on('click', openMenu);
	// 			$close.on('click', closeMenu);
	// 		},
	// 		openMenu = function(e){
	// 			e.preventDefault();
	// 			$('body').addClass('o-menu');

	// 		},
	// 		closeMenu = function(e){
	// 			e.preventDefault();
	// 			$('body').removeClass('o-menu');
	// 		};
	// 	init();
	// });	


	$(".homepage .catalog_link").mouseenter(function() {
		const cat = $(this).data('cat');
		$('[data-cat="' + cat + '"]').addClass('active');
	}).mouseleave(function() {
		const cat = $(this).data('cat');
		$('[data-cat="' + cat + '"]').removeClass('active');
	});


	$('#newproducts-carousel').slick({
		dots: false,
		slidesToShow: 11,
		slidesToScroll: 1,
		autoplay: false,
		arrows : false,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '55px'
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '35px'
				}
			}
		]
	});

});