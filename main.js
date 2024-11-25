import './src/output.css'
import './src/js/text-scroll.js'
import './src/js/infinite-scroll.js'
import './src/js/selection.js'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
})
