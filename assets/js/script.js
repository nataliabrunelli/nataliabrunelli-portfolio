//SCROLL SUAVE
import initSmoothScroll from "./scrollSuave.js";
initSmoothScroll()

// TOGGLE THEME
const toggleTheme = document.getElementById("toggleTheme");
const rootHTML = document.documentElement;

function changeTheme() {
  const currentTheme = rootHTML.getAttribute("data-theme");

  currentTheme === "dark" ? rootHTML.setAttribute("data-theme", "light") : rootHTML.setAttribute("data-theme", "dark");
  
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon");
}

toggleTheme.addEventListener("click", changeTheme);

// TOGGLE MENU
const menuLink = document.querySelectorAll(".menu-link")

menuLink.forEach(link => link.addEventListener("click", () => {
  menuLink.forEach(i => i.classList.remove("active"));
  link.classList.add("active");
}));

// TOGGLE COURSES
const accordionBtn = document.querySelectorAll(".accordion-header");

accordionBtn.forEach(header => header.addEventListener("click", () => {
  const accordionItem = header.parentElement;

  accordionItem.classList.toggle("active");
}))