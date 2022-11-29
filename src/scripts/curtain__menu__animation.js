let btn = document.getElementById("burger-btn");
let menu__list = document.getElementById("menu__list-js");
let menu__overlay = document.getElementById("menu__overlay-js");

export default async () => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("on");
    menu__list.classList.toggle("on");
    menu__overlay.classList.toggle("on");
  });
};

