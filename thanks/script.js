var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var main = document.getElementById("bodytext")
var p = document.getElementById("ptext")
var bg = document.getElementById("bg")
document.addEventListener('mousemove', function(event) {
  let mx = (event.clientX-screenWidth/2)/screenWidth;
  let my = (event.clientY-screenHeight/2)/screenHeight;
  main.style.transform = `translate(${20*mx}px, ${20*my}px)`;
  p.style.transform = `translate(${-10*mx}px, ${-10*my}px)`;
  bg.style.backgroundPosition = `${5*mx}px ${5*my}px`
});