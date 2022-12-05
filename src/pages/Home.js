import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export default {
  render: async () => {
    return `

    <section class="home" id="home">
    <div class="home__left-side">
      <h1 class="home__title" data-splitting="chars">
        <span>Maxime</span><br /> <span>Gouillardon\ </span>
      </h1>
      <p data-splitting class="home__desc">Full Stack Web Developer</p>
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
    let wrapper__animation = await import("../scripts/wrapper__animation");
    let wrapperAnimation = wrapper__animation.default;
    wrapperAnimation();
    Splitting();
  },
};
