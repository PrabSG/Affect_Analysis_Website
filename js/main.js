function main() {

(function () {
   'use strict';

	// This will hide the navbar first (to prevent any issues);
	
	$(".navbar").hide();
	
	// This generates the navbar once you scroll down, using a slight fade;
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
	
	
	// This is the loading screen function that creates a delay, to simulate a loading screen;
	// First fade out the animation, and then the screen;
	
	$(window).load(function() {
    	$("#loadingstatus").fadeOut("slow"); 
    	$("#loadingscreen").delay(800).fadeOut("slow").remove();      
  	}); 
	
	// Scrolling JS for the navbar, to ensure smooth return;
	
	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
    });

    // This shows the menu;
	
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});
	
  // jQuery Parallax;
  
  function initParallax() {
    $('#intro').parallax("100%", 0.3);
    $('#services').parallax("100%", 0.3);
    $('#aboutimg').parallax("100%", 0.3);	
    $('#testimonials').parallax("100%", 0.1);

  }
  initParallax();

}());

}
main();