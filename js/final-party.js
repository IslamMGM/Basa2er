let TrandingSlider_party = new Swiper(".img-event-slider_party", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  initialSlide: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 420,
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
