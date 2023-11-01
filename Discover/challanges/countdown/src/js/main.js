import { registerClick } from "./modal/events.js";
import * as timer from './timer/index.js'
import state from "./timer/state.js";

registerClick()
timer.start(state.days, state.hours, state.minutes, state.seconds)