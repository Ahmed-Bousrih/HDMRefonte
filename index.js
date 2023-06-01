document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const prevButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");

  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach(function(slide) {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "flex";
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  showSlide(currentSlide);
});

document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector(".wrapper");
  const header = wrapper.querySelector(".wrapper-header");

  header.addEventListener("click", function() {
    wrapper.classList.toggle("open");
  });
});