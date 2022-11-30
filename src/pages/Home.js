export default {
  render: async () => {
    return `

    <section class="home" id="home">
    <div class="home__left-side">
      <h1 class="home__title">
        <span>Maxime</span><br /><span>Gouillardon</span>
      </h1>
      <p class="home__desc">Full stack Web Developer</p>
    </div>
    <div class="home__right-side">
      <div
        class="wrapper"
        id="wrapper-js"
        data-configuration="1"
        data-roundness="1"
      >
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
        <div class="wrapper__shape"></div>
      </div>
    </div>
    <footer class="home__footer" id="home__footer-js">
      <ul class="home__footer__list">
        <li class="home__footer__item">Based in Dijon</li>
        <li class="home__footer__item">Available to work</li>
        <li class="home__footer__item">
          <a href="mailto:maxime.gouillardon@gmail.com" target="_blank"
            >maxime.gouillardon@gmail.com</a
          >
        </li>
        <li class="home__footer__item">
          <a href="http://github.com/MGouillardon" target="_blank"
            >https://github.com/MGouillardon</a
          >
        </li>
      </ul>
    </footer>
    </section>

    `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let curtain__menu = await import("../components/Curtain__menu");
    let home = document.getElementById("home");
    home.innerHTML += navbar.default;
    home.innerHTML += curtain__menu.default;
    // let curtain__menu__animation = await import("../scripts/curtain__menu__animation");
    // let toggleCurtainMenu =  curtain__menu__animation.default;
    // toggleCurtainMenu();
    let btn = document.getElementById("burger-btn");
    let menu__list = document.getElementById("menu__list-js");
    let menu__overlay = document.getElementById("menu__overlay-js");
    btn.addEventListener("click", () => {
      btn.classList.toggle("on");
      menu__list.classList.toggle("on");
      menu__overlay.classList.toggle("on");
    });
    let wrapper__animation = await import("../scripts/wrapper__animation");
    let wrapperAnimation = wrapper__animation.default;
    wrapperAnimation();
  },
};
