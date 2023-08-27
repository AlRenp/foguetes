// let randomNum = Math.round(Math.random() * 10)
let randomNum = 1
let aux = 1

const btnTry = document.querySelector('#inp-sub');
const btnAgain = document.querySelector('#try-again');
const app = document.querySelector('#app')


btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', resetGame)


function handleTryClick() {
    const inputValue = document.querySelector('#inp-num')
    const screen = document.querySelector('#winner');

    if (Number(inputValue.value) == randomNum) {
        winnerAnimation()
        toggleClass();
        screen.querySelector('h1').innerText = `Acertou em ${aux} tentativas`
    } else {
        errorAnimation()
        inpuFocus(200)
    }
    inputValue.value = ""
    aux++
}

function inpuFocus(value) {
    const inp = document.querySelector('#inp-num')

    setTimeout(() => {
        inp.focus()
    }, value)
}

function winnerAnimation() {

    app.classList.add('animate__flip')
    setTimeout(() => {
        app.classList.remove('animate__flip')
    }, 800)
}

function errorAnimation() {
    const tryWrapper = document.querySelector('#try-wrapper')

    tryWrapper.classList.add('erro')

    setTimeout(() => {
        tryWrapper.classList.remove('erro')
    }, 200)
}

function resetGame() {
    toggleClass()
    aux = 1
    inpuFocus(1)
    exitApp()
    // randomNum = Math.round(Math.random() * 10)
}

function toggleClass() {
    document.querySelector('#try').classList.toggle('hide')
    document.querySelector('#winner').classList.toggle('hide')
}