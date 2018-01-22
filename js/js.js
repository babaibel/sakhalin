$(function() {

	var $fishSlider = $('.js-fish-slider');
	if(!$fishSlider.length) return;

	$fishSlider.slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        variableWidth: true,
	        centerMode: true,
	        infinite: true
	      }
	    }
	  ]
	});

	$fishSlider.mousewheel(function(e) {
		e.preventDefault();

		if (e.deltaY < 0) {
			$(this).slick('slickNext');
		}
		else {
			$(this).slick('slickPrev');
		}
	});
});

$(function() {
	var $causes = $('.js-causes');
	if(!$causes.length) return;

	var $causesBgSlider = $causes.find('.js-causes-bg-slider'),
		$causesSlider = $causes.find('.js-causes-slider');

	$causesSlider.slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		asNavFor: $causesBgSlider,
		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					arrows: false
				}
	    	}
	    ]
	});

	$causesBgSlider.slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		fade: true,
		draggable: false,
		swipe: false,
		touchMove: false,
		arrows: false
	});

});

$(function() {
	var $gallery = $('.js-gallery');
	if(!$gallery.length) return;

	var $galleryBig = $gallery.find('.js-gallery-bigslider'),
		$gallerySmall = $gallery.find('.js-gallery-smallslider'),
		$gallerySmallItems = $gallerySmall.find('.js-gallery-smallslider-item');

	$galleryBig.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true
	});

	$gallerySmallItems.on('click', function(){
		var $this = $(this),
			number = $this.index();

		$galleryBig.slick('slickGoTo', number)
	});

	$galleryBig.each(function() {
	    $(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});
});

// $(function() {
// 	var $tourSilderWr = $('.js-tours-slider-wr');
// 	if(!$tourSilderWr.length) return;

// 	var $tourSilder = $tourSilderWr.find('.js-tours-slider'),
// 		$tourSilderNav = $tourSilderWr.find('.js-tours-slider-controls'),
// 		$tourSilderList = $tourSilderWr.find('.js-tours-slider-list'),
// 		$tourSilderListItems = $tourSilderList.find('.js-tours-slider-list-item');

// 	$tourSilder.on('init', function(slick){
// 	  $tourSilderListItems.eq(0).addClass('active');
// 	});

// 	$tourSilder.slick({
// 		dots: true,
// 		arrows: false,
// 		infinite: true,
// 		speed: 300,
// 		slidesToShow: 1,
// 		adaptiveHeight: true,
// 		appendDots: $tourSilderNav,
// 		fade: true
// 	});

// 	$tourSilder.on('beforeChange', function(event, slick, currentSlide,nextSlide){
// 	  $tourSilderListItems.removeClass('active');
// 	  $tourSilderListItems.eq(nextSlide).addClass('active');
// 	});

// 	$tourSilderListItems.on('click', function(){
// 		var $this = $(this),
// 			number = $this.index();

// 		$tourSilderListItems.removeClass('active');
// 		$this.addClass('active');

// 		$tourSilder.slick('slickGoTo', number)
// 	});
// });

