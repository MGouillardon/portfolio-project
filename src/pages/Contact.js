export default {
  render: async () => {
    return `     
    <section class="contact" id="contact">
      <div class="contact__content">
        <p class="contact__content__text">Send me a message</p>
        <h1 class="contact__content__mail">maxime.gouillardon@gmail.com</h1>
        <div class="contact__content__links">
          Or you can find me on <a href="https://www.linkedin.com/in/maxime-gouillardon-170833176/" target="_blank">LinkedIn</a> /
          <a href="https://github.com/MGouillardon" target="_blank">Github</a>
        </div>
      </div>
    </section>
      `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let curtain__menu = await import("../components/Curtain__menu");
    let contact = document.getElementById("contact");
    contact.innerHTML += navbar.default;
    contact.innerHTML += curtain__menu.default;
    // let curtain__menu__animation = await import("../scripts/curtain__menu__animation");
    // let toggleCurtainMenu = curtain__menu__animation.default;
    // toggleCurtainMenu();
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
