// show and hide mobile nav
const tog = document.querySelector(".toogle");
const topp = document.querySelector(".top");
const bot = document.querySelector(".bot");
const mid = document.querySelector(".mid");
const mobNav = document.querySelector(".m-nav");

tog.addEventListener("change", function () {
  const mobNav = document.querySelector(".m-nav");
  const isChecked = this.checked;

  if (isChecked) {
    mobNav.classList.add("show-m-nav");
    //
    const m_li = document.querySelectorAll(".m-lin");

    m_li.forEach((element) => {
      // Your code here
      element.classList.add("trans");
    });

    //
    topp.style.transform = "translateY(255%)rotate(45deg)";
    topp.style.width = "37px";
    //
    bot.style.transform = "translateY(-255%) rotate(-45deg)";
    bot.style.width = "37px";
    bot.style.boxshadow = "0 0 10px #495057";
    //
    mid.style.transform = "translateX(-20px)";
    mid.style.opacity = "0";
  } else {
    const m_li = document.querySelectorAll(".m-lin");
    m_li.forEach((element) => {
      // Your code here
      element.classList.remove("trans");
    });
    mobNav.classList.remove("show-m-nav");
    topp.style.transform = "translateY(0%)rotate(0deg)";
    topp.style.width = "30px";
    //
    bot.style.transform = "translateY(0%)rotate(0deg)";
    bot.style.width = "30px";
    bot.style.boxshadow = "0 0 10px #495057";
    //
    mid.style.transform = "translateY(0%)rotate(0deg)";
    mid.style.opacity = "1";
  }
});
// Add an event listener to the body
document.body.addEventListener("click", function (event) {
  // Check if the clicked element is not part of m-nav or its children
  var mNav = document.querySelector(".m-nav");
  if (!mNav.contains(event.target)) {
    // Remove the show-m-nav class if it exists
    mNav.classList.remove("show-m-nav");
    const m_li = document.querySelectorAll(".m-lin");
    m_li.forEach((element) => {
      // Your code here
      element.classList.remove("trans");
    });
    // //////////
    topp.style.transform = "translateY(0%)rotate(0deg)";
    topp.style.width = "30px";
    //
    bot.style.transform = "translateY(0%)rotate(0deg)";
    bot.style.width = "30px";
    bot.style.boxshadow = "0 0 10px #495057";
    //
    mid.style.transform = "translateY(0%)rotate(0deg)";
    mid.style.opacity = "1";
  }
  if (tog && event.target !== tog) {
    tog.checked = false;
  }
});

/////////////////////////////////////////////////////
const link_a = document.querySelectorAll(".d-links");

function activeLink() {
  link_a.forEach(function (item) {
    item.classList.remove("d-links-active");
  });
  this.classList.add("d-links-active");

  // Store the active link's ID in localStorage
  localStorage.setItem("activeLink", this.id);
}

link_a.forEach(function (item) {
  item.addEventListener("click", activeLink);
});

// On page load, check localStorage and apply the active class to the stored link
window.addEventListener("DOMContentLoaded", (event) => {
  const activeLinkId = localStorage.getItem("activeLink");
  if (activeLinkId) {
    const activeLinkElement = document.getElementById(activeLinkId);
    if (activeLinkElement) {
      activeLinkElement.classList.add("d-links-active");
    }
  }
});
