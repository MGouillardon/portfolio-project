export default {
  render: async () => {
    return `

    <section class="home" id="home">
      <div class="home__left-side">
        <h1 class="home__title">
          <span>Maxime</span><br /><span>Gouillardon</span>
        </h1>
      </div>
      <div class="home__right-side"></div>
    </section>
    
    `;
  },
  after_render: async () => {
    let navbar = await import("../components/Navbar");
    let homepage = document.getElementById("home");
    homepage.innerHTML += navbar.default;
    let btn = document.getElementById("burger-btn");
    btn.addEventListener("click", () => {
      btn.classList.toggle("on");
    });
  },
};
