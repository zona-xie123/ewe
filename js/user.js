$(document).ready(function () {

	$('.invest a').click(function () {
		$(".tab_kv img").attr("src", "img/kv-1.png");
		$(".kv").css("background", "url(img/kv_bg_1.jpg)");
		$(".kv").css("background-size", "cover");
		$(".kv").css("background-position", "bottom");
	})
	$('.travel a').click(function () {
		$(".tab_kv img").attr("src", "img/kv-2.png");
		$(".kv").css("background", "url(img/kv_bg_2.jpg)");
		$(".kv").css("background-size", "cover");
		$(".kv").css("background-position", "bottom");
	})
	//浮動按鈕
	// var float_btn = $('.float_btn');
	// $(window).scroll(function () {
	//     if ($(this).scrollTop() > 200) {
	//         float_btn.fadeIn();
	//     } else {
	//         float_btn.stop().fadeOut();
	//     }
	// });
	//nav切換
	$('.nav_2').click(function () {
		$("html, body").animate({
			scrollTop: $("#tab2-1").offset().top - 100 }, {duration: 1000,easing: "swing"});
		event.preventDefault();
		$('.invest a').removeClass('active')
		$('.travel a').addClass('active')
		$('#tab2').show();
		$('#tab1').hide();

	})
	$('.nav_1').click(function () {
		$("html, body").animate({
			scrollTop: $("#tab1-1").offset().top - 100 }, {duration: 1000,easing: "swing"});
		event.preventDefault();
		$('.invest a').addClass('active')
		$('.travel a').removeClass('active')
		$('#tab1').show();
		$('#tab2').hide();

	})
	//底部切換頁籤
	$('.go_tab2').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		event.preventDefault();
		$('.invest a').removeClass('active')
		$('.travel a').addClass('active')
		$('#tab2').show();
		$('#tab1').hide();

	})
	$('.go_tab1').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		event.preventDefault();
		$('.invest a').addClass('active')
		$('.travel a').removeClass('active')
		$('#tab1').show();
		$('#tab2').hide();

	})
	//tab
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a').click(function (e) {
		e.preventDefault();
		var $this = $(this),
			tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();

	})
//錨點展開($($anchor.attr('href')).offset().top - 100)
var url=window.location.href.split("#")[1]
var target='tab2-1'
if(url==target){
	$('.invest a').removeClass('active')
	$('.travel a').addClass('active')
	$('#tab2').show();
	$('#tab1').hide();
  $("html, body").animate({
	scrollTop: $("#tab2-1").offset().top - 100 }, {duration: 1000,easing: "swing"});
	return false;
}
var target2='tab2-2'
if(url==target2){
	$('.invest a').removeClass('active')
	$('.travel a').addClass('active')
	$('#tab2').show();
	$('#tab1').hide();
  $("html, body").animate({
	scrollTop: $("#tab2-2").offset().top - 100  }, {duration: 1000,easing: "swing"});
	return false;
}
var target3='tab2-3'
if(url==target3){
	$('.invest a').removeClass('active')
	$('.travel a').addClass('active')
	$('#tab2').show();
	$('#tab1').hide();
  $("html, body").animate({
	scrollTop: $("#tab2-3").offset().top - 100  }, {duration: 1000,easing: "swing"});
	return false;
}

	if ($(window).width() > 800) {


		// 選單置頂
		$(window).scroll(function () {
			//top
			var gotop = $('.qr-fix');

			$(window).scroll(function () {

				if ($(this).scrollTop() > 200) {
					gotop.fadeIn();

				} else {
					gotop.stop().fadeOut();
				}
			});
			if ($(this).scrollTop() > 480) {

				$('header').addClass('headFixed').addClass('animated slideInDown');
			} else {

				$('header').removeClass('headFixed animated slideInDown');
			}

		});
	}
	if ($(window).width() < 600) {
		$(window).scroll(function () {

			if ($(this).scrollTop() > 300) {
				$('.fixed_btn').addClass('animated slideInUp');

			} else {
				$('.fixed_btn').removeClass('animated slideInUp');
			}
		});
	}
	$('.main-nav ul li a').click(function () {
		$('.target-burger,.main-nav,header .container').removeClass('toggled')
		// $('.navbar-toggle').removeClass('active-toggle')
	})

	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
	AOS.init();

	//注意事項
	$('.notice h2').click(function () {
		$(this).toggleClass('active_notice')
		$('.notice .con').slideToggle();
	})



})