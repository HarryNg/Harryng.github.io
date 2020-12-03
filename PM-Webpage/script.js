function myFunctionX(z) {
            z.classList.toggle("change");
          var x = document.getElementById("myTopnav");
          if (x.className === "main-menu") {
            x.className += " responsive";
          } else {
            x.className = "main-menu";
          }
        }

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var myTopnav = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = myTopnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {


  if (window.pageYOffset >= sticky-13) {

    myTopnav.classList.add("sticky")
  } else {
    myTopnav.classList.remove("sticky");
  }
}


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
  var slides = document.getElementsByClassName("mySlides");
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
