function addClassSelected() {
    $(this).parent().addClass('selected')
}

function removeClassSelected() {
    $(this).parent().removeClass('selected')
}

$('nav.desktop a').hover(addClassSelected, removeClassSelected)

// $('nav a').hover(function() {
//     $(this).parent().addClass('selected')
// }, function() {
//     $('nav li').removeClass('selected')
// })

// $('nav a').mouseenter(function() {
//     $(this).parent().addClass('selected')
// })
// $('nav a').mouseleave(function() {
//     $('nav li').removeClass('selected')
// })
/* LOGO ACIMA ESTÃO 3 FORMA DE SE FAZER A MESMA COISA */

$(function() {
    $('nav.mobile h3').click(() => {
        $('nav.mobile ul').slideToggle()
    })
})

$('nav a').click(function() {
    let href = $(this).attr('href') // Para pegar o valor do href
    // let offSetTop = $(href).offset().top

    $('html, body').animate({ scrollTop: $(href).offset().top })

    $('nav.mobile ul').hide(500)

    return false
})