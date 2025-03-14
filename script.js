function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("show");
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("navMenu");
  const burger = document.querySelector(".burger-menu");
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    closeMenu();
  }
});