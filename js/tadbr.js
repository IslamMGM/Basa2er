document.addEventListener("DOMContentLoaded", function () {
  // Get all the track elements and details
  const tracks = document.querySelectorAll(".tadbr-tracks div");
  const details = document.querySelectorAll(".track-details > div");

  // Function to hide all details
  function hideAllDetails() {
    details.forEach((detail) => (detail.style.display = "none"));
    tracks.forEach((track) => track.classList.remove("active")); // Remove 'active' class from all tracks
  }

  // Add click event listeners to each track element
  tracks.forEach((track) => {
    track.addEventListener("click", function () {
      // Hide all details first
      hideAllDetails();

      // Get the class name of the clicked track
      const clickedTrackClass = this.className;

      // Show the corresponding details
      const detailToShow = document.querySelector(
        `.${clickedTrackClass}-details`
      );
      if (detailToShow) {
        detailToShow.style.display = "grid";
      }

      // Add 'active' class to the clicked track to show the pseudo-element
      this.classList.add("active");
    });
  });

  // Initially hide all details and show the first one by default
  hideAllDetails();
  const firstDetail = document.querySelector(".track-one-details");
  if (firstDetail) {
    firstDetail.style.display = "grid";
    document.querySelector(".track-one").classList.add("active"); // Make the first track active by default
  }
});
