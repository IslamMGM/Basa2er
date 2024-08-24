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
// const link_a = document.querySelectorAll(".d-links");

// function activeLink() {
//   link_a.forEach(function (item) {
//     item.classList.remove("d-links-active");
//   });
//   this.classList.add("d-links-active");

//   // Store the active link's ID in localStorage
//   localStorage.setItem("activeLink", this.id);
// }

// link_a.forEach(function (item) {
//   item.addEventListener("click", activeLink);
// });

// // On page load, check localStorage and apply the active class to the stored link
// window.addEventListener("DOMContentLoaded", (event) => {
//   const activeLinkId = localStorage.getItem("activeLink");
//   if (activeLinkId) {
//     const activeLinkElement = document.getElementById(activeLinkId);
//     if (activeLinkElement) {
//       activeLinkElement.classList.add("d-links-active");
//     }
//   }
// });

var btn = document.getElementById("to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ////// make page's link is active /////

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".d-links");
//   const currentPath = window.location.pathname.split("/").pop(); // Extracts 'index.html' from '/Website/Basa2er/index.html'

//   console.log("Current Path: ", currentPath);

//   navLinks.forEach((link) => {
//     console.log("Link Href: ", link.getAttribute("href"));

//     // Compare the href attribute with the currentPath
//     if (link.getAttribute("href") === currentPath) {
//       link.classList.add("active_navlink");
//       console.log("Active class added to: ", link);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".d-links");
  let currentPath = window.location.pathname.split("/").pop(); // Extracts the filename from the URL

  console.log("Current Path before check: ", currentPath);

  // If currentPath is empty, set it to 'index.html'
  if (currentPath === "") {
    currentPath = "index.html";
  }

  console.log("Current Path after check: ", currentPath);

  navLinks.forEach((link) => {
    console.log("Link Href: ", link.getAttribute("href"));

    // Compare the href attribute with the currentPath
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active_navlink");
      console.log("Active class added to: ", link);
    }
  });
});

// change the color of header after scrolling //

const header = document.querySelector(".main-header");
const scrollThreshold = 520;

window.addEventListener("scroll", function () {
  if (window.scrollY >= scrollThreshold) {
    header.classList.add("active_header");
  } else {
    header.classList.remove("active_header");
  }
});
