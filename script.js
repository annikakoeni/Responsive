const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true
});

swiper.slideTo(1, false, false);