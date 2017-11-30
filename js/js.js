$(function() {
	$('.js-fish-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5
	});
});

$(function() {
	$('.js-causes-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1
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

$(function() {
	var $tourSilderWr = $('.js-tours-slider-wr');
	if(!$tourSilderWr.length) return;

	var $tourSilder = $tourSilderWr.find('.js-tours-slider'),
		$tourSilderNav = $tourSilderWr.find('.js-tours-slider-controls'),
		$tourSilderList = $tourSilderWr.find('.js-tours-slider-list'),
		$tourSilderListItems = $tourSilderList.find('.js-tours-slider-list-item');

	$tourSilder.on('init', function(slick){
	  $tourSilderListItems.eq(0).addClass('active');
	});

	$tourSilder.slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		appendDots: $tourSilderNav,
		fade: true
	});

	$tourSilder.on('beforeChange', function(event, slick, currentSlide,nextSlide){
	  $tourSilderListItems.removeClass('active');
	  $tourSilderListItems.eq(nextSlide).addClass('active');
	});

	$tourSilderListItems.on('click', function(){
		var $this = $(this),
			number = $this.index();

		$tourSilderListItems.removeClass('active');
		$this.addClass('active');

		$tourSilder.slick('slickGoTo', number)
	});
});

$(function() {
	$('.js-tours-more-btn').click(function(){
		$(this).toggleClass('active');
	});
});
