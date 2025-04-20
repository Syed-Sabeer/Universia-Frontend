//-----window.load start here

// Animate loader off screen
$(window).on('load', function () {
	"use strict";
    /*$(".se-pre-con").fadeOut("slow");*/
	$('#page-loader').addClass('hidden');
	
//animated svg icons
	var settings = $.extend({
			type: 'oneByOne',
			start: 'inViewport',
			dashGap: 10,
			duration: 80
		}, 'body' );

	$('svg.feather' ).each(function() {
		var iconID = $(this).attr('id');
		if(iconID != undefined){
			var iconVar = iconID.replace( '-', '' );
			window['tc'+iconVar] = new Vivus( iconID, settings );
		}
	});
	//svg mouse hover animation  
	$(document).delegate( "ai-icon", "mouseenter", function() {
		var iconID = $(this).find('svg').attr('id');
		if(!iconID) return false;
		var iconVar = iconID.replace( '-', '' );
		window['tc'+iconVar].reset().play();
	});

});//---window.load end here


//---- document ready start here--
jQuery(document).ready(function($) {
	
	"use strict";
	
// side slide messages and notifications	
	$('.mesg-notif').on('click', function () {
		$('.side-slide').addClass('active');
	});
	$('.popup-closed').on('click', function () {
		$('.side-slide').removeClass('active');
	});	
	
// top menu list	
	$('.send-mesg').on('click', function () {
		$('.popup-wraper').addClass('active');
	});
	$('.popup-closed').on('click', function () {
		$('.popup-wraper').removeClass('active');
	});
	
/*--- responsive top search  ---*/	
	$('.res-search > span').on("click", function() {
	    $(".restop-search").addClass("active");
	  });
	
	$('.hide-search').on("click", function() {
	    $(".restop-search").removeClass("active");
	  });
	
//for open and close button rotation
		$('#nav-icon3').on('click', function(){
			$(this).toggleClass('open');
			
		});
// responsive menu dropdown	
$(".menu-area").click(function () {
	    $(".drop-menu").toggleClass("show");
	});		

//--- bootstrap tooltip and popover	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();
	});
	
// chat box //
	  $(".chat-btn").on("click", function(){
	     $(".chat-box").addClass('active');
		  return false;
	  });

	  $('.clozed').on("click",function(){
		  $(".chat-box").removeClass('active');
		  return false;
	  });
	
// smiles for chat //
	  $(".emojie").on("click", function(){
	     $(".smiles-bunch").toggleClass('active');
		  return false;
	  });	
	
// slide message box singel 
	  $(".friend > a").on("click", function(){
	     $(".chat-card").addClass('show');
		  return false;
	  });

	  $('.close-mesage').on("click",function(){
		  $(".chat-card").removeClass('show');
	  });

// chat attachments
	$('.more-attachments').on('click', function () {
		$('.attach-options').toggleClass('active');
		$(this).toggleClass('active');
	});
		$('.closed').on('click', function () {
		$('.more-attachments, .attach-options').removeClass('active');
	});
	
 // side header slide
	  $(".menu-btn").on("click", function(){
	     $("nav.sidebar").toggleClass('hide');
		  $(".panel-content").toggleClass('expend');
		  return false;
	  });

// New Post Popup	
	$('.create').on('click', function () {
		$('.post-new-popup').addClass('active');
	});
	$('.popup-closed').on('click', function () {
		$('.post-new-popup').removeClass('active');
	});	

// dark mode	
	$('.dark-mod').on('click', function () {
		$('body').toggleClass('nightview');
		return false;
	});	
	
//----- sticky header
    if ($.isFunction($.fn.stickit)) {
        $('.menus, .responsive-header').stickit({scope: StickScope.Document});
    }	

//chosen select plugin
	if ($.isFunction($.fn.chosen)) {
		$("select").chosen();
	}
		
//===== owl carousel  =====//
	if ($.isFunction($.fn.owlCarousel)) {
				
		
	// Featured area fade caro soundnik page
		$('.soundnik-featured').owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 1500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: false,
			dots: true,
			center:false,
			animateOut: 'fadeOut',
            animateIn: 'fadein',
			responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					600:{
						items:1,

					},
					1000:{
						items:1,
					}
				}
		});
		
	
}
	
//------ scrollbar plugin
	if ($.isFunction($.fn.perfectScrollbar)) {
		$('.chatting-area, .message-header, .friend, .chat-list > ul, .menu-slide').perfectScrollbar();
	}	
		
//counter for funfacts
	if ($.isFunction($.fn.counterUp)) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	}
	
// Responsive nav dropdowns
	$('li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});
	
});//document ready end






	





