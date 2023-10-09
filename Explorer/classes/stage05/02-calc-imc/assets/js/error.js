export const AlertError = {
    error: document.querySelector('.screen-error'),

    open() {
        this.error.classList.add('activated')
    },
    close() {
        this.error.classList.remove('activated')
    }
}