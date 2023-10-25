import { elMinutes, elSeconds } from "./elements.js";
import { pause } from "./actions.js";
import state from "./state.js";

export function countDown() {

    clearTimeout(state.countDonwId)

    if (!state.isRunning) return

    let minute = Number(elMinutes.textContent)
    let second = Number(elSeconds.textContent)

    second--

    if (second < 0) {
        second = 59;
        minute--
    }

    if (minute < 0) {
        return
    }

    updateDisplay(minute, second)

    state.countDonwId = setTimeout(() => countDown(), 1000);
}

export function increment() {

    if (state.isRunning) checkIsRunning()

    let minute = Number(elMinutes.textContent) + 5
    if (elMinutes.textContent >= 60) return
    state.minute = minute
    updateDisplay()

}

export function decrement() {

    if (state.isRunning) checkIsRunning()

    let minute = Number(elMinutes.textContent) - 5

    if (elMinutes.textContent <= 5) return
    state.minute = minute
    updateDisplay()
}

export function updateDisplay(minute, second) {

    minute = minute ?? state.minute
    second = second ?? state.second

    elMinutes.innerText = String(minute).padStart(2, '0')
    elSeconds.innerText = String(second).padStart(2, '0')

}

function checkIsRunning() {
    pause()
    updateDisplay()
    return
}