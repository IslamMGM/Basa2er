const celebrateBtn = document.getElementById("celebrateBtn");

// Function to check if the button is vertically centered in the viewport
function isCenteredInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Get the vertical center of the element
  const elementCenter = rect.top + rect.height / 2;

  // Define the vertical center of the viewport
  const viewportCenter = viewportHeight / 2;

  // Return true if the element's center is within a small range around the viewport's center
  const tolerance = 10; // Adjust tolerance to make the trigger range bigger/smaller
  return Math.abs(elementCenter - viewportCenter) <= tolerance;
}

// Set an interval to check the button's visibility every 200ms
let celebrationTriggered = false;

const checkScroll = () => {
  if (isCenteredInViewport(celebrateBtn)) {
    if (!celebrationTriggered) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.7 },
      });
      celebrationTriggered = true; // Set to true after the celebration
    }
  } else {
    celebrationTriggered = false; // Reset when out of view
  }
};

// Check visibility on scroll
window.addEventListener("scroll", checkScroll);
// Check visibility on resize to account for layout changes
window.addEventListener("resize", checkScroll);
// Check visibility on load
window.addEventListener("load", checkScroll);

// ///////////////////////////////////////
// ///////////////////////////////////////

const celebrateBtn_2 = document.getElementById("celebrateBtn-2");

// Function to check if the button is vertically centered in the viewport
function isCenteredInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Get the vertical center of the element
  const elementCenter = rect.top + rect.height / 2;

  // Define the vertical center of the viewport
  const viewportCenter = viewportHeight / 2;

  // Return true if the element's center is within a small range around the viewport's center
  const tolerance = 10; // Adjust tolerance to make the trigger range bigger/smaller
  return Math.abs(elementCenter - viewportCenter) <= tolerance;
}

// Set an interval to check the button's visibility every 200ms
let celebrationTriggered_2 = false;

const checkScroll_2 = () => {
  if (isCenteredInViewport(celebrateBtn_2)) {
    if (!celebrationTriggered_2) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.7 },
      });
      celebrationTriggered_2 = true; // Set to true after the celebration
    }
  } else {
    celebrationTriggered_2 = false; // Reset when out of view
  }
};

// Check visibility on scroll
window.addEventListener("scroll", checkScroll_2);
// Check visibility on resize to account for layout changes
window.addEventListener("resize", checkScroll_2);
// Check visibility on load
window.addEventListener("load", checkScroll_2);

// const celebrateBtn_2 = document.getElementById("celebrateBtn-2");

// // Function to check if the button is in the viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Set an interval to check the button's visibility every 200ms
// let celebrationTriggered_2 = false;

// const checkScroll_2 = () => {
//   if (isInViewport(celebrateBtn_2)) {
//     if (!celebrationTriggered_2) {
//       confetti({
//         particleCount: 100,
//         spread: 100,
//         origin: { y: 0.6 },
//       });
//       celebrationTriggered_2 = true; // Set to true after the celebration
//     }
//   } else {
//     celebrationTriggered_2 = false; // Reset when out of view
//   }
// };

// // Check visibility on scroll
// window.addEventListener("scroll", checkScroll_2);
// // Check visibility on resize to account for layout changes
// window.addEventListener("resize", checkScroll_2);
// // Check visibility on load
// window.addEventListener("load", checkScroll_2);
