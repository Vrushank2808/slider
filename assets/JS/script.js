const slides = document.querySelector(".slides")
const slideCount = document.querySelectorAll(".slide-page").length
const indicators = document.querySelectorAll(".indicator")
let currentSlide = 0
const intervelTime = 3000
let slideIntervel

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount
    updateSlide()
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount
    updateSlide()
}

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add("active")
        } else {
            indicator.classList.remove("active")
        }
    })
}

function startSlider() {
    slideIntervel = setInterval(nextSlide, intervelTime)
}

function stopSlider() {
    clearInterval(slideIntervel)
}

function resetSlider() {
    stopSlider()
    startSlider()
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        currentSlide = index
        updateSlide()
        resetSlider()
    })
});

document.querySelector(".previous").addEventListener("click", () => {
    prevSlide()
    resetSlider()
})

document.querySelector(".next").addEventListener("click", () => {
    nextSlide()
    resetSlider()
})

document.querySelector(".slider").addEventListener("mouseenter", stopSlider)
document.querySelector(".slider").addEventListener("mouseleave", startSlider)

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextSlide()
        resetSlider()
    } else if (event.key === "ArrowLeft") {
        prevSlide()
        resetSlider()
    }
})

startSlider()

// Modal 
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close")

setTimeout(() => {
    modal.style.display = "flex"
}, 5000)

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"
    }
})

document.querySelectorAll(".slide-page").forEach((slide) => {
    slide.addEventListener("click", () => {
        modal.style.display = "flex"
    })
})