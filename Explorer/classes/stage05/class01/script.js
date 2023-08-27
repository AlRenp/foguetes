let randomNum = Math.round(Math.random() * 10)
let aux = 1

const btnTry = document.querySelector('#inp-sub');
const btnAgain = document.querySelector('#try-again');
const app = document.querySelector('#app')


btnTry.addEventListener('click', tryClick)
btnAgain.addEventListener('click', tryAgainClick)


function tryClick() {
    const inputValue = document.querySelector('#inp-num')
    const screen = document.querySelector('#winner');

    if (Number(inputValue.value) == randomNum) {
        startAnimationTry()
        toggleClass();
        screen.querySelector('h1').innerText = `Acertou em ${aux} tentativas`
    } else {
        errorAnimation()
        inpuFocus(200)
    }
    inputValue.value = ""
    aux++
}



function inpuFocus() {
    const inp = document.querySelector('#inp-num')
    inp.focus()
    inp.value = 1

}

function startAnimationTry() {
    setTimeOut(app, 'animate__flip', 2000, 0)
}

function startAnimationTryAgain() {
    setTimeOut(app, 'animate__wobble', 800, 0)
    setTimeOut(app, 'animate__bounceOutRight', 500, 800)
    setTimeOut(app, 'animate__bounceInLeft', 500, 1300)
}

function errorAnimation() {
    const tryWrapper = document.querySelector('#try-wrapper')

    tryWrapper.classList.add('erro')

    setTimeout(() => {
        tryWrapper.classList.remove('erro')
    }, 200)
}

function tryAgainClick() {
    startAnimationTryAgain()
    setTimeout(() => {
        toggleClass()
    }, 1300);
    aux = 1
    inpuFocus()
}

function toggleClass() {
    document.querySelector('#try').classList.toggle('hide')
    document.querySelector('#winner').classList.toggle('hide')
}

function setTimeOut(element, animationName, timeout, animationDelay) {
    setTimeout(() => {
        app.classList.add(animationName)
        setTimeout(() => {
            element.classList.remove(animationName)
        }, timeout)
    }, animationDelay);
}