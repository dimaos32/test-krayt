import swiper from '../vendor/swiper';

const initIntroducingSlider = () => {
  const introducingSlider = document.querySelector('.introducing__slider');

  if (introducingSlider) {
    let slider = new Swiper('.introducing__slider', {
      speed: 400,
      pagination: {
        el: '.introducing__pagination',
        renderBullet: (index, className) => {
          return '<div class="' + className + '"></div>';
        },
      },
    });
  }
};

const initSliders = () => {
  initIntroducingSlider();
};

export {initSliders};
