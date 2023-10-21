import stats from "./stats.js"
import * as timer from "./timer.js"
import * as el from './elemets.js'
import * as sound from './sounds.js'

export function toggleRunning() {
    stats.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown();
    sound.buttonPress.play()
}

export function reset() {
    stats.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sound.buttonPress.play()
}

export function set() {
    el.minuteElement.setAttribute('contenteditable', true)
    el.minuteElement.focus()
    sound.buttonPress.play()
}

export function toggleMusic() {
    stats.isMute = document.documentElement.classList.toggle('music-on')

    if (stats.isMute) {
        sound.bgAudio.loop = true
        sound.bgAudio.play()
        return
    }

    sound.bgAudio.pause()

}


