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


  },
};
