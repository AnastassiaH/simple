// nav scroll
document.addEventListener("DOMContentLoaded", () => {
  const wrapperWidth = document.querySelector(".wrapper").offsetWidth;
  const navMenu = document.querySelector(".menu");
  navMenu.style.width = wrapperWidth + "px";

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll <= 135) {
      let newTop = 135 - scroll;
      navMenu.style.top = newTop + "px";
    } else {
      navMenu.style.top = "0px";
    }
  });
});

// circle click
const advantagesCircles = document.querySelector(".advantages-circles");
let isClicked = true;
advantagesCircles.addEventListener("click", (event) => {
  const isCircle = event.target.closest(".circle");
  const circleImg = isCircle.querySelector("img");
  const circleInfo = isCircle.querySelector(".circle-info");
  if (isCircle && isClicked) {
    circleImg.style.display = "none";
    circleInfo.style.display = "flex";
    isClicked = false;
  } else {
    circleImg.style.display = "flex";
    circleInfo.style.display = "none";
    isClicked = true;
  }
});

//slider
let slideIndex = 1;

const plusSlide = (index) => {
  showSlides((slideIndex += index));
};

const showSlides = (index) => {
  const slides = document.getElementsByClassName("slide");
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  Array.from(slides).forEach((elem) => {
    elem.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);

// date info
const publicationDate = document.querySelector(".publication-date");
const publicationDateValue = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

publicationDate.textContent = `${
  weekDays[publicationDateValue.getDay()]
} ${publicationDateValue.toLocaleDateString("en-US")}`;
