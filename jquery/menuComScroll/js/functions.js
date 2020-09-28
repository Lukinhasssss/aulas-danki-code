$(function() {
    $(window).scroll(function() {
        let windowOffY = $(window).scrollTop()
        let windowHeight = $(window).height()

        $('.sessao').each(function() {
            let elOffY = $(this).offset().top

            if (elOffY + 30 < (windowOffY + windowHeight) && elOffY + 30 + $(this).height() > windowOffY) {
                // console.log(`Estamos na sessão ${$(this).attr('target')}`)
                $('a').css('border-bottom', '0')
                let target = $(this).attr('target')
                $(`.${target}`).css('border-bottom', '2px solid #333')
                return
            }
        })
    })
})