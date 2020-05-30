'use strict';

(function($){
	$(document).ready(function() {
		// // Code
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
		// }

		// for (let i = 0; i < close.length; i++) {
		// 	close[i].onclick = hide();
		// }

		// function hide() {
		// 	let windowReg = document.getElementById('window-reg');
		// 	windowReg.style.display = 'none';
		// }


		// Pop-Up
		$('#video-popup, #bg_layer').hide();
		$('.btn-video-popup').click(function(){
			$('#video-popup, #bg_layer').show();
		});

		$('.close-icon').click(function(){
			$('#video-popup, #bg_layer').hide();
		});


		// Reg
		$('#window-reg, #bg_layer').hide();
		$('.btn-reg').click(function(){
			$('#window-reg, #bg_layer').show();
		});

		$('.close-icon').click(function(){
			$('#window-reg, #bg_layer').hide();
		});

	});
})(jQuery);
