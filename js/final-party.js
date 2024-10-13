// ///////////////////////
// ///////////////////////
// ///////////////////////

let nextBtn = document.querySelector(".next_party");
let prevBtn = document.querySelector(".prev_party");

let slider = document.querySelector(".slider_party");
let sliderList = slider.querySelector(".slider_party .list_party");
let thumbnail = document.querySelector(".slider_party .thumbnail_party");
let thumbnailItems = thumbnail.querySelectorAll(".item_party");

thumbnail.appendChild(thumbnailItems[0]);

// Autoplay interval variable
let autoplayInterval = null;
let autoplayDelay = 3000; // 3 seconds delay

// Start autoplay
startAutoplay();

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next_party");
  restartAutoplay();
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev_party");
  restartAutoplay();
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item_party");
  let thumbnailItems = document.querySelectorAll(
    ".thumbnail_party .item_party"
  );

  if (direction === "next_party") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next_party");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev_party");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next_party") {
        slider.classList.remove("next_party");
      } else {
        slider.classList.remove("prev_party");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}

// Start the autoplay function
function startAutoplay() {
  autoplayInterval = setInterval(function () {
    moveSlider("next_party"); // Automatically move to the next slide
  }, autoplayDelay);
}

// Stop the autoplay function
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Restart autoplay with a delay
function restartAutoplay() {
  stopAutoplay();
  startAutoplay();
}
