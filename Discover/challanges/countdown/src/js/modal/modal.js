export const modal = {
    open() {
        document.documentElement.classList.add('modal')
    },
    close() {
        document.documentElement.classList.remove('modal')
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        modal.close()
        return
    }
})