$(function () {
  $(document).on("click", ".dot", function (e) {
    e.preventDefault();
    let index = $('.dot').index(this);
    currentSlide(index);
  });
});

let slideIndex = 0;
showSlides();

function showSlides(clicked = false) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  if(!clicked){
    setTimeout(showSlides, 5000); 
  }
}

function currentSlide(n) {
  slideIndex = n
  showSlides(true);
}
