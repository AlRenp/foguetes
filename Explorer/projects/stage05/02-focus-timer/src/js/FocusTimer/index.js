import { registerControls } from "./events.js";
import { registerCards } from '../FocusSound/events.js'
import state from "./state.js";

export function start(minutes, seconds) {
    state.minute = minutes
    state.second = seconds

    registerControls()
    registerCards()
}
