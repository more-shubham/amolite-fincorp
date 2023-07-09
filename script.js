// $(document).ready(function () {
//     $(".regular").slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         adaptiveHeight: true,
//         infinite: false,
//         slidesToScroll: 1,
//         zIndex: 0,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 dots: true,
//                 infinite: true,
//                 slidesToShow: 1,
//                 adaptiveHeight: true,
//                 infinite: false,
//                 zIndex: 0,
//                 slidesToScroll: 1,
//               }
//             }
//           ]

//     });
// })

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });


  $('body').scrollspy({ target: '#navbar' });


  // $('#navbar').on('activate.bs.scrollspy', function () {
  //   var activeSection = $('#navbar .nav-item').attr('href');
  //   $('#navbar .nav-item').removeClass('custom-active');
  //   $(activeSection).addClass('custom-active');
  // });

});
