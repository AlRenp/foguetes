export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper .title'),
    buttonClose: document.querySelector('#modal-close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },
    innerMessage(value) {
        Modal.message.innerHTML = `Seu IMC é de ${value}`
    },
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(e) {
    if (e.key == 'Escape') Modal.close()
}