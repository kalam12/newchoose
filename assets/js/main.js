$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".single-slider").owlCarousel({
		loop:true,
		nav:false,
		dots:false,
		items:1,
	
	});
	
	// service slider
	$(".service-slider-active").owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		margin:30,
		items:2,
	
	});
	
	$(".testimonal-active").owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		items:1,
	
	});
	
	$(".brand-active").owlCarousel({
		loop:true,
		nav:false,
		dots:false,
		margin:30,
		items:3,
	
	});
	
$(".pricting-active").owlCarousel({
		loop:true,
		dots:false,
		margin:20,
		items:2,
	    nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
	
	});
	

var $grid = $('.massonary-style').isotope({
	  // options...
	  itemSelector: '.grid-style',
	  masonry: {
		columnWidth:1
	  }
});
	
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
	
	
	
	
$('.progressbar1').LineProgressbar({
			percentage: 60,
			fillBackgroundColor: '#1abc9c',
	        backgroundColor:'#e6e6e6',
			radius:'10px',
});
	$('.progressbar2').LineProgressbar({
			percentage: 50,
			fillBackgroundColor: '#1abc9c',
	        backgroundColor:'#e6e6e6',
			radius:'10px',
});
	$('.progressbar3').LineProgressbar({
			percentage: 30,
			fillBackgroundColor: '#1abc9c',
	        backgroundColor:'#e6e6e6',
			radius:'10px',
});
	
	
	
	$('.video-pupup').magnificPopup({
		type:'iframe',
	});
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

	
	//$('.food').hover(function(){
		//$(this).children('.food-text').css('top','0').fadeToggle(500);
	// });
	
	
	
	
	
	
	
	
	
}(jQuery));