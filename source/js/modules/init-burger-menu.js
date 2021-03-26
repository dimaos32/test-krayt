const navigation = document.querySelector('.main-nav');

const initBurgerMenu = () => {
  if (navigation) {
    const toggle = navigation.querySelector('.main-nav__toggle');
    const overlay = navigation.querySelector('.main-nav__overlay');

    const onToggleClick = () => {
      navigation.classList.toggle('main-nav--opened');
    };

    const onOverlayClick = () => {
      navigation.classList.remove('main-nav--opened');
    };

    const onEscPressed = (evt) => {
      if (evt.code === 'Escape') {
        navigation.classList.remove('main-nav--opened');
      }
    };

    toggle.addEventListener('click', onToggleClick);
    overlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscPressed);
  }
};

export {initBurgerMenu};
