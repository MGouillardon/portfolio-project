let btn = document.getElementById("burger-btn");
let menu__list = document.getElementById("menu__list-js");
let menu__overlay = document.getElementById("menu__overlay-js");
let navbar__name = document.getElementById("navbar__name-js");
let menu__footer = document.getElementById("menu__footer-js");

export default () => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("on");
    menu__list.classList.toggle("on");
    menu__overlay.classList.toggle("on");
    navbar__name.classList.toggle("on");
    menu__footer.classList.toggle("on");
  });
};
