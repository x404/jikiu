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


	$(".homepage .catalog__link").mouseenter(function() {
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
		arrows : true,
		appendArrows: '.new-products-arrows',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 9,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});



	// WIPER BLADES
	$('#flattypes_carousel').slick({
		dots: false,
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: false,
		arrows : false,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			}
		]
	});

	$('#anytypes_carousel').slick({
		dots: false,
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: false,
		arrows : false,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			}
		]
	});

});