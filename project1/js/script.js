/* Slides are set to 1  */

let slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(_n) {
  let i;
  let slides = document.getElementsByClassName("slidenames");
  let dots = document.getElementsByClassName("text");
  let captionText = document.getElementById("caption");

  /* i equals 0, increments with i++, display none hides the slides when one slide is shown at a time */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*powers the clicking mechanism for class .text, links the opacity and border rule*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  /*Resets the class display property for .slidenames */
  slides[slideIndex - 1].style.display = "block";
  /* Enables the thumbnail activation and establishes the border and opacity on hover  */
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
