import Swiper from '../vendor/swiper';

const galleryWrapper = document.querySelector('[data-slider=gallery]');

export default function initSliders() {
  if (galleryWrapper) {
    const gallerySlider = new Swiper(galleryWrapper, {
      slidesPerView: 'auto',
      spaceBetween: 34,

      breakpoints: {
        1280: {
          slidesPerView: 2,
          spaceBetween: 39,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });

    return gallerySlider;
  }
}
