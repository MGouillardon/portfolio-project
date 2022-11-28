let btn = document.getElementById("burger-btn");
let home__list = document.getElementById("home__list-js");
let home__overlay = document.getElementById("home__overlay-js");
let navbar__name = document.getElementById("navbar__name-js");

export default () => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("on");
    home__list.classList.toggle("on");
    home__overlay.classList.toggle("on");
    navbar__name.classList.toggle("on");
  });
};
