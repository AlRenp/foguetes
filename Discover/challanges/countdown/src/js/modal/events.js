import { modal_controls } from "./elements.js";
import * as actions from "./actions.js";

export function registerClick() {

    modal_controls.addEventListener('click', (e) => {
        e.preventDefault()
        const action = e.target.dataset.action

        if (typeof actions[action] != 'function') return

        actions[action]()
    })

}