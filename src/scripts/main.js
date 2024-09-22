document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight
    esconderBotoesHeader(true)

    //seção header lida com o funcionamento visual do header
    window.addEventListener('scroll',function() {
        const posicaoAtual = window.scrollY
        if (posicaoAtual < alturaHero) {
            esconderBotoesHeader(true)
        } else {
            esconderBotoesHeader(false)
        }
    })
    //seção de atrações programação dos menus e itens visiveis.
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTabName = button.target.dataset.tabButton
            const targetTab = document.querySelector(`[data-tab-button=${targetTabName}]`)
            const targetContainer = document.querySelector(`[data-tab-id=${targetTabName}]`)

            if (!targetTab.classList.contains('shows__tabs__button--is-active')){
                hideAllElements()
    
                targetTab.classList.add('shows__tabs__button--is-active')
                targetContainer.classList.add('shows__list--is-active')
            }

        })
    }

    //seção faq visibilidade de perguntas e respostas.
    for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function hideAllElements() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (var i = 0; i < tabsContainer.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function esconderBotoesHeader(esconde) {
    const header = document.querySelector('.header')

    if (esconde) {
        header.classList.add('header--is-hidden')
    } 
    else {
        if (header.classList.contains('header--is-hidden')) {
            header.classList.remove('header--is-hidden')
        }
    }
}