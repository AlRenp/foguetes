import * as actions from "./actions.js";
import { controls } from "./elements.js";

export function registerControls() {

    controls.addEventListener('click', (e) => {

        const action = e.target.dataset.action

        if (typeof actions[action] != 'function') return

        actions[action]()

    })
}