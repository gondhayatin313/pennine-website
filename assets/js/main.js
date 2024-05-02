$(document).ready(function () {
   $('.navbar-toggler').click(function () {
       if ($(this).attr('aria-expanded') === 'true') {
           $('body').addClass('menu-open');
       } else {
           $('body').removeClass('menu-open');
       }
   });
});
 


const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');
function toggleDark() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");   
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark-mode");  
  }
}
if (localStorage.getItem("theme") === "dark-mode") {
  body.classList.add('dark-mode');
}
document.querySelector('#darkbutton').addEventListener('click', toggleDark);




$(document).ready(function () {        
   $("#testimonial .tabs li").click(function () {
      var targetElement = $("#testimonial .tabs li");
      targetElement.addClass('active');
      targetElement.not($(this)).removeClass('active');
   });



   var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // Scroll down
      $('.pennine-nav').css('top', '-100px'); // Hide header
    } else {
      // Scroll up
      $('.pennine-nav').css('top', '0'); // Show header
    }
    lastScrollTop = st;
  });
  
});


 $(document).ready(function () {
   $('.client-single').on('click', function (event) {
      event.preventDefault();

      var active = $(this).hasClass('active');

      var parent = $(this).parents('.testi-wrap');

      if (!active) {
          var activeBlock = parent.find('.client-single.active');

          var currentPos = $(this).attr('data-position');

          var newPos = activeBlock.attr('data-position');

          activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
          activeBlock.attr('data-position', currentPos);

          $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
          $(this).attr('data-position', newPos);

      }
  });

}(jQuery));






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


$('#why-choose-slider-slider').owlCarousel({
   loop: true,
   margin: 10,
   dots: false,
   nav: false,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2.3
      },
      1000: {
         items: 2.3  
      }
   }
})



var owl = $('#client-logo-content');
owl.owlCarousel({
   items:5,
   loop:true,
   margin:10,
   dots:false,
   nav: false,
   autoplay: true,
   slideTransition: 'linear',
   autoplayTimeout: 2000,
   autoplaySpeed: 10000,
   autoplayHoverPause: false
});





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