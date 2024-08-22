// Initial slide index
let slideIndexKid = 0;

// Start the slideshow
showSlidesKid();

// Move to the next slide
function nextSlideKid() {
  slideIndexKid++; // Increment slide index
  showSlidesKid(); // Show the updated slide
  resetTimerKid(); // Reset the timer
}

// Move to the previous slide
function prevSlideKid() {
  slideIndexKid--; // Decrement slide index
  showSlidesKid(); // Show the updated slide
  resetTimerKid(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlideKid(n) {
  slideIndexKid = n - 1; // Set slide index
  showSlidesKid(); // Show the updated slide
  resetTimerKid(); // Reset the timer
}

// Display slides based on the current index
function showSlidesKid() {
  let slidesKid = document.querySelectorAll(".mySlides-kid"); // Get all slides
  let dotsKid = document.querySelectorAll(".dots-kid"); // Get all dots

  // Loop back to the start if index exceeds the number of slides
  if (slideIndexKid >= slidesKid.length) slideIndexKid = 0;
  // Loop to the end if index is negative
  if (slideIndexKid < 0) slideIndexKid = slidesKid.length - 1;

  // Hide all slides
  slidesKid.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slidesKid[slideIndexKid].style.display = "block";

  // Remove 'active' class from all dots
  dotsKid.forEach((dot) => {
    dot.classList.remove("active-dot-kid");
  });

  // Highlight the current dot
  dotsKid[slideIndexKid].classList.add("active-dot-kid");
}

// Timer settings
let timerKid = 7; // Timer duration in seconds
const _timerKid = timerKid; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timerKid--; // Decrease the timer
  if (timerKid <= 0) {
    // Check if timer is up
    nextSlideKid(); // Move to the next slide
    resetTimerKid(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimerKid() {
  timerKid = _timerKid; // Reset timer
}
