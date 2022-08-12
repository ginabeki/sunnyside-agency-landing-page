const humburger = document.getElementById("humburger");
const navMenu = document.getElementById("nav-menu");
humburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
