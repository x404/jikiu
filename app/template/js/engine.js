var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {
	$(".homepage .catalog__link").mouseenter(function () {
		const cat = $(this).data('cat');
		$('[data-cat="' + cat + '"]').addClass('active');
	}).mouseleave(function () {
		const cat = $(this).data('cat');
		$('[data-cat="' + cat + '"]').removeClass('active');
	});

	$('#newproducts-carousel').slick({
		dots: false,
		slidesToShow: 11,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		appendArrows: '.new-products-arrows',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
		responsive: [{
			breakpoint: 1700,
			settings: {
				slidesToShow: 10,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1400,
			settings: {
				slidesToShow: 9,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1250,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1199,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1050,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 720,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}]
	});

	// WIPER BLADES
	$('#flattypes_carousel').slick({
		dots: false,
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		responsive: [{
			breakpoint: 1800,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1500,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1280,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1050,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 720,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '80px'
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '40px'
			}
		}, {
			breakpoint: 380,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '80px'
			}
		}]
	});

	$('#anytypes_carousel').slick({
		dots: false,
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		responsive: [{
			breakpoint: 1800,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1500,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1280,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 1050,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 720,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '80px'
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '40px'
			}
		}, {
			breakpoint: 380,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}]
	});

	// popover

	$('[data-toggle="popover"]').popover();

	$('body').on('click', function (e) {
		$('[data-toggle="popover"]').each(function () {
			//the 'is' for buttons that trigger popups
			//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');

				$('[data-toggle="popover_sub"]').each(function () {
					$(this).popover('hide');
				});
			}
		});
	});

	$('.link-photo[data-toggle="popover"]').on('inserted.bs.popover', function (e) {
		const clsImages = new PerfectScrollbar('#' + $('.popover:last-child').attr('id') + ' .clsImages', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100
		});
		clsImages.update();
	});

	$('[data-toggle="popover"]').popover().click(function () {
		$('[data-toggle="popover_sub"]').popover().on('show.bs.popover', function () {
			$('div.popover').eq(1).popover('hide');
		});
		$('[data-toggle="popover_sub"]').popover().on('shown.bs.popover', function () {
			$('[data-toggle="popover_sub"]').popover();
		});
	});

	// catalog select on tab "By Size"
	$('.selbush').multipleSelect({
		single: true,
		filter: false
	});
});

$('body').on('click', '.popover .close', function () {
	$(this).closest('div.popover').popover('hide');
});

let mobmenu = function () {
	function mobmenu(name) {
		var _this = this;

		_classCallCheck(this, mobmenu);

		this.name = name;
		document.querySelector('.navbar-toggle').addEventListener('click', function () {
			return _this.open();
		});
	}

	_createClass(mobmenu, [{
		key: 'open',
		value: function open() {
			var _this2 = this;

			document.querySelector(this.name + ' .close').addEventListener('click', function () {
				return _this2.close();
			});

			// show popup
			document.querySelector(this.name).classList.add('show');
		}
	}, {
		key: 'close',
		value: function close() {
			// hide popup
			document.querySelector(this.name).classList.remove('show');
		}
	}]);

	return mobmenu;
}();

let modalinfo = new mobmenu('.mobmenu');