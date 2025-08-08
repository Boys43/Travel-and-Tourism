const swiper1 = new Swiper(".testimonials-carousel", {
  freeMode: true,
  grabCursor: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // this allows autoplay to resume after interaction
    pauseOnMouseEnter: true, // optional: pause when hovered
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".transport-swiper", {
  freeMode: true,
  grabCursor: true,
  speed: 2000,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // this allows autoplay to resume after interaction
    pauseOnMouseEnter: true, // optional: pause when hovered
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
