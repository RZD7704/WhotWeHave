'use strict';

(function($){
	$(document).ready(function() {
		// // // Code
		// // log video-popup
		// $('.btn-reg').click(() => {
		// 	showReg();
		// });

		// // $('.btn-video-popup').click(() => {
		// // 	showVideo();
		// // });

		// $('.close-icon').click(() => {
		// 	hide();
		// });

		// // function showVideo() {
		// // 	let videoPopup = document.getElementsById('video-popup, bg_layer');
		// // 	videoPopup.style.display = "block";
		// // }

		// function showReg() {
		// 	let windowLog = document.getElementById('window-reg');
		// 	windowLog.style.display = "block";
		// 	let windowFade = document.getElementById('popup-fade');
		// 	windowFade.style.display = 'block';
		// }

		// for (let i = 0; i < close.length; i++) {
		// 	close[i].onclick = hide();
		// }

		// function hide() {
		// 	let windowReg = document.getElementById('window-reg');
		// 	windowReg.style.display = 'none';
		// 	let windowFade = document.getElementById('popup-fade');
		// 	windowFade.style.display = 'none';
		// }


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


		

		// $('.btn-reg').click(function() {
		// 	$('.popup-fade').fadeIn();
		// 	return false;
		// });	
		
		// $('.close-icon').click(function() {
		// 	$(this).parents('.popup-fade').fadeOut();
		// 	return false;
		// });		
	 
		// $(document).keydown(function(e) {
		// 	if (e.keyCode === 27) {
		// 		e.stopPropagation();
		// 		$('.popup-fade').fadeOut();
		// 	}
		// });
		
		// $('.popup-fade').click(function(e) {
		// 	if ($(e.target).closest('.popup').length == 0) {
		// 		$(this).fadeOut();					
		// 	}
		// });

	});
})(jQuery);
