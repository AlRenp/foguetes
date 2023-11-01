import state from "./state.js"
import * as timer from "./timer.js"

export function start(days, hours, minutes, seconds) {
    state.days = days
    state.hours = hours
    state.minutes = minutes
    state.seconds = seconds

    timer.countdown()
    timer.updateDisplay(state.seconds, state.minutes, state.hours, state.days)


}


