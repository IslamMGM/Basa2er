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

///////////////
///////////////
///////////////
let bullets = document.querySelectorAll(".bullet");
let currentIndex = 0; // Keep track of the active thumbnail index
const maxVisibleBullets = 5; // Set the maximum number of visible bullets

function updateActiveBullet(index) {
  // Remove 'active' class from all bullets
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  // Show only the limited number of bullets
  const startIndex = Math.max(0, index - Math.floor(maxVisibleBullets / 2));
  const endIndex = Math.min(bullets.length, startIndex + maxVisibleBullets);

  bullets.forEach((bullet, i) => {
    bullet.style.display = i >= startIndex && i < endIndex ? "flex" : "none";
    // Add 'active' class to the current bullet
    if (i === index) {
      bullet.classList.add("active");
    }
  });
}

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item_party");
  let thumbnailItems = document.querySelectorAll(
    ".thumbnail_party .item_party"
  );

  if (direction === "next_party") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next_party");

    // Update the index for the next bullet
    currentIndex = (currentIndex + 1) % bullets.length; // Loop back to the first bullet if at the end
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev_party");

    // Update the index for the previous bullet
    currentIndex = (currentIndex - 1 + bullets.length) % bullets.length; // Loop back to the last bullet if at the beginning
  }

  // Update bullet active state
  updateActiveBullet(currentIndex);

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
  );
}

// Bullet click event
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", function () {
    if (index !== currentIndex) {
      let difference = index - currentIndex;

      // Move the slider by the difference between current and clicked bullet
      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          moveSlider("next_party");
        }
      } else {
        for (let i = 0; i < Math.abs(difference); i++) {
          moveSlider("prev_party");
        }
      }
    }
  });
});

// Initial call to update the bullets display
updateActiveBullet(currentIndex);
