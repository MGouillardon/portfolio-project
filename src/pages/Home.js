// import toggleNavbar from "../scripts/navbar"

export default {
  render: async () => {
    return `

    <section class="home" id="home">
    <div class="home__overlay" id="home__overlay-js">
      <ul class="home__list" id="home__list-js">
        <li class="home__item"><a href="#">HOME</a></li>
        <li class="home__item"><a href="#work">WORK</a></li>
        <li class="home__item"><a href="#about">ABOUT</a></li>
        <li class="home__item"><a href="#contact">CONTACT</a></li>
      </ul>
      </div>
      <div class="home__left-side">
        <h1 class="home__title">
          <span>Maxime</span><br/><span>Gouillardon</span>
        </h1>
        <p class="home__content">Full stack Web Developer</p>
      </div>
      <div class="home__right-side"></div>
    </section>

    `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let home = document.getElementById("home");
    home.innerHTML += navbar.default;
    let navbar__script = await import("../scripts/navbar");
    let toggleNavbar = navbar__script.default;
    toggleNavbar();

  },
};
