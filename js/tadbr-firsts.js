// Initial slide index
let slideIndextadbr = 0;

// Start the slideshow
showSlidestadbr();

// Move to the next slide
function nextSlidetadbr() {
  slideIndextadbr++; // Increment slide index
  showSlidestadbr(); // Show the updated slide
  resetTimertadbr(); // Reset the timer
}

// Move to the previous slide
function prevSlidetadbr() {
  slideIndextadbr--; // Decrement slide index
  showSlidestadbr(); // Show the updated slide
  resetTimertadbr(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlidetadbr(n) {
  slideIndextadbr = n - 1; // Set slide index
  showSlidestadbr(); // Show the updated slide
  resetTimertadbr(); // Reset the timer
}

// Display slides based on the current index
function showSlidestadbr() {
  let slidestadbr = document.querySelectorAll(".mySlides-tadbr"); // Get all slides
  let dotstadbr = document.querySelectorAll(".dots-tadbr"); // Get all dots

  // Loop back to the start if index exceeds the number of slides
  if (slideIndextadbr >= slidestadbr.length) slideIndextadbr = 0;
  // Loop to the end if index is negative
  if (slideIndextadbr < 0) slideIndextadbr = slidestadbr.length - 1;

  // Hide all slides
  slidestadbr.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slidestadbr[slideIndextadbr].style.display = "block";

  // Remove 'active' class from all dots
  dotstadbr.forEach((dot) => {
    dot.classList.remove("active-dot-tadbr");
  });

  // Highlight the current dot
  dotstadbr[slideIndextadbr].classList.add("active-dot-tadbr");
}

// Timer settings
let timertadbr = 7; // Timer duration in seconds
const _timertadbr = timertadbr; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timertadbr--; // Decrease the timer
  if (timertadbr <= 0) {
    // Check if timer is up
    nextSlidetadbr(); // Move to the next slide
    resetTimertadbr(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimertadbr() {
  timertadbr = _timertadbr; // Reset timer
}
