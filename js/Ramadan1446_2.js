///// handle loader//////
window.addEventListener("load", function () {
  const slowContent = document.querySelector(".form-1");
  const loader = document.querySelector(".loader");

  slowContent.style.visibility = "visible"; // Show the content
  loader.style.display = "none"; // Hide the loader
});
// ////////////////////////////

// ///////////////////
// ///////////////////
// ////////    hide and appear form  ///////////
// ///////////////////
document.addEventListener("DOMContentLoaded", function () {
  const recordBtn = document.querySelector(".sahem");
  const form1 = document.querySelector(".form-1");

  recordBtn.addEventListener("click", function (event) {
    event.preventDefault();

    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 700,
        easing: "ease-in",
        fill: "forwards",
      }
    );
  });
});

// /////////////////////
const recordBtn = document.querySelector(".sahem");
document.addEventListener("DOMContentLoaded", function () {
  recordBtn.addEventListener("click", function () {
    recordBtn.classList.add("active_sahem");
  });
});
// //
