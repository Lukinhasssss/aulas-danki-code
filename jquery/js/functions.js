/*** AULA 01 - Iniciando com JQuery e Eventos de Carregamento ***/

// $(function() {
//     alert('Olá mundo!')
// }) // Essa função só executa quando a página terminar de carregar

// $(document).ready(function() {
//     alert('Olá mundo!')
// })

// $(window).on('load', function() {
//     alert('Olá mundo!')
// }) // Executa quando a página terminar de carregar por completo todos os assets...



/*** AULA 02 - Manipulando CSS via JQuery ***/

// $(function() {
//     // $('.artigo1').css('background-color', '#225599')
//     setTimeout(() => {
//         $('#teste.artigo1').css('background-color', '#553399')
//     }, 2000)

//     setTimeout(() => {
//         $('#teste.artigo1 > p').css('color', '#FFF')
//     }, 2000)

//     console.log($('#teste.artigo1 > p').css('color')) // Se tiver só um parâmetro pega o valor
// })



/*** AULA 03 - Introduzindo os Eventos ***/

// $(function () {
//     $('.artigo1').click(function() {
//         $('.artigo2').css('background-color', '#268682')
//     })

//     $('.artigo1').hover(function() {
//         $('.artigo1').css('background-color', '#000045')
//         $('.artigo1').css('color', '#FFF')
//     }, function() {
//         $('.artigo1').css('background-color', '#CCC')
//         $('.artigo1').css('color', '#000')
//     })

//     $('textarea').focus(() => {
//         console.log('Você clicou no textarea')
//     }).blur(() => {
//         console.log('Você saiu do textarea')
//     })

//     function validarFormmulario() {
//         $('select').change(function() {
//             console.log('O select foi alterado')
//         })
//     }
//     validarFormmulario()
// })



/*** AULA 04 - Mais sobre Eventos ***/

// $(function() {
//     $(window).scroll(() => {
//         // Evento de quando o scroll ocorre.
//     })

//     $(window).resize(() => {
//         console.log('A janela está sendo redimensionada')
//     })

//     $('a').click(e => {
//         e.preventDefault()
//         window.location.href = 'https://github.com/Lukinhasssss'
//     })


//     $('.box').click(e => {
//         e.stopPropagation()
//     })

//     $('body').click(() => {
//         $('.box').css('background-color', '#357951')
//     })
// })



/*** AULA 05 - Variáveis com JQuery ***/

// $(function() {
//     const el = $('div.box')

//     el.css('background-color', '#354961')
// })



/*** AULA 06 - Manipulando Dimensões Dinâmicamente ***/

// $(function() {
//     // console.log($('.box').width())

//     // $('.box').width('')
//     // $('.box').css('width', '900px')
//     // console.log($('.box').width())

//     console.log($('.box').innerWidth())
// })



/*** AULA 07 - Manipulando Textos Dinâmicamente ***/

// $(function() {
//     const el = $('.box')

//     el.html('<div class="teste">Hello World!</div>') // A função html adiciona elementos html na página
//     el.html(el.html() + '<h1 class="texto1">Meu texto</h1>')

//     $('.box2').text('<div></div>') // Pega o texto sem as tags do html
//     $('.box2').text($('.box2').text() + 'Hello World box2')

//     console.log(el.text())
// })



/*** AULA 08 - Manipulando a Posição na DOM ***/

// $(function() {
//     $('.box').append('<h3>Elemento adicionado posteriormente</h3>') // append adiciona elementos no html

//     $('.box').eq(1).append('<h3>Elemento adicionado posteriormente</h3>') // eq() serve para selecionar um elemento numa posição específica

//     $('.box > div').append('<h3>Elemento adicionado posteriormente</h3>')
// })



/*** AULA 09 - Eventos Dinâmicos e Mais Conceitos ***/

// $(function() {
    // $('a').click(e => {
    //     e.preventDefault()
    //     alert('Olá Mundo!')
    // })

    // $('body').on('click', 'a', (e) => {
    //     e.preventDefault()
    //     alert('Olá Mundo!')
    // })

    // setTimeout(() => {
    //     $('body').html('<a href="">Meu Link!</a>')
    // }, 3000);

