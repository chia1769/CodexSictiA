/* Este archivo contiene interacciones pequeñas; la página funciona sin dependencias externas. */

// Muestra el año actual en el pie de página para no tener que cambiarlo manualmente.
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Añade una línea sutil al encabezado cuando la persona empieza a desplazarse.
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Permite abrir y cerrar el menú de navegación en pantallas pequeñas.
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Al elegir una sección desde el menú móvil, este se cierra automáticamente.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
