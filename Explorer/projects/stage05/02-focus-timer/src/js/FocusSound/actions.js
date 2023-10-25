import * as sound from "./sounds.js";
import state from "./state.js";


export function florest() {
    state.isMute = document.querySelector('.florest').classList.toggle('sound-on')
    soundOn(state.isMute, sound.florest)
}

export function rain() {
    state.isMute = document.querySelector('.rain').classList.toggle('sound-on')
    soundOn(state.isMute, sound.rain)

}
export function coffee() {
    state.isMute = document.querySelector('.coffee').classList.toggle('sound-on')
    soundOn(state.isMute, sound.coffee)
}


export function fire() {
    state.isMute = document.querySelector('.fire').classList.toggle('sound-on')
    soundOn(state.isMute, sound.fire)
}


function soundOn(state, typeSound) {

    if (!state) {
        typeSound.pause()
        typeSound.currentTime = 0
        return
    }

    typeSound.loop = true
    typeSound.play()
}