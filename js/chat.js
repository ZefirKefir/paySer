// chat button
const chatButton = document.querySelector('.chat-button')
const chatBlock = document.querySelector('.chat-block')

chatButton.addEventListener('click', () => {
    chatBlock.classList.toggle('chat-block_active')
})
