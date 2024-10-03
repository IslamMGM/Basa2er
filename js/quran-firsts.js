// Initial slide index
let slideIndexquran = 0;

// Start the slideshow
showSlidesquran();

// Move to the next slide
function nextSlidequran() {
  slideIndexquran++; // Increment slide index
  showSlidesquran(); // Show the updated slide
  resetTimerquran(); // Reset the timer
}

// Move to the previous slide
function prevSlidequran() {
  slideIndexquran--; // Decrement slide index
  showSlidesquran(); // Show the updated slide
  resetTimerquran(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlidequran(n) {
  slideIndexquran = n - 1; // Set slide index
  showSlidesquran(); // Show the updated slide
  resetTimerquran(); // Reset the timer
}

// Display slides based on the current index
function showSlidesquran() {
  let slidesquran = document.querySelectorAll(".mySlides-quran"); // Get all slides
  let dotsquran = document.querySelectorAll(".dots-quran"); // Get all dots

  // Loop back to the start if index exceeds the number of slides
  if (slideIndexquran >= slidesquran.length) slideIndexquran = 0;
  // Loop to the end if index is negative
  if (slideIndexquran < 0) slideIndexquran = slidesquran.length - 1;

  // Hide all slides
  slidesquran.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slidesquran[slideIndexquran].style.display = "block";

  // Remove 'active' class from all dots
  dotsquran.forEach((dot) => {
    dot.classList.remove("active-dot-quran");
  });

  // Highlight the current dot
  dotsquran[slideIndexquran].classList.add("active-dot-quran");
}

// Timer settings
let timerquran = 7; // Timer duration in seconds
const _timerquran = timerquran; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timerquran--; // Decrease the timer
  if (timerquran <= 0) {
    // Check if timer is up
    nextSlidequran(); // Move to the next slide
    resetTimerquran(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimerquran() {
  timerquran = _timerquran; // Reset timer
}
