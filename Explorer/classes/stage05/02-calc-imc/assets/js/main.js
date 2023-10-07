/*  
    [x] Pegar elementos 'INPUTS', 'BUTTON IMC', 'BUTTON CLOSE POPUP'
    [x] Pegar  valor dos inputs
    [x] Adicionar click no Button IMC
    [ ] Adicionar click no button CLOSE POPUP
    
    [ ] Validar dado do input (string = false, intero = true)
    [ ] Verifcar tipo de dado do input
    [ ] Aparecer com aviso de dados incorretos (Digite somente números)
    [ ] Calcular IMC

    Cliclar em calcular IMC
    Pegar valor dos inputs
    Verificar dados dos inputs
    Validar dados
    Aparecer com aviso de dados incorretos a depeder da validação
*/

const error = document.querySelector('.screen-error')
const modal = document.querySelector('.modal-wrapper')
const imcResult = document.querySelector('.modal-wrapper .title')

const input_height = document.querySelector('#inp-height')
const input_weight = document.querySelector('#inp-weight')

const button_calc_IMC = document.querySelector('#calcIMC')
const button_modal_close = document.querySelector('#modal-close')
const close_modal = modal.querySelector('#modal-close')


input_height.addEventListener('input', maskInputHeight)
input_weight.addEventListener('input', maskInputWeight)

function maskInputHeight() {
    let clearInput = input_height.value.replace(/\D/g, "").substring(0, 3)

    input_height.value = clearInput

    checkIfInputIsEmpty(input_height)

    let heigthArray = clearInput.split("")
    let heigthFormat = ""

    if (heigthArray.length > 0) {
        heigthFormat += `${heigthArray.slice(0, 1).join("")}`
    }

    if (heigthArray.length > 1) {
        heigthFormat += `.${heigthArray.slice(1, 3).join("")}`
    }

    input_height.value = heigthFormat
}

function maskInputWeight() {
    let clearInput = input_weight.value.replace(/\D/g, "").substring(0, 3)

    input_weight.value = clearInput

    console.log(input_weight);

    checkIfInputIsEmpty(input_weight)

}

function checkIfInputIsEmpty(imputElement) {
    if (imputElement.value != '') {
        error.classList.remove('activated')
    }
}

button_calc_IMC.addEventListener('click', () => {
    const imc_result = input_weight.value / (input_height.value * input_height.value)

    console.log(input_weight.value);
    if (input_height.value == '' || input_weight.value == '') {
        error.classList.add('activated')
    } else {
        modal.classList.add('open')
    }

    imcResult.innerHTML = `Seu IMC é de ${imc_result.toFixed(1)}`
})


button_modal_close.addEventListener('click', () => {
    modal.classList.remove('open')
    input_height.value = ""
    input_weight.value = ""
})


