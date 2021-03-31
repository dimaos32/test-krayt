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
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: (num) => num < 10 ? '0' + num : num,
        formatFractionTotal: (num) => num < 10 ? '0' + num : num,
      },
      navigation: {
        nextEl: '.spaces__slider-btn-next',
        prevEl: '.spaces__slider-btn-prev',
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 12,
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 12,
        },
      },
    });
  }
};

const initGallerySlider = () => {
  const introducingSlider = document.querySelector('.gallery__slider');

  if (initGallerySlider) {
    let slider = new Swiper('.gallery__slider', {
      speed: 300,
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.gallery__slider-btn-next',
        prevEl: '.gallery__slider-btn-prev',
      },
      breakpoints: {
        1200: {
          spaceBetween: 30,
        },
        600: {
          spaceBetween: 20,
        },
      },
    });
  }
};

const initSliders = () => {
  initIntroducingSlider();
  initSpacesSlider();
  initGallerySlider();
};

export {initSliders};
