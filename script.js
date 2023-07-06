$(document).ready(function () {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        infinite: false,
        slidesToScroll: 1,
        zIndex: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                infinite: false,
                zIndex: 0,
                slidesToScroll: 1,
              }
            }
          ]
        
    });
})