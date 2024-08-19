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
