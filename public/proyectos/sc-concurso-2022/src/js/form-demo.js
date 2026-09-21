const form = document.getElementById("form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const requiredFields = ["nombre", "email", "region", "receta"];
  const hasEmptyFields = requiredFields.some((field) => !data.get(field));

  if (hasEmptyFields) {
    alert("Debe completar todos los campos.");
    return;
  }

  if (!emailPattern.test(data.get("email"))) {
    alert("Ingrese un email válido.");
    return;
  }

  alert("Demo histórica: el envío de datos está deshabilitado.");
});
