
// To ensure that only one video is playing at a time on a page
var videos = document.querySelectorAll('video');
for(var i=0; i<videos.length; i++)
   videos[i].addEventListener('play', function(){pauseAll(this)}, true);


function pauseAll(elem){
	for(var i=0; i<videos.length; i++){
		//Is this the one we want to play?
		if(videos[i] == elem) continue;
		//Have we already played it && is it already paused?
		if(videos[i].played.length > 0 && !videos[i].paused){
		// Then pause it now
		  videos[i].pause();
		}
	}
  }

// --------------- automatic and manual slideshow -----------------------
var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider_dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider_dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// --------------- automatic and manual slideshow -----------------------

const scrollContainer = document.querySelector('.stages');
const content = document.querySelector('.image-scroll__container');

scrollContainer.addEventListener('scroll', () => {
    // Check if reached the end of the content
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
      // Create a clone of the content
      const clone = content.cloneNode(true);
      scrollContainer.appendChild(clone);
    }
  });
