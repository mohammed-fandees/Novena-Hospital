var swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pauseOnMouseEnter: false,
  reverseDirection: false,
  stopOnLastSlide: false,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".client-swiper", {
  slidesPerView: "auto",
  pauseOnMouseEnter: false,
  reverseDirection: false,
  stopOnLastSlide: false,
  spaceBetween: 10,
  autoplay: {
    delay: 3000
  }
});

var swiper = new Swiper(".aboutSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  autoplay: {
    delay: 2000
  },
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});