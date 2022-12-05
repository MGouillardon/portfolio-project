export default {
  render: async () => {
    return `
    <div id="curtain__menu-js"></div>
    <nav class="navbar">
    <div class="navbar__name" id="navbar__name-js">Portfolio 2022</div>
    <div class="navbar__line"></div>
    <ul class="navbar__list">
      <li class="navbar__item"><a href="#">Home</a></li>
      <li class="navbar__item"><a href="#work">Work</a></li>
      <li class="navbar__item"><a href="#about">About</a></li>
      <li class="navbar__item"><a href="#contact">Contact</a></li>
    </ul>
    <div class="navbar__burger-btn" id="burger-btn">
      <span></span>
    </div>
</nav>
      `;
  },
  after_render: async () => {
    let curtain__menu__component = await import("./Curtain__menu");
    let curtain__menu = document.getElementById('curtain__menu-js');
    curtain__menu.innerHTML += curtain__menu__component.default;
    let btn = document.getElementById("burger-btn");
    let menu__list = document.getElementById("menu__list-js");
    let menu__overlay = document.getElementById("menu__overlay-js");
    btn.addEventListener("click", () => {
      btn.classList.toggle("on");
      menu__list.classList.toggle("on");
      menu__overlay.classList.toggle("on");
    });


  },
};
