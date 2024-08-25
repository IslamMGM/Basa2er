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
document.addEventListener("DOMContentLoaded", function () {
  const recordBtn = document.querySelector(".record-btn");
  const updateBtn = document.querySelector(".update-btn");
  const form1 = document.querySelector(".form-1");
  const form2 = document.querySelector(".form-2");

  recordBtn.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form2.style.display = "none";

    // Add 'active' class to recordBtn and remove from updateBtn
    recordBtn.classList.add("active_btn");
    updateBtn.classList.remove("active_btn");
  });

  updateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "none";
    form2.style.display = "block";

    // Add 'active' class to updateBtn and remove from recordBtn
    updateBtn.classList.add("active_btn");
    recordBtn.classList.remove("active_btn");
  });
});
