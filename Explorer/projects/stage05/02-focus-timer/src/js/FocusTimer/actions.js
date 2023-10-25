import * as timer from "./timer.js";
import state from "./state.js";

export function play() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function pause() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function up() {
    timer.increment()
}

export function down() {
    timer.decrement()
}


