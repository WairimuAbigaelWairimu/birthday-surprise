const showPopupButton = document.getElementById('showPopup')
const popupContainer = document.getElementById('popupContainer')
const closePopupButton = document.getElementById('closePop-up')

showPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex'
})

closePopupButton.addEventListener ('click', () => {
    popupContainer.style.display = 'none'
})