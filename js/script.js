/****************************/
/*Setting Current Year*/
/****************************/

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/****************************/
/*Enabling Mobile Navigation*/
/****************************/

const buttonEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

buttonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/****************************/
/*Enabling Smooth scrolling
/****************************/

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scrolling to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scrolling to other sections
    if (href !== "#" && href.startsWith("#")) {
      const scrollEl = document.querySelector(href);
      scrollEl.scrollIntoView({ behavior: "smooth" });
    }

    //Hiding Mobile nvaigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/****************************/
/*Sticky Navigation
/****************************/

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }

// checkFlexGap();
