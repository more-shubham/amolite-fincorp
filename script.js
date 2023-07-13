$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    onInitialized: adjustItemHeight,
    onResized: adjustItemHeight,
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

function adjustItemHeight() {
  $('.owl-item').height('auto'); // Reset the height to auto before recalculating

  var maxHeight = 0;

  $('.owl-item').each(function () {
    var itemHeight = $(this).height();
    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });

  $('.owl-item').height(maxHeight + 'px'); // Set the maximum height to all items
}

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  });
});
