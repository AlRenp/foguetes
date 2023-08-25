let randomNum = Math.round(Math.random() * 10)
let aux = 1

const btnTry = document.querySelector('#inp-sub');
const btnAgain = document.querySelector('#try-again');


btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', resetGame)


function handleTryClick() {
    const inputValue = document.querySelector('#inp-num')
    const screen = document.querySelector('#winner');

    if (Number(inputValue.value) == randomNum) {
        toggleClass();
        screen.querySelector('h1').innerText = `Acertou em ${aux} tentativas`
    }
    inputValue.value = ""
    aux++
}

function resetGame() {
    toggleClass();
    aux = 1
    randomNum = Math.round(Math.random() * 10)
}

function toggleClass() {
    document.querySelector('#try').classList.toggle('hide')
    document.querySelector('#winner').classList.toggle('hide')
}