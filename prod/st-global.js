const humbergerbtn = document.querySelector("[nav-menu-btn]");
const CloseBtn = document.querySelector("[nav-menu='close']");
const OpenBtn = document.querySelector("[nav-menu='open']");

const observer = new MutationObserver(() => {
  if (humbergerbtn.classList.contains("w--open")) {
    CloseBtn.style.display = "flex";
    OpenBtn.style.display = "none";
    // CloseBtn.style.opacity = "1";
    // CloseBtn.style.pointerEvents = "auto";
    // OpenBtn.style.opacity = "0";
    // OpenBtn.style.pointerEvents = "none";
  } else {
    CloseBtn.style.display = "none";
    OpenBtn.style.display = "flex";
    // CloseBtn.style.opacity = "0";
    // CloseBtn.style.pointerEvents = "none";
    // OpenBtn.style.opacity = "1";
    // OpenBtn.style.pointerEvents = "auto";
  }
});

observer.observe(humbergerbtn, {
  attributes: true,
  attributeFilter: ["class"],
});

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
console.log(scrollBarWidth);

const navbar = document.querySelector("[navbar]");
new MutationObserver(() =>
  navbar.classList.toggle(
    "menu-open",
    humbergerbtn.classList.contains("w--open")
  )
).observe(humbergerbtn, { attributes: true, attributeFilter: ["class"] });

// Script for announcementbar start here
const announcementbar = document.querySelector("[announce-bar]");
if (announcementbar) {
  let announcementHeight = announcementbar.scrollHeight + "px";
  announcementbar.style.height = announcementHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      announcementbar.style.height = "0px";
    } else {
      announcementbar.style.height = announcementHeight;
    }
  });
}

const footeSpace = document.querySelector("[footer-space]");
const mainFooter = document.querySelector("[mainfooter]");

function updateFooterSpace() {
  if (mainFooter && footeSpace) {
    const footerHeight = mainFooter.scrollHeight + "px";
    console.log(footerHeight);
    footeSpace.style.height = footerHeight;
  }
}

// Run on initial load
updateFooterSpace();

// Run on window resize with debouncing
let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateFooterSpace, 150); // Adjust delay if needed
});

// Start js for adding the class in body on scroll
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector('[hero="section"]');

  if (!heroSection) return;

  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight) {
      document.body.classList.add("page-scrolled");
    } else {
      document.body.classList.remove("page-scrolled");
    }
  });
});
// End js for adding the class in body on scroll

// const footerWrap = document.querySelector("[footer-space]");
// const mainNavbar = document.querySelector("[navbar]");

// // Define separate start values
// const isMobile = window.innerWidth <= 768; // adjust this breakpoint if needed
// const startValue = isMobile ? "top 99%" : "top 50%";

// ScrollTrigger.create({
//   trigger: footerWrap,
//   start: startValue,
//   //markers: true,
//   onEnter: () =>
//     gsap.to(mainNavbar, { y: "-100%", duration: 0.4, ease: "power2.out" }),
//   onLeaveBack: () =>
//     gsap.to(mainNavbar, { y: "0%", duration: 0.4, ease: "power2.out" }),
// });

const footerWrap = document.querySelector("[footer-space]");
const mainNavbar = document.querySelector("[navbar]");

if (footerWrap && mainNavbar) {
  // Define separate start values
  const isMobile = window.innerWidth <= 768; // adjust breakpoint if needed
  const startValue = isMobile ? "top 99%" : "top 50%";

  ScrollTrigger.create({
    trigger: footerWrap,
    start: startValue,
    // markers: true,
    onEnter: () =>
      gsap.to(mainNavbar, { y: "-100%", duration: 0.4, ease: "power2.out" }),
    onLeaveBack: () =>
      gsap.to(mainNavbar, { y: "0%", duration: 0.4, ease: "power2.out" }),
  });
}

//Script for overflow hidden and start,
$('[overflowhide="active"]').click(function (e) {
  e.preventDefault();
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  $("body").css("overflow", "hidden");
});

$('[overflowhide="inactive"]').click(function (e) {
  e.preventDefault();
  $("body").css("overflow", "auto");
  document.body.style.paddingRight = "";
});

$(".nav-close").click(function () {
  $(".nav-menu-btn").click();
});

document.addEventListener("DOMContentLoaded", function () {
  function addClickListeners() {
    var navMenuLinks = document.querySelectorAll("[navbar] .w-nav-menu a");
    var closeButton = document.querySelector("[nav-menu-btn]");

    // Prevent adding duplicate listeners
    navMenuLinks.forEach(function (link) {
      link.removeEventListener("click", handleClick); // remove existing
      link.addEventListener("click", handleClick); // add new
    });

    function handleClick() {
      if (closeButton) closeButton.click();
    }
  }

  addClickListeners();

  // Reattach on resize (optional, in case elements change)
  window.addEventListener("resize", addClickListeners);
});
