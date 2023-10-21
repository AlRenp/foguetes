import stats from "./stats.js";
import { controls } from "./elemets.js";
import * as actions from "./actions.js";

import * as el from "./elemets.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {

    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action


        if (typeof actions[action] != "function") return

        actions[action]()
    })

}

export function focusMinute() {
    el.minuteElement.addEventListener('focus', () => {
        el.minuteElement.textContent = ""
    })

    el.minuteElement.onkeypress = (e) => /\d/.test(e.key)

    el.minuteElement.addEventListener('blur', (e) => {
        let time = e.currentTarget.textContent
        time = time > 60 ? 60 : time

        stats.minute = time
        stats.second = 0

        updateDisplay()
        el.minuteElement.removeAttribute('contentditable')

    })
}