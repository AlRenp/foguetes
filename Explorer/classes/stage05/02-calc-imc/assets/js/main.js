import { Modal } from "./modal.js";
import { AlertError } from "./error.js";
import { calcIMC, isANumber } from "./utils.js";

const form = document.querySelector('form')
const weight = document.querySelector('#inp-weight')
const height = document.querySelector('#inp-height')

form.onsubmit = (e) => {
    e.preventDefault()

    const imc = calcIMC(weight.value, height.value)

    const weightOrHeightIsNotANumber = isANumber(weight.value) || isANumber(height.value)

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    Modal.open();
    Modal.innerMessage(imc)
    cleanInputs()

}

function cleanInputs() {
    weight.value = ""
    height.value = ""
}

weight.oninput = () => AlertError.close()
height.oninput = () => AlertError.close()



