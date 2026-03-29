const animations = {
  "aos-fade-up": "fade-up",
  "aos-fade-down": "fade-down",
  "aos-fade-left": "fade-left",
  "aos-fade-right": "fade-right",
  "aos-zoom-in": "zoom-in",
};

Object.entries(animations).forEach(([className, animation]) => {
  document.querySelectorAll(`.${className}`).forEach((el) => {
    el.setAttribute("data-aos", animation);
  });
});

AOS.init({
  once: false,
  mirror: true,
});
