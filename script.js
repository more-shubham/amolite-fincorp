$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    // autoplayHoverPause: true,
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

});
