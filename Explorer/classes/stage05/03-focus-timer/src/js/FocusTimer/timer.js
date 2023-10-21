import stats from "./stats.js"
import * as el from "./elemets.js"
import * as events from "./actions.js"
import { kichenTimer } from "./sounds.js"

export function countdown() {

    clearTimeout(stats.countdownId)

    if (!stats.isRunning) return

    let minute = Number(el.minuteElement.textContent)
    let second = Number(el.secondeElement.textContent)

    second--

    if (second < 0) {
        second = 59
        minute--
    }

    if (minute < 0) {
        events.reset()
        kichenTimer.play()
        return
    }

    updateDisplay(minute, second)


    stats.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minute, second) {

    minute = minute ?? stats.minute
    second = second ?? stats.second

    el.minuteElement.innerText = String(minute).padStart(2, "0")
    el.secondeElement.innerText = String(second).padStart(2, "0")

}