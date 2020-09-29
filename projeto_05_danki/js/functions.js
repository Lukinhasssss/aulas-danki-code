$(function() {
    /* Sistema de pesquisa da página veiculo-teste */

    let currentValue = 0
    let isDraggable = false
    let current_price = 0
    let max_price = 70000

    $('.pointer-barra').mousedown(() => {
        // console.log('Pressionado')
        isDraggable = true
    })

    $(document).mouseup(() => {
        isDraggable = false
        enableTextSelection()
    })

    $('.barra-preco').mousemove(function(e) {
        if (isDraggable) {
            // console.log('O mouse está sendo arrastado')
            disableTextSelection()

            let elementoBase = $(this)
            let mouseX = e.pageX - elementoBase.offset().left // Pega a posição do mouse no eixo X
            // console.log(mouseX)

            if (mouseX < 0) { elementoBase = 0 }
            if (mouseX > elementoBase.width()) { mouseX = elementoBase.width }

            currentValue = (mouseX / elementoBase.width()) * 100

            $('.pointer-barra').css('left', `${mouseX - 13}px`)
            $('.barra-preco-fill').css('width', `${currentValue}%`)

            current_price = (currentValue / 100) * max_price
            current_price = formatPrice(current_price)
            $('.preco_pesquisa').html(`R$${current_price}`) // html reescreve o valor padrão do html
        }
    })

    function formatPrice(current_price) {
        current_price = current_price.toFixed(2)
        arr_price = current_price.split('.')

        let new_price = formatTotal(arr_price)

        return new_price
    }

    function formatTotal(arr_price) {
        if (arr_price[0] < 1000) {
            return arr_price[0]+','+arr_price[1]
        } else if (arr_price[0] < 10000) {
            return arr_price[0][0]+'.'+arr_price[0].substr(1, arr_price[0].length)+','+arr_price[1]
        } else {
            return arr_price[0][0]+arr_price[0][1]+'.'+arr_price[0].substr(2, arr_price[0].length)+','+arr_price[1]
        }
    }

    let body = $('body')
    function disableTextSelection() {
        body.css('-webkit-user-select', 'none')
        body.css('-moz-user-select', 'none')
        body.css('-ms-user-select', 'none')
        body.css('-o-user-select', 'none')
        body.css('user-select', 'none')
    }

    function enableTextSelection() {
        body.css('-webkit-user-select', 'auto')
        body.css('-moz-user-select', 'auto')
        body.css('-ms-user-select', 'auto')
        body.css('-o-user-select', 'auto')
        body.css('user-select', 'auto')
    }


    /*** Slider da página veiculo-teste ***/
    // style="background-color: rgb(210, 210, 210);"


    let imgShow = 3
    let currentIndex = 0
    let maxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1

    initSlider()
    navigateSlider()
    clickSlider()

    function initSlider() {
        let amount = $('.mini-img-wraper').length * 33.3
        let elScroll = $('.nav-galeria-wraper')
        let elSingle = $('.mini-img-wraper')

        elScroll.css('width', `${amount}%`)
        elSingle.css('width', `${33.3 * (100 / amount)}%`)
    }

    function navigateSlider() {
        $('.arrow-right-nav').click(() => {
            if (currentIndex < maxIndex) {
                currentIndex++
                let elOff = $('.mini-img-wraper').eq(currentIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({ 'scrollLeft': `${elOff}px` })
            } else {
                // console.log('Fim do Slider')
            }
        })

        $('.arrow-left-nav').click(() => {
            if (currentIndex > 0) {
                currentIndex--
                let elOff = $('.mini-img-wraper').eq(currentIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({ 'scrollLeft': `${elOff}px` })
            } else {
                // console.log('Fim do Slider')
            }
        })
    }

    function clickSlider() {
        $('.mini-img-wraper').click(function() {
            $('.mini-img-wraper').css('background-color', 'transparent')
            $(this).css('background-color', '#333')

            let img = $(this).children().css('background-image') // Pega o valor do background-image
            $('.foto-destaque').css('background-image', img)
        })

        $('.mini-img-wraper').eq(0).click()
    }

    $('[goTo=contato]').click(function(e) {
        e.preventDefault()

        $('nav a').css('color', '#000')
        $(this).css('color', '#EB2D2D')

        $('html, body').animate({ scrollTop: $('#contato').offset().top })
    })
})