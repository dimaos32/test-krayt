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

const initSpacesSlider = () => {
  const spacesSlider = document.querySelector('.spaces__slider');

  if (spacesSlider) {
    let slider = new Swiper('.spaces__slider', {
      speed: 400,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.spaces__slider-btn--next',
        prevEl: '.spaces__slider-btn--prev',
      },
    });
  }
};

const initSliders = () => {
  initIntroducingSlider();
  initSpacesSlider();
};

export {initSliders};
