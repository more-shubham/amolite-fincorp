$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})