if (window.AOS) {
  AOS.init({
    once: false,
    mirror: true,
  });
}

const nav = document.querySelector("[data-site-nav]");
const navToggle = document.querySelector("[data-site-nav-toggle]");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const header = document.querySelector(".site-header");

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const closeNav = () => {
  if (!nav || !navToggle) return;

  nav.classList.remove("site-nav--open");
  navToggle.setAttribute("aria-expanded", "false");
};

if (nav && navToggle && navLinks.length) {
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveLink = () => {
    const headerHeight = header?.offsetHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 32;
    const isNearBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    let activeSection = navSections[0];

    if (isNearBottom) {
      activeSection = navSections[navSections.length - 1];
    } else {
      navSections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          activeSection = section;
        }
      });
    }

    if (activeSection) {
      setActiveLink(activeSection.id);
    }
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("site-nav--open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").replace("#", "");

      setActiveLink(targetId);
      closeNav();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 769px)").matches) {
      closeNav();
    }
  });

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("load", updateActiveLink);
  updateActiveLink();
}
