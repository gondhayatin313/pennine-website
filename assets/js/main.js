$(document).ready(function () {
   $(".testimonial .indicators li").click(function () {
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
   });
   $(".testimonial .tabs li").click(function () {
      var targetElement = $(".testimonial .tabs li");
      targetElement.addClass('active');
      targetElement.not($(this)).removeClass('active');
   });
});
$(document).ready(function () {
   $(".slider .swiper-pagination span").each(function (i) {
      $(this).text(i + 1).prepend("0");
   });
});

$('.switch').on('click', function (e) {
   $('body').toggleClass("menu-open"); //you can list several class names 
   e.preventDefault();
});


$('#benefits-slider').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 2
      }
   }
})


$('#portfolio-section').owlCarousel({
   loop: true,
   margin: 10,
   dots: false,
   responsiveClass: true,
   responsive: {
      0: {
         items: 1,
         nav: false,
         loop: true
      },
      600: {
         items: 2,
         nav: false,
         loop: true
      },
      1000: {
         items: 3,
         nav: false,
         loop: true
      }
   }
})


$('#timeline-slider').owlCarousel({
   center: false,
   loop: false,
   margin: 10,
   dots: false,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 3
      }
   }
});


var owl = $('#our-culture-slider');
owl.owlCarousel({
   loop: true,
   margin: 10,
   dots: false,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: false,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 3.5
      }
   }
});
$('.play').on('click', function () {
   owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
   owl.trigger('stop.owl.autoplay')
})


AOS.init();