//     let teclaPressionada = function() {
//         $(this).css('background-color', '#256497') // this faz referência ao elemento que está tendo seu evento disparado
//         console.log($(this).index())
//     }

//     $('input[type=text]').keyup(teclaPressionada)
// })



/*** AULA 10 - Formulário Com JQuery ***/

// $(function() {
//     $('.form_contato').submit((e) => {
//         e.preventDefault()

//         let container = $('.container')
//         let content = 'Nome: ' + $('input[name=nome').val() + '<hr>Email: ' + $('input[name=email').val() + '<hr>Telefone: ' + $('input[name=telefone]').val()

//         container.html(content)
//     })
// })



/*** AULA 11 - Eventos e Animações ***/

// $(function() {
    // $('.box1').fadeOut(2000, () => {
    //     $('.box2').fadeIn(2000)
    // })

    // $('.box1').fadeToggle(4000, () => {
    //     $('.box2').fadeToggle(4000)
    // })

//     $('.box1').click(() => {
//         $('.box2').slideToggle();
//     })
// })



/*** AULA 12 - Animate, Interval e Timeout ***/

// $(function() {
    // let timer

    // const timeOut = () => {
    //     $('.box2').animate({
    //         'width': '40%',
    //         'height': '500px',
    //         'marginLeft': '30%',
    //         'marginRight': '10%',
    //         'paddingTop': '10%',
    //         'paddingBottom': '10%'
    //     }, 2000)
    // }

    // $('body').click(() => {
    //     alert('Animação com timeout foi cancelada!')
    //     clearTimeout(timer)
    // })

    // $('.box1').animate({
    //     'width': '40%',
    //     'height': '500px',
    //     'marginLeft': '30%',
    //     'marginRight': '10%',
    //     'paddingTop': '10%',
    //     'paddingBottom': '10%'
    // }, 2000, () => {
    //     // console.log('Fim da Animação!')
    //     timer = setTimeout(timeOut, 3000)
    // })

//     $('body').click(() => {
//         clearInterval(time)
//         console.log('Intervalo cancelado')
//     })

//     timer=setInterval(() => { // setTimeout executa de função de tempos em tempos
//         alert('Olá Mundo!')
//     }, 3000)
// })



/*** AULA 13 - Manipulando Classes ***/

$(function() {
    $('.box1').addClass('minhaclasse')

    // $('.minhaclasse').remove()
    $('.box1').removeClass('minhaclasse')
})



/*** AULA 15 - AJAX ***/

// $(function() {
//     $.ajax({
//         'url': 'conteudo.html', // url --> é onde eu estou fazendo a requisição
//         // 'method': 'post',
//         // data: { 'nome': 'Lucas', 'idade': '23' }
//     }).done(function(data) {
//         // console.log(data)
//         $('#container').append(data)
//     })
// })



/*** AULA 16 - Criando Janela Modal e Formulário ***/

// $(function() {
//     abrirJanelaModal()
//     fecharJanelaModal()

//     function abrirJanelaModal() {
//         $('.btn').click(e => {
//             e.stopPropagation()
//             $('.modal').fadeIn()
//         })
//     }

//     function fecharJanelaModal() {
//         let el = $('body, .closeBtn')

//         el.click(function() {
//             $('.modal').fadeOut()
//         })

//         $('.form').click(e => {
//             e.stopPropagation()
//         })
//     }
// })



/*** AULAS 17 e 18 - Expressões Regulares ***/

// $(function() {
//     // let frase = 'Hello World'
//     // let frase = 'email@hotmail.com'

//     // let verifica = frase.match(/Hello/)
//     // let verifica = frase.match(/[A-Za-z0-9]{5}/) // Entre colchetes eu coloco o número de caracteres que eu quero que encontre
//     // let verifica = frase.match(/[A-Za-z]{1,2}/) // Pega de 1 a 2 caracteres
//     // let verifica = frase.match(/(.*?)@(.*?)/)
//     // let verifica = frase.match(/^(.*?)@(.*?)$/)

//     // if (verifica != null) {
//     //     console.log('Encontramos algo!')
//     //     console.log(verifica)
//     // } else {
//     //     console.log('Não encontramos nada!')
//     // }



