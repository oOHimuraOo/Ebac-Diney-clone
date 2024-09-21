document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

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
})

function hideAllElements() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (var i = 0; i < tabsContainer.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}