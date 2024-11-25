import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const divToRight = document.querySelector('.div-to-right')
const divToLeft = document.querySelector('.div-to-left')
const infiniteToRight = document.getElementById('infinite-to-right')
const infiniteToLeft = document.getElementById('infinite-to-left')
let countDiv = Math.ceil(window.innerWidth / divToRight.offsetWidth)

const tlRight = gsap.timeline({
    repeat: -1,
    onStart: () => {
        for (let i = 0; i <= countDiv + 1; i++) {
            const beforeDiv = document.createElement('div')
            var div = document.getElementById('div-to-right')
            var parentDiv = document.getElementById('infinite-to-right')
            beforeDiv.classList.add('div-to-right')
            beforeDiv.innerHTML =
                ' / hello@gretta.com / du lundi au vendredi - de 9h à 18h / 125 rue Cambon, Paris 1er / Paris et partout ailleurs '
            parentDiv.insertBefore(beforeDiv, div)
        }
    },
    onRepeat: () => {
        const beforeDiv = document.createElement('div')
        var div = document.getElementById('div-to-right')
        var parentDiv = document.getElementById('infinite-to-right')
        beforeDiv.classList.add('div-to-right')
        beforeDiv.innerHTML =
            '/ hello@gretta.com / du lundi au vendredi - de 9h à 18h / 125 rue Cambon, Paris 1er / Paris et partout ailleurs'
        parentDiv.insertBefore(beforeDiv, div)
        parentDiv.removeChild(parentDiv.lastElementChild)
    },
    onComplete: () => {},
})

tlRight.to(infiniteToRight, {
    x: window.innerWidth,
    duration: (window.innerWidth / divToRight.offsetWidth) * 18,
    ease: 'linear',
})

const tlLeft = gsap.timeline({
    repeat: -1,
    onStart: () => {
        for (let i = 0; i <= countDiv + 1; i++) {
            const beforeDiv = document.createElement('div')
            var div = document.getElementById('div-to-left')
            var parentDiv = document.getElementById('infinite-to-left')
            beforeDiv.classList.add('div-to-left')
            beforeDiv.innerHTML =
                ' / hello@gretta.com / du lundi au vendredi - de 9h à 18h / 125 rue Cambon, Paris 1er / Paris et partout ailleurs '
            parentDiv.appendChild(beforeDiv)
        }
    },
    onRepeat: () => {
        const beforeDiv = document.createElement('div')
        var div = document.getElementById('div-to-left')
        var parentDiv = document.getElementById('infinite-to-left')
        beforeDiv.classList.add('div-to-left')
        beforeDiv.innerHTML =
            ' / hello@gretta.com / du lundi au vendredi - de 9h à 18h / 125 rue Cambon, Paris 1er / Paris et partout ailleurs '
        parentDiv.appendChild(beforeDiv)
        parentDiv.removeChild(parentDiv.firstChild)
    },
    onComplete: () => {},
})

tlLeft.to(infiniteToLeft, {
    x: -window.innerWidth,
    duration: (window.innerWidth / divToLeft.offsetWidth) * 18,
    ease: 'linear',
})
