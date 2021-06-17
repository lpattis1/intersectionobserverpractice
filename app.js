const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    setTimeout(() => {
      entry.target.classList.add("visible");
    }, 900);

    for (let i = 0; i < links.length; i++) {
      if (entry.target.id === links[3].dataset.link) {
        navbar.classList.add("change");
      } else {
        navbar.classList.remove("change");
      }

      let linkNum = links[i].dataset.link;
      if (entry.target.id === linkNum) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});
