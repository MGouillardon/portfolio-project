import LocomotiveScroll from 'locomotive-scroll';

export default {
  render: async () => {
    return `
  
    <div data-scroll-container>
        <section class="work" id="work" data-scroll-section>
             
            <h1 class="work__title">
              <span data-scroll data-scroll-delay="0.45" data-scroll-speed="4" data-scroll-position="top">W</span>
              <span data-scroll data-scroll-delay="0.65" data-scroll-speed="1" data-scroll-position="top">O</span>
              <span data-scroll data-scroll-delay="0.25" data-scroll-speed="8" data-scroll-position="top">R</span>
              <span data-scroll data-scroll-delay="0.95" data-scroll-speed="4" data-scroll-position="top">K</span>
            </h1>
            <div class="work__cta-scroll">SCROLL DOWN</div>
    
          
          </section>
          <div class="work__kluik" data-scroll-section>
            <div class="work__kluik__img__container">
              <div class="work__kluik__img">
              <img data-scroll data-scroll-speed="6" src="../../public/kluik.png" alt="kluik project picture">
              </div>
            </div>
            <div class="work__kluik__desc">
              <div class="work__kluik__title" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">KLUIK</div>
              <div class="work__kluik__text"><span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">HTML SCSS Website</span>
              <span data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" >with some JS for basic animation</span> </div>
              <a class="work__kluik__link" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal" href="http://https://github.com/MGouillardon/Kluik" target="_blank">Github link here</a>
            </div>
          </div>

    </div>
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
