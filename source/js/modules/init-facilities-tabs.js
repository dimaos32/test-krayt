const facilitiesAlbum = document.querySelector('.facilities__album');

const initFacilitiesTabs = () => {
  if (facilitiesAlbum) {
    const tabs = facilitiesAlbum.querySelector('.facilities__tabs');
    const photos = facilitiesAlbum.querySelector('.facilities__photos');

    const photoHeight = photos.querySelector('img').height;

    const onTabClick = (evt) => {
      const tab = evt.target.closest('.facilities__tab');
      const currentTab = facilitiesAlbum.querySelector('.facilities__tab--current');

      if (tab && !tab.closest('.facilities__tab--current')) {
        const shift = photoHeight * Number(tab.id);

        tab.classList.add('facilities__tab--current');
        currentTab.classList.remove('facilities__tab--current');

        photos.style.transform = `translateY(-${shift}px)`;
      }
    };

    tabs.addEventListener('click', onTabClick);
  }
};

export {initFacilitiesTabs};
