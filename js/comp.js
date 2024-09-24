document.addEventListener("DOMContentLoaded", function () {
  const h5Elements = document.querySelectorAll(".click-to-drop");

  h5Elements.forEach(function (h5) {
    h5.addEventListener("click", function () {
      const nextDiv = this.nextElementSibling;

      // Hide all other divs and reset rotation on all h5s
      document
        .querySelectorAll(".click-to-drop + .down-div")
        .forEach(function (div) {
          if (div !== nextDiv) {
            div.classList.remove("show");
          }
        });
      document.querySelectorAll(".click-to-drop").forEach(function (el) {
        if (el !== h5) {
          el.classList.remove("rotate");
        }
      });

      // Toggle the clicked element's div and rotation
      if (nextDiv && nextDiv.classList.contains("down-div")) {
        nextDiv.classList.toggle("show");
        this.classList.toggle("rotate");
      }
    });
  });
});

// sweet alert ////////////
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".info").forEach(function (element) {
    element.addEventListener("click", function (e) {
      Swal.fire({
        text: "سيتم توفير ملف تدبر  سورتي الفلق والناس قريبًا إن شاء الله",
        icon: "info",
        confirmButtonText: "حسنًا",
      });
    });
  });
});

// Select all thumbnail images
const thumbnails = document.querySelectorAll(".video-thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const videoContainer = thumbnail.closest(".video-container");
    const videoFrame = videoContainer.querySelector("iframe");

    // Add the fade-out class to trigger the animation
    thumbnail.classList.add("fade-out");

    // Wait for the animation to finish before hiding the thumbnail
    thumbnail.addEventListener("animationend", () => {
      thumbnail.style.display = "none"; // Hide thumbnail
      videoFrame.style.display = "block"; // Show video
    });
  });
});
