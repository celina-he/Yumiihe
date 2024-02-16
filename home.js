

// click effect for the navigation bar
const menu = document.querySelector('#mobile-menu') // navbar__toggle class
const menuLinks = document.querySelector('.navbar__menu') // navbar__menu class

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


// wip section slideshow function
let slide_index = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("wipSlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slide_index++;

  if (slide_index > slides.length) {slide_index = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slide_index-1].style.display = "block";  
  dots[slide_index-1].className += " active";

  setTimeout(showSlides, 3000); // changes slideshow image every 3 seconds
}

// 2 frame animation within the wups container
const imageContainer = document.querySelector('.animation_frame');
const images = document.querySelectorAll('.animation_frame img');

let currentImageIndex = 0;
const animationInterval = 350; // Adjust the delay between frames (in milliseconds)

function showNextImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, animationInterval);