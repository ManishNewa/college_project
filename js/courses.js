jQuery(function($) {

	//#main-slider
	var slideHeight = $(window).height();
	// This is for the other pages an id named "other-nav" should be kept below header in the div part
	$(window).on('scroll', function(){
		if( $(window).scrollTop() > (slideHeight/5) ){
			$('.other-nav').addClass('other-navbar-fixed');
		} else {
			$('.other-nav').removeClass('other-navbar-fixed');
		}
	});


});