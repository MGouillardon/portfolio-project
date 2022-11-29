import LocomotiveScroll from 'locomotive-scroll';

export default {
  render: async () => {
    return `
  
      <section class="work" id="work">
        <div class="work__content">
          <div data-scroll-container>
            <div class="test" data-scroll-section><div/>
          <div/>
          <div/>
      </section>
      `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let curtain__menu = await import("../components/Curtain__menu");
    let work = document.getElementById("work");
    work.innerHTML += navbar.default;
    work.innerHTML += curtain__menu.default;
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
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
  },
};
