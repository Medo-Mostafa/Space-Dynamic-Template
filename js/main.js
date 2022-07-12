let links = document.querySelectorAll(".menu li a"); // Select All links in Header
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 100 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.className === "landing") {
          removeClass(links);
          addClass(links[0]);
        } else if (section.className === link.textContent.toLowerCase()) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
icon.onclick = () => {
  icon.classList.toggle("active");
};
// ------------------------------------ Global Animate Content Function ------------------------------------
let cssStyle = `
transition: 2s ease;
-webkit-transition: 2s ease;
-moz-transition: 2s ease;
-ms-transition: 2s ease;
-o-transition: 2s ease;
opacity:1;  transform:translate(0,0) scale(1);
-webkit-transform:translate(0,0) scale(1);
-moz-transform:translate(0,0) scale(1);
-ms-transform:translate(0,0) scale(1);
-o-transform:translate(0,0) scale(1);`;
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    // Check If Scroll Value Is More Than Element Start Or Not
    if (window.scrollY >= parent.offsetTop - 400) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = cssStyle;
        } else {
          arr.forEach((element) => {
            element.style.cssText = cssStyle;
          });
        }
      });
    }
  });
}
// ------------------------------------ Landing Setion ------------------------------------
let header = document.querySelector("header");
let landingSection = document.querySelector(".landing");
let landingText = document.querySelector(".landing .text");
let landingImage = document.querySelector(".landing img");
window.addEventListener("load", () => {
  header.style.transform = "translate(0,0)";
  landingText.style.cssText = cssStyle;
  landingImage.style.cssText = cssStyle;
});
// ------------------------------------ About Section ------------------------------------
let aboutSection = document.querySelector(".about");
let aboutContainer = document.querySelector(".about .container");
animateContent(aboutSection, aboutContainer);
// ------------------------------------ Services Section ------------------------------------
let servicesSection = document.querySelector(".services");
let skillsSpans = document.querySelectorAll(".services .progress-skills span");
let servicesLeftImage = document.querySelector(".services .container .image");
// ------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > servicesSection.offsetTop - 200) {
    skillsSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});
// ------------------------------------
animateContent(servicesSection, servicesLeftImage);
// ------------------------------------ Portfolio Section ------------------------------------
let portfolioSection = document.querySelector(".portfolio");
let portfolioBoxes = document.querySelectorAll(".portfolio .box");
animateContent(portfolioSection, portfolioBoxes);
// ------------------------------------ Blog Section ------------------------------------
let blogSection = document.querySelector(".blog");
let blogLeftSide = document.querySelector(".blog .left");
let blogRightSide = document.querySelector(".blog .right");
animateContent(blogSection, blogLeftSide, blogRightSide);
