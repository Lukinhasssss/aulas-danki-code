$(function() {
    $('nav a').click(function() {
        let href = $(this).attr('href') // Para pegar o valor do atributo href
        let offSetTop = $(href).offset().top

        $('html, body').animate({ 'scrollTop': offSetTop }) // scrollTop --> Animação que faz com que o scroll desça sozinho

        return false
    })
})