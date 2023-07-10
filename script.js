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



document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  });
});
