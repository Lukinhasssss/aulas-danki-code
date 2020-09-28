$(function() {
    let indiceAtual = 0
    const indiceMaximo = $('.slider img').length // Para saber quantas imagens tenha no meu slider
    let delay = 5000

    initSlider()
    cliqueSlider()

    function initSlider() {
        for (let i = 0; i < indiceMaximo; i++) {
            if (i == 0) {
                $('.bullets-nav').append('<span style="background: #333;"></span>')
            } else {
                $('.bullets-nav').append('<span></span>')
            }
        }

        $('.slider img').eq(0).fadeIn()
        setInterval(function() {
            alternarSlider()
        }, delay)
    }

    function cliqueSlider() {
        $('.bullets-nav span').click(function() {
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000)
            indiceAtual = $(this).index()
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000)
            $('.bullets-nav span').css('background-color', '#AAA')
            $(this).css('background-color', '#333')
        })
    }

    function alternarSlider() {
        // console.log('Alternando slider')
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000)
        indiceAtual += 1
        if (indiceAtual == indiceMaximo) { indiceAtual = 0 }
        $('.bullets-nav span').css('background-color', '#AAA')
        $('.bullets-nav span').eq(indiceAtual).css('background-color', '#333')
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000)
    }
})