/* 
// scroll position checker for old navigation to show/hide.
let scrollPos = 0;
const nav = document.querySelector('.navigation');

const checkPosition = () => {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition); */

// too lazy to update every year, so just a basic age calc.
const calcAge = () => {
  const currentYear = new Date().getFullYear();
  const ageElem = document.querySelector(".current-age");

  ageElem.innerHTML += currentYear - 1989;
};

calcAge();

// places full year into the footer.
document.querySelector(".current-year").innerHTML += new Date().getFullYear();

// toggles the navigation menu when you click one of the links.
const navCheckbox = document.querySelector(".mobile-nav__checkbox");
const navLinks = document.querySelectorAll(".mobile-nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navCheckbox.checked = false;
  });
});
