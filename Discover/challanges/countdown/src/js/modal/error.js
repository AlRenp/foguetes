import { card } from "./elements.js"

export const AlertError = {

    open() {
        card.classList.add('animate__shakeX')
        setTimeout(() => {
            card.classList.remove('animate__shakeX')
        }, 500);
    }
}