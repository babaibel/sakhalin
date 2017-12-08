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
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
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
		$tourSilderListItems = $tourSilderList.find('.js-tours-slider-list-item');

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
});

$(function() {
	var $SilderInSliderWr = $('.slider-in-slider-wr');
	if(!$SilderInSliderWr.length) return;

	var $SilderInSlider = $SilderInSliderWr.find('.slider-in-slider'),
		$SilderInSliderNav = $SilderInSliderWr.find('.js-tours-slider-controls');

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

$(function() {
	$('.js-tours-more-btn').click(function(){
		$(this).toggleClass('active');
	});
});

$(function() {
	var $tourInnerSilderWr = $('.js-tours-inner-slider-wr');
	if(!$tourInnerSilderWr.length) return;

	var $tourInnerSilder = $tourInnerSilderWr.find('.js-tours-inner-slider'),
		$tourInnerSilderList = $tourInnerSilderWr.find('.js-tours-inner-slider-list'),
		$tourInnerSilderListItems = $tourInnerSilderList.find('.js-tours-slider-list-item');

	$tourInnerSilder.on('init', function(slick){
	  $tourInnerSilderListItems.eq(0).addClass('active');
	});

	$tourInnerSilder.slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		fade: true
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

// $(function(){
// 	createSticky($(".inner-nav-wr"));
// });

// function createSticky(sticky) {
	
// 	if (typeof sticky !== "undefined") {

// 		var	pos = sticky.offset().top,
// 			win = $(window);
			
// 		win.on("scroll", function() {
//     		win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
// 		});			
// 	}
// }


