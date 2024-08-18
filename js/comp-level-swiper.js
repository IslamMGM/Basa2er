const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Get all the images, descriptions, and image containers
const images = document.querySelectorAll(".user-image");
const descriptions = document.querySelectorAll(".image-description");
const imageContainers = document.querySelectorAll(".img-arrow"); // Updated class name

// Function to set the opacity of the first image to 1 and show its description
function setInitialOpacity() {
  if (images.length > 0) {
    updateOpacityAndDescription(0); // Initialize with the first image
  }
}

// Function to update the opacity and description for the active slide
function updateOpacityAndDescription(index) {
  // Reset opacity and hide all descriptions
  images.forEach((img) => {
    img.style.opacity = "0.5";
    img.parentElement.classList.remove("active"); // Remove 'active' class from all containers
  });
  descriptions.forEach((desc) => (desc.style.display = "none"));

  // Update the clicked image's opacity and show its description
  if (images[index]) {
    images[index].style.opacity = "1"; // Set the opacity of the clicked image to 1
    images[index].parentElement.classList.add("active"); // Add 'active' class to the container
  }
  if (descriptions[index]) {
    descriptions[index].style.display = "block"; // Show the description of the clicked image
  }
}

// Add click event listener to each image container to update opacity and show description without moving the slide
imageContainers.forEach((container, index) => {
  container.addEventListener("click", () => {
    // Call the update function for the clicked image container
    updateOpacityAndDescription(index);
  });
});

// Set initial opacity and description when the page loads
window.onload = setInitialOpacity;

// Ensure Swiper is already initialized and assigned to `swiper`

// Update opacity and description when the slide changes (including swiping and button clicks)
swiper.on("slideChange", () => {
  const activeSlideIndex = swiper.realIndex; // Get the real index of the active slide
  updateOpacityAndDescription(activeSlideIndex);
});

// Update the Swiper to start from the last clicked image on button click
document.querySelector(".swiper-button-prev").addEventListener("click", () => {
  lastClickedIndex = (lastClickedIndex - 1 + images.length) % images.length;
  swiper.slideToLoop(lastClickedIndex);
});

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  lastClickedIndex = (lastClickedIndex + 1) % images.length;
  swiper.slideToLoop(lastClickedIndex);
});
