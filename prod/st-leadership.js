if (window.innerWidth <= 768) {
  const teamcard = document.querySelectorAll("[teamcard]");

  teamcard.forEach(function (card) {
    const teamdetails = card.querySelector("[team-richtext]");
    const teambtn = card.querySelector("[team-btn]");

    const richtextheight = teamdetails.offsetHeight;
    // teamdetails.style.height = richtextheight + "px";
    teamdetails.style.height = "auto";

    teamdetails.classList.add("text-style-4lines");
    teambtn.addEventListener("click", function () {
      const notexpanded = teamdetails.classList.contains("text-style-4lines");
      if (notexpanded) {
        teamdetails.classList.remove("text-style-4lines");
        teambtn.textContent = "Read less";
      } else {
        teamdetails.classList.add("text-style-4lines");
        teambtn.textContent = "Read more";
      }
    });
  });
}
