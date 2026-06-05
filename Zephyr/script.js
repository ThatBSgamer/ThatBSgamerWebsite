let mouseX = 0
let mouseY = 0
var hasTouch = !!('ontouchstart' in window);


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin, ScrollTrigger)
  if (hasTouch) {
      document.addEventListener('mousedown', (event) => {
      
      mouseX=event.x
      mouseY=event.y
      heroTextAnim(event, true)
    })
    
  } else {
      document.addEventListener('mousemove', (event) => {
      
      mouseX=event.x
      mouseY=event.y
      heroTextAnim(event, false)
    })
  }
 });

const video = document.getElementById('hero_char');

if (
    video.canPlayType('video/mp4; codecs="hvc1"') ||
    video.canPlayType('video/mp4; codecs="hev1"')
) {
    video.src = 'videos/output.mov';
} else {
    video.src = 'videos/ZephyrFloat.webm';
}

window.addEventListener('scroll', (event) => {
    heroTextAnim(event, hasTouch)
});

function heroTextAnim(devent, returnelem) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    
    
    let mouseXratio = ((mouseX)-width/2)/width
    let mouseYratio = (((mouseY) + window.scrollY)-height/2)/height
    const FillText = document.getElementById("hero_text_filled")
    const OutlineText = document.getElementById("hero_text_outline")
    const factor = 60
    if (returnelem) {
      mouseXratio=0
      mouseYratio=0
    }
    gsap.to("#hero_text_filled", {
        rotationX: -1*mouseYratio*factor,
        rotationY: mouseXratio*factor,
        duration: 0.1,
        overwrite: true
    });
    gsap.to("#hero_text_outline", {
        rotationX: -1*mouseYratio*factor,
        rotationY: mouseXratio*factor,
        duration: 0.1,
        overwrite: true
    });
    gsap.to("#hero_char", {
        top: window.scrollY/4,
        duration: 0,
        overwrite: false
    });
    
}

gsap.from(".Typed", {
  text: " ",
  duration: 0.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".Typed",
    start: "top 100%", // Triggers when the top of the element hits 80% down the viewport
    toggleActions: "play none none none" // Plays once when scrolled into view
  }
},"+=1");

gsap.from(".MoveInOnScroll", {
  rotationX: 90,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".MoveInOnScroll",
    start: "top 100%", // Triggers when the top of the element hits 80% down the viewport
    toggleActions: "play none none none" // Plays once when scrolled into view
  }
});