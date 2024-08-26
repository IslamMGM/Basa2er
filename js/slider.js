// Initial slide index
let slideIndex = 0;

// Start the slideshow
showSlides();

// Move to the next slide
function nextSlide() {
  slideIndex++; // Increment slide index
  showSlides(); // Show the updated slide
  resetTimer(); // Reset the timer
}

// Move to the previous slide
function prevSlide() {
  slideIndex--; // Decrement slide index
  showSlides(); // Show the updated slide
  resetTimer(); // Reset the timer
}

// Show a specific slide based on its number
function currentSlide(n) {
  slideIndex = n - 1; // Set slide index
  showSlides(); // Show the updated slide
  resetTimer(); // Reset the timer
}

/////////////////////////////////////////////////////////////
// Display slides based on the current index
function showSlides() {
  let slides = document.querySelectorAll(".mySlides"); // Get all slides
  let dots = document.querySelectorAll(".dots"); // Get all dots
  let header = document.querySelector(".main-header"); // Get the header element

  // Loop back to the start if index exceeds the number of slides
  if (slideIndex >= slides.length) slideIndex = 0;
  // Loop to the end if index is negative
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Remove 'active' class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  // Highlight the current dot
  dots[slideIndex].classList.add("active-dot");

  // Change the header color based on the current slide's data-color attribute, only for mobile view
  if (window.innerWidth <= 768) {
    // Check if screen width is 768px or less
    const newColor = slides[slideIndex].getAttribute("data-color");
    header.style.backgroundColor = newColor;
  } else {
    // Optional: Reset header color when not in mobile view
    header.style.backgroundColor = ""; // or set to a default color
  }
}
// Event listener for window resize to update header color
window.addEventListener("resize", showSlides);

// Call showSlides to ensure correct color on initial load
showSlides();
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Timer settings
let timer = 7; // Timer duration in seconds
const _timer = timer; // Store initial timer value

// Auto-advance slides every second
setInterval(() => {
  timer--; // Decrease the timer
  if (timer <= 0) {
    // Check if timer is up
    nextSlide(); // Move to the next slide
    resetTimer(); // Reset the timer
  }
}, 1000); // Interval duration in milliseconds

// Reset the timer to its initial value
function resetTimer() {
  timer = _timer; // Reset timer
}

// ////.................///////////////
// remove the animation landing img on mobile view
function checkWidthAndRemoveClass() {
  const divs = document.querySelectorAll(".mySlides"); // Select all elements with the class 'my-div'

  // Define the width where you want to remove the class
  const specificWidth = 768; // Example width

  divs.forEach((div) => {
    if (window.innerWidth <= specificWidth) {
      div.classList.remove("animate"); // Remove the class if the condition is met
    } else {
      div.classList.add("animate"); // Optionally add it back if the condition isn't met
    }
  });
}

// Run the function on load and on resize
window.addEventListener("load", checkWidthAndRemoveClass);
window.addEventListener("resize", checkWidthAndRemoveClass);
