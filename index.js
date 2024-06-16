const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".js_btn_prev");
const nextButton = document.querySelector(".js_btn_next");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
}

function showNextSlide() {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    updateSlider();
  }
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
  prevButton.style.display = slideIndex === 0 ? "none" : "block";
  nextButton.style.display = slideIndex === slideCount - 1 ? "none" : "block";
}
updateSlider();