//     // Funções para abrir e fechar o formulário
//     abrirJanelaModal()
//     fecharJanelaModal()

//     function abrirJanelaModal() {
//         $('.btn').click(e => {
//             e.stopPropagation()
//             $('.modal').fadeIn()
//         })
//     }

//     function fecharJanelaModal() {
//         let el = $('body, .closeBtn')

//         el.click(() => {
//             $('.modal').fadeOut()
//         })

//         $('.form').click(e => {
//             e.stopPropagation()
//         })
//     }

//     // Eventos do formulário
//     $('input[type=text]').focus(function() {
//         resetarCampoInvalido($(this))
//     })

//     $('form#form1').submit(e => {
//         // e.preventDefault()
//         let nome = $('input[name=nome]').val() // val() serve para pegar o valor
//         let email = $('input[name=email]').val()
//         let telefone = $('input[name=telefone]').val()
//         // console.log(`${nome}, ${email}, ${telefone}`)

//         if (verificarNome(nome) == false) {
//             aplicarCampoInvalido($('input[name=nome'))
//             return false
//         } else if (verificarEmail(email) == false) {
//             aplicarCampoInvalido($('input[name=email]'))
//             return false
//         } else if (varificarTelefone(telefone) == false) {
//             aplicarCampoInvalido($('input[name=telefone]'))
//             return false
//         } else {
//             alert('Formulário enviado com sucesso!')
//         }

//         // Se chegou até o final é pq está tudo OK
//     })


//     // Funções para estilizar os campos do formulário
//     function aplicarCampoInvalido(el) {
//         el.css('color', 'red')
//         el.css('border', '2px solid red')
//         el.val('Campo inválido!')
//         // el.data('invalido', 'true')
//     }

//     function resetarCampoInvalido(el) {
//         el.css('color', '#CCC')
//         el.css('border', '1px solid #CCC')
//         el.val('')
//     }

//     // Funções para verificar/validar os campos do formulário
//     function verificarNome(nome) {
//         if (nome == '') {
//             return false
//         }

//         let amount = nome.split(' ').length
//         let splitStr = nome.split(' ')
//         if (amount >= 2) {
//             // console.log('O nome tem pelo menos 1 espaço')
//             for (let i = 0; i < amount; i++) {
//                 if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) { // ^[A-Z]{1}: 1ª letra de A-Z; [a-z]{1,}: o resto vai de a-z de 1 até infinitos caracteres. Obs: $ serve para "finalizar" caso não ache mais caracteres

//                 } else {
//                     // aplicarCampoInvalido($('input[type=nome]'))
//                     return false
//                 }
//             }
//         } else {
//             // console.log('Não bate com a condição NOME COMPLETO')
//             // aplicarCampoInvalido($('input[type=nome]'))
//             return false
//         }
//     }

//     function verificarEmail(email) {
//         if (email == '') {
//             return false
//         }

//         if (!email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/)) {
//             return false
//         }
//     }

//     function verificarTelefone(telefone) {
//         if (telefone == '') {
//             return false
//         }

//         if (!telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/)) { // \([0-9]{2}\): 2 caracteres de 0-9, \( abre paranteses e \) fecha, ^ indica que quero começar do início;
//             return false
//         }
//     }
// })



/*** AULA 19 - Navegação Sem Atualizar ***/

$(function() {
    verificarCliqueMenu()

    function verificarCliqueMenu() {
        $('a').click(function(e) {
            e.preventDefault()

            let href = $(this).attr('href')

            $.ajax({
                'beforeSend': function() {
                    console.log('Estamos chamando o beforeSend')
                },
                'timeout': 10000,
                'url': href,
                'error': function(jqXHR, statusText, errorThrown) {
                    // console.log('Ocorreu um erro!')
                    // console.log(jqXHR)
                    if (jqXHR.statusText == 'Not Found') {
                        console.log('Página não encontrada!')
                    }
                },
                'success': function(data) {
                    // console.log(data)
                    // $('#container').html(data) // ou $('#container').append(data)
                    $(data).appendTo('#container').fadeIn()
                }
            })
        })
    }
})