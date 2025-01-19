const parallax = document.querySelector('body');
const nohue = document.querySelectorAll('#nohue');

window.addEventListener('scroll', function() {
  const offset = window.scrollY; 
  parallax.style.backgroundPosition = `center ${offset * 0.8}px`; 
  
  parallax.style.filter = `hue-rotate(${offset*0.08}deg)`;
  for (let i = 0; i < nohue.length; i++) {
    nohue[i].style.filter = `hue-rotate(${offset*-0.08}deg)`;
}
  
});
const offset = window.scrollY; 
  parallax.style.backgroundPosition = `center ${offset * 0.8}px`; 


    // Not recommended to use same ID for multiple elements

// Loop through each element
