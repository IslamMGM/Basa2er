let TrandingSlider = new Swiper(".img-event-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  initialSlide: 6,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 317.5,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
