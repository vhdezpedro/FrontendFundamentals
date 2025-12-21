const btnAbrir = document.querySelector(".btn-abrir-js");
const overlay = document.querySelector(".side-menu-overlay-js");
const sideMenu = document.querySelector(".side-menu-js");
const menuLinks = document.querySelectorAll(".side-menu-js a");

function abrirMenu() {
  overlay.classList.add("bg-opacity-50", "visible");
  overlay.classList.remove("bg-opacity-0", "invisible");
  sideMenu.classList.add("-translate-x-full");
}

function cerrarMenu() {
  overlay.classList.add("bg-opacity-0", "invisible");
  overlay.classList.remove("bg-opacity-50", "visible");
  sideMenu.classList.remove("-translate-x-full");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", cerrarMenu);
});
