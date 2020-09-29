$(function() {
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 3,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    })

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow:1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    })
})