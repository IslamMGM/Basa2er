const form_alem_one = document.querySelector(".form_alem_one");
const form_alem_two = document.querySelector(".form_alem_two");
const form_alem_three = document.querySelector(".form_alem_three");
const form_alem_four = document.querySelector(".form_alem_four");
const form_alem_five = document.querySelector(".form_alem_five");
const form_alem_six = document.querySelector(".form_alem_six");
//
const loader_alem_one = document.querySelector(".loader_alem_one");
const loader_alem_two = document.querySelector(".loader_alem_two");
const loader_alem_three = document.querySelector(".loader_alem_three");
const loader_alem_four = document.querySelector(".loader_alem_four");
const loader_alem_five = document.querySelector(".loader_alem_five");
const loader_alem_six = document.querySelector(".loader_alem_six");
//
const sahem_alem_one = document.querySelector(".sahem_alem_one");
const sahem_alem_two = document.querySelector(".sahem_alem_two");
const sahem_alem_three = document.querySelector(".sahem_alem_three");
const sahem_alem_four = document.querySelector(".sahem_alem_four");
const sahem_alem_five = document.querySelector(".sahem_alem_five");
const sahem_alem_six = document.querySelector(".sahem_alem_six");
///// handle loader//////
window.addEventListener("load", function () {
  form_alem_one.style.visibility = "visible"; // Show the content
  loader_alem_one.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_alem_two.style.visibility = "visible"; // Show the content
  loader_alem_two.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_alem_three.style.visibility = "visible"; // Show the content
  loader_alem_three.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_alem_four.style.visibility = "visible"; // Show the content
  loader_alem_four.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_alem_five.style.visibility = "visible"; // Show the content
  loader_alem_five.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_alem_six.style.visibility = "visible"; // Show the content
  loader_alem_six.style.display = "none"; // Hide the loader
});
// //
// // ///////////////////////////
// // ///////////////////////////
// ////////// handle appear the form by clicking the btns ///////////////////
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_one.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_one.style.display = "block";
    form_alem_one.animate(
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
    form_alem_two.style.display = "none";
    form_alem_three.style.display = "none";
    form_alem_four.style.display = "none";
    form_alem_five.style.display = "none";
    form_alem_six.style.display = "none";
  });
});
// // //
// // //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_two.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_two.style.display = "block";
    form_alem_two.animate(
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
    form_alem_one.style.display = "none";
    form_alem_three.style.display = "none";
    form_alem_four.style.display = "none";
    form_alem_five.style.display = "none";
    form_alem_six.style.display = "none";
  });
});
// // //
// // //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_three.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_three.style.display = "block";
    form_alem_three.animate(
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
    form_alem_one.style.display = "none";
    form_alem_two.style.display = "none";
    form_alem_four.style.display = "none";
    form_alem_five.style.display = "none";
    form_alem_six.style.display = "none";
  });
});
// // //
// // //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_four.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_four.style.display = "block";
    form_alem_four.animate(
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
    form_alem_one.style.display = "none";
    form_alem_two.style.display = "none";
    form_alem_three.style.display = "none";
    form_alem_five.style.display = "none";
    form_alem_six.style.display = "none";
  });
});
// // //
// // //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_five.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_five.style.display = "block";
    form_alem_five.animate(
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
    form_alem_one.style.display = "none";
    form_alem_two.style.display = "none";
    form_alem_three.style.display = "none";
    form_alem_four.style.display = "none";
    form_alem_six.style.display = "none";
  });
});
// // //
// // //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_six.addEventListener("click", function (event) {
    event.preventDefault();
    form_alem_six.style.display = "block";
    form_alem_six.animate(
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
    form_alem_one.style.display = "none";
    form_alem_two.style.display = "none";
    form_alem_three.style.display = "none";
    form_alem_four.style.display = "none";
    form_alem_five.style.display = "none";
  });
});
// // //
// // //
// // ///////////////////////////
// // ///////////////////////////
// ////////// handle appear hover of the btns ///////////////////
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_one.addEventListener("click", function () {
    sahem_alem_one.classList.add("active_alem_one");
    //
    sahem_alem_two.classList.remove("active_alem_two");
    sahem_alem_three.classList.remove("active_alem_three");
    sahem_alem_four.classList.remove("active_alem_four");
    sahem_alem_five.classList.remove("active_alem_five");
    sahem_alem_six.classList.remove("active_alem_six");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_two.addEventListener("click", function () {
    sahem_alem_two.classList.add("active_alem_two");
    //
    sahem_alem_one.classList.remove("active_alem_one");
    sahem_alem_three.classList.remove("active_alem_three");
    sahem_alem_four.classList.remove("active_alem_four");
    sahem_alem_five.classList.remove("active_alem_five");
    sahem_alem_six.classList.remove("active_alem_six");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_three.addEventListener("click", function () {
    sahem_alem_three.classList.add("active_alem_three");
    //
    sahem_alem_one.classList.remove("active_alem_one");
    sahem_alem_two.classList.remove("active_alem_two");
    sahem_alem_four.classList.remove("active_alem_four");
    sahem_alem_five.classList.remove("active_alem_five");
    sahem_alem_six.classList.remove("active_alem_six");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_four.addEventListener("click", function () {
    sahem_alem_four.classList.add("active_alem_four");
    //
    sahem_alem_one.classList.remove("active_alem_one");
    sahem_alem_two.classList.remove("active_alem_two");
    sahem_alem_three.classList.remove("active_alem_three");
    sahem_alem_five.classList.remove("active_alem_five");
    sahem_alem_six.classList.remove("active_alem_six");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_five.addEventListener("click", function () {
    sahem_alem_five.classList.add("active_alem_five");
    //
    sahem_alem_one.classList.remove("active_alem_one");
    sahem_alem_two.classList.remove("active_alem_two");
    sahem_alem_three.classList.remove("active_alem_three");
    sahem_alem_four.classList.remove("active_alem_four");
    sahem_alem_six.classList.remove("active_alem_six");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_alem_six.addEventListener("click", function () {
    sahem_alem_six.classList.add("active_alem_six");
    //
    sahem_alem_one.classList.remove("active_alem_one");
    sahem_alem_two.classList.remove("active_alem_two");
    sahem_alem_three.classList.remove("active_alem_three");
    sahem_alem_four.classList.remove("active_alem_four");
    sahem_alem_five.classList.remove("active_alem_five");
  });
});
// //
