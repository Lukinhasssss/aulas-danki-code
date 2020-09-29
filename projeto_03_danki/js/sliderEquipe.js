$(function () {
    let delay = 3000
    let currentIndex = 0
    let amount

    initSlider()
    autoPlay()

    function initSlider() {
        amount = $('.sobre-autor').length
        let sizeContainer = 100 * amount
        let sizeBoxSingle = 100 / amount

        $('.sobre-autor').css('width', `${sizeBoxSingle}%`)
        $('.scroll-wraper').css('width', `${sizeContainer}%`)

        for (let i = 0; i < amount; i++) {
            if (i == 0) {
                $('.slider-bullets').append('<span style="background-color: #333;"></span>')
            } else {
                $('.slider-bullets').append('<span></span>')
            }
        }
    }

    function autoPlay() {
        setInterval(function() {
            currentIndex++

            if (currentIndex == amount) {  currentIndex = 0 }
            goToSlider(currentIndex)

        }, delay)
    }

    function goToSlider(currentIndex) {
        let offSetX = $('.sobre-autor').eq(currentIndex).offset().left - $('.scroll-wraper').offset().left

        $('.slider-bullets span').css('background-color', 'rgb(200, 200, 200)')
        $('.slider-bullets span').eq(currentIndex).css('background-color', '#333')
        $('.scrollEquipe').stop().animate({ scrollLeft: offSetX })
    }

    $(window).resize(function() {
        $('.scrollEquipe').stop().animate({ scrollLeft: 0 })
    })
})