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

var b1 = new TweenMax.to('#bar-1', 1, {
    transform: "translateY(-100px)"
})

var b2 = new TweenMax.to('#bar-2', 1, {
    transform: "translateY(50px)"
})

var b3 = new TweenMax.to('#bar-3', 1, {
    transform: "translateY(200px)"
})

var b4 = new TweenMax.to('#bar-4', 1, {
    transform: "translateY(-30px)"
})

var b5 = new TweenMax.to('#bar-5', 1, {
    transform: "translateX(-60px)"
})

var b7 = new TweenMax.to('#traco', 1, {
    transform: "translateX(30px)"
})

var b10 = new TweenMax.to('.cls-10', 0, {
    strokeDashoffset: 0
})

timeLine.add(b1);
timeLine.add(b2);
timeLine.add(b3);
timeLine.add(b4);
timeLine.add(b5);
timeLine.add(b7);
timeLine.add(b10);

var scene = new ScrollMagic.Scene({
    triggerElement: ".sobre",
    duration: "1000vh",
    offset: "-450vh"
})
.setPin(".grafismo *")
.addIndicators()
.setTween(timeLine)
.setClassToggle(".grafismo","playing")
.addTo(controller);

 var scene2 = new ScrollMagic.Scene({
     triggerElement: ".content-difference",
     duration: "50vh",
     offset: "-200vh"
 })
 .setPin("#lottie")
 .addIndicators()
 .setTween(timeLine)
 .setClassToggle("#lottie","playing")
 .addTo(controller);

}

window.addEventListener("load", grafismo)