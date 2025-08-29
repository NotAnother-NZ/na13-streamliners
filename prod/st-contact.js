document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.querySelector("[coutrydropdown]");
  if (countrySelect) {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((res) => res.json())
      .then((countries) => {
        countrySelect.innerHTML =
          '<option value="" >Select your country</option>' +
          countries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map(
              (c) =>
                `<option value="${c.name.common}">${c.name.common}</option>`
            )
            .join("");
      })
      .catch(() => {
        countrySelect.innerHTML =
          '<option value="">Unable to load countries</option>';
      });
  }

  const numberInputs = document.querySelectorAll('input[type="number"]');

  numberInputs.forEach((input) => {
    input.addEventListener("keydown", function (e) {
      if (["e", "E", "-"].includes(e.key)) {
        e.preventDefault();
      }
    });
  });

  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9+\-() ]/g, "");
    });
  });

  // $(function() {
  //     $('#myForm').on('submit', function() {
  //         $(this).find('p.error').html('');
  //     });
  //     $('#myForm').validate({
  //         errorPlacement: function(error, element) {
  //             var errorContainer = element.parent().find('p.error');
  //             if (errorContainer.length) {
  //                 errorContainer.html(error.text());
  //             }
  //         },
  //         success: function(label, element) {
  //             $(element).parent().find('p.error').html('');
  //         }
  //     });
  // });
});

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
