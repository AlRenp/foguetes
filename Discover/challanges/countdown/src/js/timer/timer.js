import { timer } from "./elements.js";
import state from "./state.js";

export function countdown() {

    let seconds = Number(timer.seconds.textContent)
    let minutes = Number(timer.minutes.textContent)
    let hours = Number(timer.hours.textContent)
    let days = Number(timer.days.textContent)

    seconds--
    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        minutes = 59
        hours--
    }

    if (hours < 0) {
        hours = 23
        days--
    }

    if (days < 0) {
        return
    }

    updateDisplay(seconds, minutes, hours, days)

    setTimeout(() => countdown(), 1000);
}

export function updateDisplay(seconds, minutes, hours, days) {
    timer.seconds.innerText = String(seconds).padStart(2, '0')
    timer.minutes.innerText = String(minutes).padStart(2, '0')
    timer.hours.innerText = String(hours).padStart(2, '0')
    timer.days.innerText = String(days).padStart(2, '0')
}