const NAV_CONTAINER_MOBILE = document.querySelector("#nav-container-mobile");
const HAMBURGER_OPEN = document.querySelector("#hamburger-open");
const HAMBURGER_CLOSE = document.querySelector("#hamburger-close");

HAMBURGER_OPEN.addEventListener("click", () => {
  NAV_CONTAINER_MOBILE.classList.add("visible");
})

HAMBURGER_CLOSE.addEventListener("click", () => {
  NAV_CONTAINER_MOBILE.classList.remove("visible");
})