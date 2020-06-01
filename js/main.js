'use strict';

(function($){
	$(document).ready(function() {

		$('input[name="tel"]').mask('+380 (99) 999-99-99');
		$('input[name="tel"]').click(function(){
			$(this).focus();
		});

		// Pop-Up
		$('#video-popup, #popup-fade').hide();
		$('.btn-video-popup').click(function(e){
			e.preventDefault();
			$('#video-popup, #popup-fade').show();
		});

		$('.close-icon').click(function(){
			$('#video-popup, #popup-fade').hide();
		});

		// Reg
		$('#window-reg, #popup-fade').hide();
		$('.btn-reg').click(function(e){
			e.preventDefault();
			$('#window-reg, #popup-fade').show();
		});

		$('.close-icon').click(function(){
			$('#window-reg, #popup-fade').hide();
		});

		// Log
		$('#window-log, #popup-fade').hide();
		$('.btn-log--a').click(function(e){
			e.preventDefault();
			$('#window-reg, #popup-fade').hide();

			$('#window-log, #popup-fade').show();
		});

		$('.close-icon').click(function(){
			$('#window-log, #popup-fade').hide();
		});

		Закрытие по клавише Esc.
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('#popup-fade').fadeOut();
			}
		});
		
		// Клик по фону, но не по окну.
		$('#popup-fade').click(function(e) {
			if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();					
			}
		});

	});
})(jQuery);
