// var $W = $(window),
// 	$D = $(document),
// 	$H = $('html'),
// 	$B = $('body');

$(function() {

	$('.js-fish-slider').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: true,
		    dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
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

	$('.js-gallery-bigslider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true
	});

});
$(function() {
	// $('.gallery-bigslider').magnificPopup({
	// 	delegate: '.bigslider__item',
	// 	type: 'image',
	// 	gallery:{
	// 	    enabled:true
	// 	  }
	// 	 // other options
	// });

	$('.gallery-bigslider').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});
});

// $(function() {

// 	$('.js-popup-modal').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#username',
// 		showCloseBtn: false,
// 		mainClass: 'popup-modal-overlay'
// 	});

// 	$(document).on('click', '.popup-modal-dismiss', function (e) {
// 		e.preventDefault();
// 		$.magnificPopup.close();
// 	});
// });

// $(function() {

// 	$('.js-form').each(function(){
// 		// Объявляем переменные (форма и кнопка отправки)
// 		var form = $(this),
// 		    btn = form.find('.blue-btn');

// 		// Добавляем каждому проверяемому полю, указание что поле пустое
// 		form.find('.rfield').addClass('empty_field');

// 		// Функция проверки полей формы
// 		function checkInput(){
// 			form.find('.rfield').each(function(){
// 				if($(this).val() != ''){
// 					  // Если поле не пустое удаляем класс-указание
// 					$(this).removeClass('empty_field');
// 				} else {
// 					  // Если поле пустое добавляем класс-указание
// 					$(this).addClass('empty_field');
// 				}
// 			});
// 		}

// 		// Функция подсветки незаполненных полей
// 		function lightEmpty(){
// 			form.find('.empty_field').addClass('error');
// 			// Через полсекунды удаляем подсветку
// 			setTimeout(function(){
// 			form.find('.empty_field').removeClass('error');
// 			},500);
// 		}

// 		// Проверка в режиме реального времени
// 		setInterval(function(){
// 			// Запускаем функцию проверки полей на заполненность
// 			checkInput();
// 			// Считаем к-во незаполненных полей
// 			var sizeEmpty = form.find('.empty_field').size();
// 			// Вешаем условие-тригер на кнопку отправки формы
// 			if(sizeEmpty > 0){
// 			if(btn.hasClass('disabled')){
// 			  return false
// 			} else {
// 				btn.addClass('disabled')
// 			}
// 			} else {
// 				btn.removeClass('disabled')
// 			}
// 		}, 500);


// 		// Событие клика по кнопке отправить
// 		btn.click(function(){
// 		  if($(this).hasClass('disabled')){
// 		    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
// 			lightEmpty();
// 			return false
// 		  } else {
// 				form.submit(function (){

// 					var data = form.serialize();

// 					$.ajax({ 
// 						// инициaлизируeм ajax зaпрoс
// 						type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
// 						url: 'mail.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
// 						data: data, // дaнныe для oтпрaвки
// 						error: function(xhr, status, error) {
// 							console.log(xhr.responseText + '|\n' + status + '|\n' +error);
// 						},
// 						success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
// 							var $form = $(this),
// 								title = $form.data('title'),
// 								text = $form.data('text'),
// 								$popup = $('#after-modal'),
// 								$popupTitle = $popup.find('.js-popup-title'),
// 								$popupText= $popup.find('.js-popup-text');


// 							$popupTitle.text(title);
// 							$popupText.text(text);

// 							$.magnificPopup.close();
// 							$.magnificPopup.open({
// 								showCloseBtn: false,
// 								items: {
// 									src: '#after-modal'
// 								},
// 								type: 'inline'
// 								}, 
// 							0);
// 						}
// 					});
// 					return false;
// 				});
// 			}
// 		});
// 	});
// });

// $(function() {

// 	$('.js-gallery').each(function() { // the containers for all your galleries
// 	    $(this).magnificPopup({
// 	        delegate: 'a', // the selector for gallery item
// 	        type: 'image',
// 	        gallery: {
// 	          	enabled:true,
// 	            tPrev: '', // title for left button
// 				tNext: '', // title for right button
// 				tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
// 	        }
// 	    });
// 	});

// });

// $(function() {

// 	var $blockWr = $('.js-gallery.portfolio'),
// 		$block = $blockWr.find('.portfolio__visible'),
// 		$blockBtn = $blockWr.find('.js-show-more'),
// 		heightVar = 590;

// 	$blockBtn.click(function(){
// 		var blockHeight = $block.height();
// 			blockHeight = blockHeight + heightVar;
// 			$block.animate({height: blockHeight},400,function(){
// 				if(blockHeight == 5900){
// 					$blockBtn.animate({opacity: 0},300);
// 				}
// 			});
		
// 	});

// });
