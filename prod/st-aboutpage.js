const teamswiper = new Swiper('[swiper="team"]', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2.6,
    },

    1024: {
      slidesPerView: 3.6,
    },
  },
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //    disableOnInteraction: false,
  //   },
  navigation: {
    nextEl: '[swiper-next="team"]',
    prevEl: '[swiper-prev="team"]',
  },
});

const historyswiper = new Swiper('[swiper="history"]', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //    disableOnInteraction: false,
  //   },
  navigation: {
    nextEl: '[swiper-next="history"]',
    prevEl: '[swiper-prev="history"]',
  },
});
