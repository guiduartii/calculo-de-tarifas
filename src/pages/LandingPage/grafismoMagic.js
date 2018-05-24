import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {TweenMax} from 'gsap/TweenMax';
import {TweenLite} from 'gsap/TweenLite';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {TimelineMax} from 'gsap/TimelineMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

function grafismo() {
var controller = new ScrollMagic.Controller();

var timeLine = new TimelineMax();

var b1 = new TweenMax.to('#bar-1', 1000, {
    transform: "translateY(-100px)"
})

var b2 = new TweenMax.to('#bar-2', 500, {
    transform: "translateY(50px)"
})

var b3 = new TweenMax.to('#bar-3', 1000, {
    transform: "translateY(200px)"
})

var b4 = new TweenMax.to('#bar-4', 1000, {
    transform: "translateY(-30px)"
})

var b4 = new TweenMax.to('#circle', 1000, {
    transform: "rotate(45deg)"
})

timeLine.add(b1);
timeLine.add(b2);
timeLine.add(b3);
timeLine.add(b4);
timeLine.add(b4);

var scene = new ScrollMagic.Scene({
    triggerElement: ".sobre",
    duration: "250vh",
    offset: "-450vh"
})
.setPin(".grafismo *")
.addIndicators()
.setTween(timeLine)
.setClassToggle(".grafismo","playing")
.addTo(controller);
console.log("loaded")
}

window.addEventListener("load", grafismo)