$(function() {
	var $tourSilderWr = $('.js-tours-slider-wr');
	if(!$tourSilderWr.length) return;

	var $tourSilder = $tourSilderWr.find('.js-tours-slider'),
		$tourSilderList = $tourSilderWr.find('.js-tours-slider-list'),
		$tourSilderListItems = $tourSilderList.find('.js-tours-slider-list-item'),
		$SilderInSliderWr = $('.js-slider-in-slider-wr');

	$tourSilder.on('init', function(slick){
	  $tourSilderListItems.eq(0).addClass('active');
	});

	$tourSilder.slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		fade: true
	});

	$tourSilderList.slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
				{
				breakpoint: 767,
				settings: {
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
				{
				breakpoint: 600,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
				{
				breakpoint: 479,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// $tourSilder.on('beforeChange', function(event, slick, currentSlide,nextSlide){
	//   $tourSilderListItems.removeClass('active');
	//   $tourSilderListItems.eq(nextSlide).addClass('active');
	// });

	$tourSilderListItems.on('click', function(){
		var $this = $(this),
			number = $this.index();

		$tourSilderListItems.removeClass('active');
		$this.addClass('active');

		$tourSilder.slick('slickGoTo', number)
	});

	$SilderInSliderWr.each(function() {
		var $this = $(this),
			$SilderInSlider = $this.find('.slider-in-slider'),
			$SilderInSliderNav = $this.find('.js-tours-slider-controls');

		$SilderInSlider.slick({
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			appendDots: $SilderInSliderNav,
			fade: true
		});
	});
});


$(function() {
	$('.js-tours-more-btn').click(function(){
		$(this).toggleClass('active');
	});
});

$(function() {
	var $tourInnerSilderWr = $('.js-tours-inner-slider-wr');
	if(!$tourInnerSilderWr.length) return;

	var $tourInnerSilderList = $tourInnerSilderWr.find('.js-tours-inner-slider-list'),
		$tourInnerSilderListItems = $tourInnerSilderList.find('.js-tours-slider-list-item');

	// $tourInnerSilderList.on('init', function(slick){
	//   $tourInnerSilderListItems.eq(0).addClass('active');
	// });

	$tourInnerSilderList.slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
				{
				breakpoint: 767,
				settings: {
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
				{
				breakpoint: 600,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
				{
				breakpoint: 479,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$tourInnerSilder.on('beforeChange', function(event, slick, currentSlide,nextSlide){
	  $tourInnerSilderListItems.removeClass('active');
	  $tourInnerSilderListItems.eq(nextSlide).addClass('active');
	});

	$tourInnerSilderListItems.on('click', function(){
		var $this = $(this),
			number = $this.index();

		$tourInnerSilderListItems.removeClass('active');
		$this.addClass('active');

		$tourInnerSilder.slick('slickGoTo', number)
	});
});

$(function() {

	var $fullscreenSilderWr = $('.js-fullscreen-slider-wr');
	if(!$fullscreenSilderWr.length) return;

	var $fullscreenSilder = $fullscreenSilderWr.find('.js-fullscreen-slider'),
		$fullscreenSilderNav = $fullscreenSilderWr.find('.js-fullscreen-slider-controls');


	$fullscreenSilder.slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		fade: true,
		appendArrows: $fullscreenSilderNav
	});

	$fullscreenSilder.each(function() {
	    $(this).magnificPopup({
	        delegate: '.fullscreen-slider__item',
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

});

$(function() {

	var fixed_offset = $('.header-wr').height();

	$(window).resize(function(){
		fixed_offset = $('.header-wr').height();
	});

	$(".js-inner-menu a, .js-botbtn").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		// //забираем идентификатор бока с атрибута href
		// var id  = $(this).attr('href'),
		// 	top = $(id).offset().top;
		var id = $(this).attr('href').split('#')[1], 
			top = $('#' + id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - fixed_offset}, 1000);
	});

});

$(function() {

	$('.js-mob-btn').on('click', function(){
		$('.header').find('.js-main-nav-mob').toggleClass('active');
	});

});

$(function () { 
	var $navWr = $('.js-inner-nav-wr');
	if(!$navWr.length) return;

	var navPosition = $navWr.offset().top; 

	$(window).scroll(function(){ 
		if ($(window).scrollTop() >= navPosition - 90) { 
			$navWr.addClass('_sticky'); 
		}
		else {
			$navWr.removeClass('_sticky'); 
		}
	}); 
});

$(function() {
	var $innerGallery = $('.js-inner-gallery');
	if(!$innerGallery.length) return;

	$innerGallery.each(function() {
	    $(this).magnificPopup({
	        delegate: '.js-inner-gallery-photo',
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});
});

$(function() {
	var $innerGalleryAcc = $('.js-inner-gallery-accordeon');
	if(!$innerGalleryAcc.length) return;

	$innerGalleryAcc.click(function() {
		$(this).toggleClass('active');
		$(this).next('.inner-gallery__hidden-box').stop().slideToggle("slow");
	});

});

$(function() {
	$('.js-popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
		iframe: {
	        patterns: {
	            youtube: {
	                src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
	            }
	        }
	    }
	});

	$('.js-popup-youtube').click(function () {
	    return false;
	});
});