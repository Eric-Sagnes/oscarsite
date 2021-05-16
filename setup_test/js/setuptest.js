$(document).ready(function() {

  $(".button").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 300);
            $(".button").addClass("red");
        }

        else {
            $(".menu").hide("slide", 300);
            $(".button").removeClass("red");
        };

	});

  $(".thumbnail").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 300);
            $(".button").addClass("red");
        }

        else {
            $(".menu").hide("slide", 300);
            $(".button").removeClass("red");
        };

	});

  $('.slideshow-image').slick({
		autoplay: true, // self-explanatory
		autoplaySpeed: 3000, // ditto
		infinite: true, // allows for slideshow to loop to the beginning after the last slide
		dots: false, // enables dots on bottom center for navigation
		arrows: false, // disables side arrow navigations
    fade: true,
    // asNavFor: '.slideshow'

	});

  $('.slideshow').slick({
		autoplay: false, // self-explanatory
		autoplaySpeed: 3000, // ditto
		infinite: true, // allows for slideshow to loop to the beginning after the last slide
		dots: true, // enables dots on bottom center for navigation
		arrows: true, // disables side arrow navigations
    // asNavFor: '.slideshow-image'
	});




  const init = function(){
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++){
      items[i].style.background = randomColor({luminosity: 'light'});
    }
    cssScrollSnapPolyfill()
  }
  init();

});
