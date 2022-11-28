export default {
    render: async () => {
      return `
  
      <section class="contact" id="contact">
          
      </section>
      `;
    },
    after_render: async () => {
      let navbar = await import("../components/Navbar");
      let curtain__menu = await import("../components/Curtain__menu");
      let contact = document.getElementById("contact");
      contact.innerHTML += navbar.default;
      contact.innerHTML += curtain__menu.default;
      let curtain__menu__animation = await import("../scripts/curtain__menu");
      let toggleCurtainMenu = curtain__menu__animation.default;
      toggleCurtainMenu();
    },
  };
  