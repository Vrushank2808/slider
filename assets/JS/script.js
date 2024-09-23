const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide-page").length; 
let currentSlide = 0;
const intervelTime = 3000;
let slideIntervel;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlide();
}

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function startSlider() {
    slideIntervel = setInterval(nextSlide, intervelTime);
}

function stopSlider() {
    clearInterval(slideIntervel);
}

document.querySelector(".previous").addEventListener("click", () => {
    prevSlide();
    stopSlider();
    startSlider();
});

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    stopSlider();
    startSlider();
});

startSlider();