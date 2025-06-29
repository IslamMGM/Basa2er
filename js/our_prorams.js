let TrandingSlider_party = new Swiper(".programs-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  initialSlide: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
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
    delay: 8000,
    disableOnInteraction: false,
  },
});

///////////
window.addEventListener("load", function () {
  const slowContent = document.querySelector(".form-1");
  const loader = document.querySelector(".loader");

  slowContent.style.visibility = "visible"; // Show the content
  loader.style.display = "none"; // Hide the loader
});
// ////////////////////////////
window.addEventListener("load", function () {
  const slowContent = document.querySelector(".form-2");
  const loader = document.querySelector(".loader-2");

  slowContent.style.visibility = "visible"; // Show the content
  loader.style.display = "none"; // Hide the loader
});

// ///////////////////
// ///////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const recordBtn = document.querySelector(".click");
//   const form1 = document.querySelector(".form-1");

//   recordBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     form1.style.display = "block";
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const recordBtn = document.querySelector(".click");
  const form1 = document.querySelector(".form-1");

  // When user clicks the button
  recordBtn.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
  });

  // If URL hash is #subscription, open the form automatically
  if (window.location.hash === "#subscription") {
    form1.style.display = "block";
  }
});

///////////////////// handle videos section /////////////////////////
// Select all thumbnail images
const thumbnails = document.querySelectorAll(".video-thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const videoContainer = thumbnail.closest(".video-container");
    const videoFrame = videoContainer.querySelector("iframe");

    // Add the fade-out class to trigger the animation
    thumbnail.classList.add("fade-out");

    // Wait for the animation to finish before hiding the thumbnail
    thumbnail.addEventListener("animationend", () => {
      thumbnail.style.display = "none"; // Hide thumbnail
      videoFrame.style.display = "block"; // Show video
    });
  });
});
