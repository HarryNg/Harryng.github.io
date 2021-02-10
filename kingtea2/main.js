//Select element function
const selectElement = function(element){
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

/*full width slider function*/
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
    
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndexs = 0;
carousel();

function carousel() {
  var j;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slideIndexs++;
  if (slideIndexs > x.length) {slideIndexs = 1}
  x[slideIndexs-1].style.display = "block";
  dots[slideIndexs-1].className += " active";
    setTimeout(carousel, 500); // Change image every 2 seconds
}