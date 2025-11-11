const parallax = document.getElementById("BG")
window.addEventListener('scroll', function() {
  const offset = window.scrollY; 
  parallax.style.backgroundPosition = `center ${offset * -0.2}px`; 
});
parallax.style.backgroundPosition = `center center`; 




document.addEventListener("DOMContentLoaded", () => {
  
  // noinspection JSUnresolvedReference
    CustomBounce.create("myBounce", {
endAtStart:true,
  strength: 0.2,
  squash: 5,
  squashID: "myBounce-squash",
});
// noinspection JSUnresolvedReference
let tl = gsap.timeline({repeat:-1});
// noinspection JSUnresolvedReference
gsap.to("#loader", {duration: 2, ease: "expo.in",backgroundSize:"0vmax"},"+=-0.25")
// noinspection JSUnresolvedReference
gsap.to(".blockcontainer", {duration: 1, ease: "expo.in",scale:"0"},"<+=0.8")
for (let i = 1; i<5; i++) {
    //do the bounce by affecting the "y" property.
    tl.to("#loaderblock"+i, { duration: 1, y: -50, ease: "myBounce" }, "-=0.5");

    //and do the squash/stretch at the same time:
    tl.to("#loaderblock"+i, {
    duration: 1,
    scaleX: 1.2,
    scaleY: 0.8,
    ease: "myBounce-squash",
    transformOrigin: "center bottom",
    }, "<");
}


 });

function removeloader() {
  let loader = document.getElementById("loader")
  loader.style.pointerEvents = "none"
  setTimeout(function () {
    loader.remove()
  },2000)
}
setTimeout(removeloader,800)

setTimeout(playstart,1600)
function playstart() {

    let split = SplitText.create(".mainpage", { type: "words, chars" });
// now animate the characters in a staggered fashion
    gsap.from(split.chars, {
        duration: 3,
        ease: "elastic.out(1,0.3)",
        y: "random(-100,100)", // animate from 100px below
        scale: 0,
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05 // 0.05 seconds between each
    });
    gsap.from(".BG", {
        duration: 2,
        ease: "expo.out",
        scale: "3",
        rotationX: "20deg",
        translateZ: "-20cm"
    })
}