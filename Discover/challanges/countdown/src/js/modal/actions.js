import { scanInputs } from "./inpts.js";
import { modal } from "./modal.js";

export function sign() {
    modal.open()
}

export function close() {
    modal.close()
}

export function sub() {
    scanInputs()
}
