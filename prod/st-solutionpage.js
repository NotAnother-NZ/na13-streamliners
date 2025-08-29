//Script for feature Swiper
document.querySelectorAll('[swiper="feature"]').forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: 1.1,
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: el.querySelector('[swiper-next="feature"]'),
      prevEl: el.querySelector('[swiper-prev="feature"]'),
    },
  });
});

// Script for testimonial Swiper
document.querySelectorAll('[swiper="testimonial"]').forEach((el, index) => {
  const progressBars = el.querySelectorAll(".swiper-progress-bar");
  const testimonialprevbtn = document.querySelectorAll(
    '[swiper-prev="testimonial"]'
  );
  const testimonialnextbtn = document.querySelectorAll(
    '[swiper-next="testimonial"]'
  );

  const testimonialswiper = new Swiper(el, {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: testimonialnextbtn[index],
      prevEl: testimonialprevbtn[index],
    },
    on: {
      init: function () {
        progressBars.forEach((bar) =>
          bar.classList.remove("animate", "active")
        );
        if (progressBars[0]) {
          progressBars[0].classList.add("animate", "active");
        }
      },
      slideChangeTransitionStart: function () {
        progressBars.forEach((bar) =>
          bar.classList.remove("animate", "active")
        );
        if (progressBars[0]) {
          progressBars[0].classList.add("active");
        }
      },
      slideChangeTransitionEnd: function () {
        if (progressBars[0]) {
          progressBars[0].classList.add("animate");
        }
      },
    },
  });
});

function setfeatureslideheight() {
  document.querySelectorAll("[swiper='feature']").forEach((group) => {
    const featureslide = group.querySelectorAll(".feature-swiper-slide");
    let featureslideHeight = 0;

    // Reset heights and find max
    featureslide.forEach((el) => {
      el.style.height = "auto";
      featureslideHeight = Math.max(featureslideHeight, el.offsetHeight);
    });

    // Apply max height to all siblings
    featureslide.forEach((el) => {
      el.style.height = featureslideHeight + "px";
    });
  });
}

// window.addEventListener("load", setfeatureslideheight);
// window.addEventListener("resize", setfeatureslideheight);

// document.addEventListener("DOMContentLoaded", function () {
//   const sourceSection = document.getElementById("hero-section");
//   const targetDiv = document.getElementById("sticky-section");

//   if (sourceSection && targetDiv) {
//     const sectionHeight = sourceSection.offsetHeight;
//     targetDiv.style.height = sectionHeight + "px";
//   }
// });

const footersol = document.querySelector("[footer-space]");
// const mainNavbar = document.querySelector("[navbar]");
const stickbutton = document.getElementById("sticky-button");

// Define separate start values
const isMobilesolution = window.innerWidth <= 768; // adjust this breakpoint if needed
const startValue2 = isMobilesolution ? "top 99%" : "top 50%";

ScrollTrigger.create({
  trigger: footersol,
  start: startValue2,
  //markers: true,
  onEnter: () =>
    gsap.to(stickbutton, { y: "-100%", duration: 0.4, ease: "power2.out" }),
  onLeaveBack: () =>
    gsap.to(stickbutton, { y: "0%", duration: 0.4, ease: "power2.out" }),
});
