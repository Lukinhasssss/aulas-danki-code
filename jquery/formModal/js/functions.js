$(function() {
    // let frase = 'Hello World'
    // let frase = 'email@hotmail.com'

    // let verifica = frase.match(/Hello/)
    // let verifica = frase.match(/[A-Za-z0-9]{5}/) // Entre colchetes eu coloco o número de caracteres que eu quero que encontre
    // let verifica = frase.match(/[A-Za-z]{1,2}/) // Pega de 1 a 2 caracteres
    // let verifica = frase.match(/(.*?)@(.*?)/)
    // let verifica = frase.match(/^(.*?)@(.*?)$/)

    // if (verifica != null) {
    //     console.log('Encontramos algo!')
    //     console.log(verifica)
    // } else {
    //     console.log('Não encontramos nada!')
    // }



    // Funções para abrir e fechar o formulário
    abrirJanelaModal()
    fecharJanelaModal()

    function abrirJanelaModal() {
        $('.btn').click(e => {
            e.stopPropagation()
            $('.modal').fadeIn()
        })
    }

    function fecharJanelaModal() {
        let el = $('body, .closeBtn')

        el.click(() => {
            $('.modal').fadeOut()
        })

        $('.form').click(e => {
            e.stopPropagation()
        })
    }

    // Eventos do formulário
    $('input[type=text]').focus(function() {
        resetarCampoInvalido($(this))
    })

    $('form#form1').submit(e => {
        // e.preventDefault()
        let nome = $('input[name=nome]').val() // val() serve para pegar o valor
        let email = $('input[name=email]').val()
        let telefone = $('input[name=telefone]').val()
        // console.log(`${nome}, ${email}, ${telefone}`)

        if (verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome'))
            return false
        } else if (verificarEmail(email) == false) {
            aplicarCampoInvalido($('input[name=email]'))
            return false
        } else if (varificarTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[name=telefone]'))
            return false
        } else {
            alert('Formulário enviado com sucesso!')
        }

        // Se chegou até o final é pq está tudo OK
    })


    // Funções para estilizar os campos do formulário
    function aplicarCampoInvalido(el) {
        el.css('color', 'red')
        el.css('border', '2px solid red')
        el.val('Campo inválido!')
        // el.data('invalido', 'true')
    }

    function resetarCampoInvalido(el) {
        el.css('color', '#CCC')
        el.css('border', '1px solid #CCC')
        el.val('')
    }

    // Funções para verificar/validar os campos do formulário
    function verificarNome(nome) {
        if (nome == '') {
            return false
        }

        let amount = nome.split(' ').length
        let splitStr = nome.split(' ')
        if (amount >= 2) {
            // console.log('O nome tem pelo menos 1 espaço')
            for (let i = 0; i < amount; i++) {
                if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) { // ^[A-Z]{1}: 1ª letra de A-Z; [a-z]{1,}: o resto vai de a-z de 1 até infinitos caracteres. Obs: $ serve para "finalizar" caso não ache mais caracteres

                } else {
                    // aplicarCampoInvalido($('input[type=nome]'))
                    return false
                }
            }
        } else {
            // console.log('Não bate com a condição NOME COMPLETO')
            // aplicarCampoInvalido($('input[type=nome]'))
            return false
        }
    }

    function verificarEmail(email) {
        if (email == '') {
            return false
        }

        if (!email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/)) {
            return false
        }
    }

    function verificarTelefone(telefone) {
        if (telefone == '') {
            return false
        }

        if (!telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/)) { // \([0-9]{2}\): 2 caracteres de 0-9, \( abre paranteses e \) fecha, ^ indica que quero começar do início;
            return false
        }
    }
})