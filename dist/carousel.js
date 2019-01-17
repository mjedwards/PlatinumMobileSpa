var slideIndex = 0;
showSlides();

// Next and previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0} 
  if (n < 1) {slideIndex = slides.length; }
  if (slideIndex === 4) { slideIndex = 0;}
  console.log(slideIndex)
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //sets up automatic slides
  slideIndex++;  
  if (slideIndex > slides.length) {slideIndex = 0}
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 5 seconds
}

