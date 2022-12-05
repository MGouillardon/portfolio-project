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
              <img data-scroll data-scroll-speed="6" src="/kluik.png" alt="kluik project picture">
              </div>
            </div>
            <div class="work__kluik__desc">
              <div class="work__kluik__title" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">KLUIK</div>
              <div class="work__kluik__text"><span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">HTML SCSS Website</span>
              <span data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" >with some JS for basic animation</span> </div>
              <a class="work__kluik__link" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal" href="https://github.com/MGouillardon/Kluik" target="_blank">Github link here</a>
            </div>
          </div>
          <div class="work__TDEE" data-scroll-section>
            
            <div class="work__TDEE__desc">
              <div class="work__TDEE__title" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">TDEE</div>
              <div class="work__TDEE__text"><span data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal">JS Calculator</span>
              <span data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" >Calculator js with Memphis design inspiration</span> </div>
              <a class="work__TDEE__link" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal" href="https://github.com/MGouillardon/TDEE" target="_blank">Github link here</a>
            </div>
            <div class="work__TDEE__img__container">
              <div class="work__TDEE__img">
              <img data-scroll data-scroll-speed="6" src="/TDEE.png" alt="TDEE project picture">
              </div>
            </div>
          </div>
          <div class="work__quizzos" data-scroll-section>
            <div class="work__quizzos__img__container">
              <div class="work__quizzos__img">
              <img data-scroll data-scroll-speed="6" src="/quizzos.png" alt="quizzos project picture">
              </div>
            </div>
            <div class="work__quizzos__desc">
              <div class="work__quizzos__title" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">QUIZZOS</div>
              <div class="work__quizzos__text"><span data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">Quizz mobile App</span>
              <span data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" >Praticing JS with some API calls</span> </div>
              <a class="work__quizzos__link" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal" href="https://github.com/MGouillardon/quizzos" target="_blank">Github link here</a>
            </div>
          </div>
          <div class="work__awesome" data-scroll-section>
            
            <div class="work__awesome__desc">
              <div class="work__awesome__title" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">Awesome</div>
              <div class="work__awesome__text"><span data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal">OOP PHP Project</span>
              <span data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" >E-shop using oop php, Twig & vite</span> </div>
              <a class="work__awesome__link" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal" href="https://github.com/MGouillardon/e-commerce" target="_blank">Github link here</a>
            </div>
            <div class="work__awesome__img__container">
              <div class="work__awesome__img">
              <img data-scroll data-scroll-speed="6" src="/e-commerce.png" alt="awesome project picture">
              </div>
            </div>
          </div>
    </div>
      `;
  },
  after_render: async () => {
    new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

  },
};
