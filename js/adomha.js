const form_adomha_shahry = document.querySelector(".form_adomha_shahry");
const form_adomha_sanaoy = document.querySelector(".form_adomha_sanaoy");
const loader_shahry = document.querySelector(".loader_shahry");
const loader_sanaoy = document.querySelector(".loader_sanaoy");
const sahem_adomha_shahry = document.querySelector(".sahem_adomha_shahry");
const sahem_adomha_sanaoy = document.querySelector(".sahem_adomha_sanaoy");
///// handle loader//////
window.addEventListener("load", function () {
  form_adomha_shahry.style.visibility = "visible"; // Show the content
  loader_shahry.style.display = "none"; // Hide the loader
});
// //
window.addEventListener("load", function () {
  form_adomha_sanaoy.style.visibility = "visible"; // Show the content
  loader_sanaoy.style.display = "none"; // Hide the loader
});
// // ///////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  sahem_adomha_shahry.addEventListener("click", function (event) {
    event.preventDefault();
    form_adomha_shahry.style.display = "block";
    form_adomha_sanaoy.style.display = "none";
    form_adomha_shahry.animate(
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
// // ///////////////////////////
// // ///////////////////////////
// // ///////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  sahem_adomha_sanaoy.addEventListener("click", function (event) {
    event.preventDefault();

    form_adomha_sanaoy.style.display = "block";
    form_adomha_shahry.style.display = "none";
    form_adomha_sanaoy.animate(
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
// /////////////////////////////
// ////////// handle appear hover of the btns///////////////////

document.addEventListener("DOMContentLoaded", function () {
  sahem_adomha_shahry.addEventListener("click", function () {
    sahem_adomha_shahry.classList.add("active_shahry");
    sahem_adomha_shahry.classList.add("active_shary_arrow");
    sahem_adomha_sanaoy.classList.remove("active_sanaoy");
    sahem_adomha_sanaoy.classList.remove("active_sanaoy_arrow");
  });
});
// //
document.addEventListener("DOMContentLoaded", function () {
  sahem_adomha_sanaoy.addEventListener("click", function () {
    sahem_adomha_sanaoy.classList.add("active_sanaoy");
    sahem_adomha_sanaoy.classList.add("active_sanaoy_arrow");
    sahem_adomha_shahry.classList.remove("active_shahry");
    sahem_adomha_shahry.classList.remove("active_shary_arrow");
  });
});
