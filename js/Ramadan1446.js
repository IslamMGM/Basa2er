//  start ramadan slider js ///////////////
// Initial slide index
let slideIndexramadan = 0;

// Start the slideshow
showSlidesramadan();

// Move to the next slide
function nextSlideramadan() {
  slideIndexramadan++; // Increment slide index
  showSlidesramadan(); // Show the updated slide
  resetTimerramadan(); // Reset the timer
}

// Move to the previous slide
function prevSlideramadan() {
  slideIndexramadan--; // Decrement slide index
  showSlidesramadan(); // Show the updated slide
  resetTimerramadan(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlideramadan(n) {
  slideIndexramadan = n - 1; // Set slide index
  showSlidesramadan(); // Show the updated slide
  resetTimerramadan(); // Reset the timer
}

// Display slides based on the current index
function showSlidesramadan() {
  let slidesramadan = document.querySelectorAll(".mySlides-ramadan"); // Get all slides
  let dotsramadan = document.querySelectorAll(".dots-ramadan"); // Get all dots

  // Loop back to the start if index exceeds the number of slides
  if (slideIndexramadan >= slidesramadan.length) slideIndexramadan = 0;
  // Loop to the end if index is negative
  if (slideIndexramadan < 0) slideIndexramadan = slidesramadan.length - 1;

  // Hide all slides
  slidesramadan.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slidesramadan[slideIndexramadan].style.display = "block";

  // Remove 'active' class from all dots
  dotsramadan.forEach((dot) => {
    dot.classList.remove("active-dot-ramadan");
  });

  // Highlight the current dot
  dotsramadan[slideIndexramadan].classList.add("active-dot-ramadan");
}

// Timer settings
let timerramadan = 7; // Timer duration in seconds
const _timerramadan = timerramadan; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timerramadan--; // Decrease the timer
  if (timerramadan <= 0) {
    // Check if timer is up
    nextSlideramadan(); // Move to the next slide
    resetTimerramadan(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimerramadan() {
  timerramadan = _timerramadan; // Reset timer
}

//  end ramadan slider js ///////////////

///// handle loader//////
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
