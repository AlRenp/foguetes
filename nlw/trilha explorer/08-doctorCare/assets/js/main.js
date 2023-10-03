window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavScroll()
    showBackToHomeButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavScroll() {
    const navElement = document.querySelector('nav')

    if (scrollY > 0) addClass(navElement, 'scroll')
    else removeClass(navElement, 'scroll')

}

function openMenu() {
    addClass(document.body, 'menu-expanded')
}

function closeMenu() {
    removeClass(document.body, 'menu-expanded')
}

function addClass(element, className) {
    element.classList.add(className)
}

function removeClass(element, className) {
    element.classList.remove(className)
}


function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopPassedTargetline = targetLine >= sectionTop


    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    removeClass(menuElement, 'active')
    if (sectionBoundaries) {
        addClass(menuElement, 'active')
    }
}

function showBackToHomeButton() {
    const buttonElement = document.querySelector('#backToHomeButton')

    removeClass(buttonElement, 'show')
    if (scrollY >= home.offsetHeight / 2) {
        addClass(buttonElement, 'show')
    }
}
