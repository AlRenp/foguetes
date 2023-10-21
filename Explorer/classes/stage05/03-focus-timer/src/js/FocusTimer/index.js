import stats from "./stats.js";
import * as events from "./events.js";
import * as timer from "./timer.js"

export function start(minutes, seconds) {
    stats.minute = minutes
    stats.second = seconds

    timer.updateDisplay()
    events.registerControls()
    events.focusMinute()
}