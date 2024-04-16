let currentIndex = 0;
const slides = document.querySelectorAll('.student');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else if (i === (index - 1 + slides.length) % slides.length) {
      slide.classList.add('previous');
    } else {
      slide.classList.remove('active', 'previous');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  setInterval(nextSlide, 1000); // Change slide every 3 seconds
}

startSlider();
