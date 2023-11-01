import * as input from './elements.js'
import { AlertError } from './error.js';
import { modal } from './modal.js';

export function scanInputs() {

    if (inputsIsEmpty()) {
        alertError()
        return
    }


    if (!inputsIsNotANumber()) {
        alertError()
        return
    }

    modal.close()
    input.name.value = ""
    input.email.value = ""
}

function alertError() {
    AlertError.open()
    input.name.focus()
}

function inputsIsEmpty() {
    return input.name.value && input.email.value != "" ? false : true
}

function inputsIsNotANumber() {
    return isNaN(input.name.value) || isNaN(input.email.value)
}