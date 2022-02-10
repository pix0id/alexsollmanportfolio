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

window.addEventListener('scroll', checkPosition);


const calcAge = () => {
  const currentYear = new Date().getFullYear();
  const ageElem = document.querySelector('.current-age');

  
  ageElem.innerHTML += currentYear - 1989;

}

calcAge();

document.querySelector('.current-year').innerHTML += new Date().getFullYear();