$(document).ready(function () {
  $(".menuppal").on("click", "a", function (e) {
    // Opcional: evitar comportamiento por defecto si no quieres que navegue
    // e.preventDefault();

    const $this = $(this);

    // Remover clase de todos los links dentro del menú
    $this.closest(".menuppal").find("a").removeClass("activeLink");

    // Agregar clase al link clickeado
    $this.addClass("activeLink");
  });
});
