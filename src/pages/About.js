export default {
  render: async () => {
    return `
    <div data-scroll-container>
      <section class="about" id="about">
          
      </section>
      <div/>
      `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let curtain__menu = await import("../components/Curtain__menu");
    let about = document.getElementById("about");
    about.innerHTML += navbar.default;
    about.innerHTML += curtain__menu.default;
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

    let locomotive__import = await import("../scripts/locomotive");
    let locomotive__scroll = locomotive__import.default;
    locomotive__scroll();
  },
};
