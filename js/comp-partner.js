// Initial slide index
let slideIndexpartner = 0;

// Start the slideshow
showSlidespartner();

// Move to the next slide
function nextSlidepartner() {
  slideIndexpartner++; // Increment slide index
  showSlidespartner(); // Show the updated slide
  resetTimerpartner(); // Reset the timer
}

// Move to the previous slide
function prevSlidepartner() {
  slideIndexpartner--; // Decrement slide index
  showSlidespartner(); // Show the updated slide
  resetTimerpartner(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlidepartner(n) {
  slideIndexpartner = n - 1; // Set slide index
  showSlidespartner(); // Show the updated slide
  resetTimerpartner(); // Reset the timer
}

// Display slides based on the current index
function showSlidespartner() {
  let slidespartner = document.querySelectorAll(".mySlides-partner"); // Get all slides
  let dotspartner = document.querySelectorAll(".dots-partner"); // Get all dots

  // Loop back to the start if index exceeds the number of slides
  if (slideIndexpartner >= slidespartner.length) slideIndexpartner = 0;
  // Loop to the end if index is negative
  if (slideIndexpartner < 0) slideIndexpartner = slidespartner.length - 1;

  // Hide all slides
  slidespartner.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slidespartner[slideIndexpartner].style.display = "block";

  // Remove 'active' class from all dots
  dotspartner.forEach((dot) => {
    dot.classList.remove("active-dot-partner");
  });

  // Highlight the current dot
  dotspartner[slideIndexpartner].classList.add("active-dot-partner");
}

// Timer settings
let timerpartner = 7; // Timer duration in seconds
const _timerpartner = timerpartner; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timerpartner--; // Decrease the timer
  if (timerpartner <= 0) {
    // Check if timer is up
    nextSlidepartner(); // Move to the next slide
    resetTimerpartner(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimerpartner() {
  timerpartner = _timerpartner; // Reset timer
}
