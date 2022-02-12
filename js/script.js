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
