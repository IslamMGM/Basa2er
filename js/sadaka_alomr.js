// function calculateDays() {
//   const date_of_birth = document.getElementById("date_of_birth").value;
//   if (!date_of_birth) {
//     alert("من فضلك إختار تاؤيخ صحيح");
//     return;
//   }
//   const birthDate = new Date(date_of_birth);
//   const currentDate = new Date();
//   const diffTime = currentDate - birthDate;
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   document.getElementById("number_of_days").textContent = diffDays;
// }

function calculateDays() {
  const date_of_birth = document.getElementById("date_of_birth").value;
  if (!date_of_birth) {
    alert("من فضلك إختار تاؤيخ صحيح");
    return;
  }
  const birthDate = new Date(date_of_birth);
  const currentDate = new Date();
  const diffTime = currentDate - birthDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("number_of_days").textContent = diffDays;
}
// ////////////////////////////
// ////////////////////////////
const sadaka_an_nafsy = document.querySelector(".sadaka_an_nafsy");
const sadaka_an_father = document.querySelector(".sadaka_an_father");
const sadaka_an_mother = document.querySelector(".sadaka_an_mother");
const sadaka_an_wife = document.querySelector(".sadaka_an_wife");
const sadaka_an_son = document.querySelector(".sadaka_an_son");

//
//
document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.querySelector(".calculator_box");

  sadaka_an_nafsy.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    sadaka_an_nafsy.classList.add("active_sadaka_an");
    sadaka_an_father.classList.remove("active_sadaka_an");
    sadaka_an_mother.classList.remove("active_sadaka_an");
    sadaka_an_wife.classList.remove("active_sadaka_an");
    sadaka_an_son.classList.remove("active_sadaka_an");
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.querySelector(".calculator_box");

  sadaka_an_father.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    sadaka_an_father.classList.add("active_sadaka_an");
    sadaka_an_nafsy.classList.remove("active_sadaka_an");
    sadaka_an_mother.classList.remove("active_sadaka_an");
    sadaka_an_wife.classList.remove("active_sadaka_an");
    sadaka_an_son.classList.remove("active_sadaka_an");
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.querySelector(".calculator_box");

  sadaka_an_mother.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    sadaka_an_mother.classList.add("active_sadaka_an");
    sadaka_an_nafsy.classList.remove("active_sadaka_an");
    sadaka_an_father.classList.remove("active_sadaka_an");
    sadaka_an_wife.classList.remove("active_sadaka_an");
    sadaka_an_son.classList.remove("active_sadaka_an");
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.querySelector(".calculator_box");

  sadaka_an_wife.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    sadaka_an_wife.classList.add("active_sadaka_an");
    sadaka_an_nafsy.classList.remove("active_sadaka_an");
    sadaka_an_father.classList.remove("active_sadaka_an");
    sadaka_an_mother.classList.remove("active_sadaka_an");
    sadaka_an_son.classList.remove("active_sadaka_an");
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.querySelector(".calculator_box");

  sadaka_an_son.addEventListener("click", function (event) {
    event.preventDefault();
    form1.style.display = "block";
    form1.animate(
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    sadaka_an_son.classList.add("active_sadaka_an");
    sadaka_an_nafsy.classList.remove("active_sadaka_an");
    sadaka_an_father.classList.remove("active_sadaka_an");
    sadaka_an_mother.classList.remove("active_sadaka_an");
    sadaka_an_wife.classList.remove("active_sadaka_an");
  });
});
//
