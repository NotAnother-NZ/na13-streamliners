const swiper = new Swiper('[swiper="career-testimonial"]', {
  slidesPerView: 1,
  effect: "fade",
  loop: true,

  navigation: {
    nextEl: '[swiper-next="ctestimonial"]',
    prevEl: '[swiper-prev="ctestimonial"]',
  },
});
