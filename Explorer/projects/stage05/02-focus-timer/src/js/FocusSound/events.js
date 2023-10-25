import { cards } from "./elements.js";
import * as actions from "./actions.js";

export function registerCards() {
    cards.addEventListener('click', (e) => {

        let action = e.target.dataset.action

        if (action === undefined) return

        actions[action]()

    })
}

