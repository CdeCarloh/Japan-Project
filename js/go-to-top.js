window.onscroll = function () {
  const BUTTON_UP = document.getElementById("up");
  const BANNER = document.querySelector('.banner-image'); // Asegúrate de que este sea el selector correcto para tu banner
  const BANNER_POSITION = BANNER.getBoundingClientRect().bottom; // Obtiene la posición inferior del banner

  if (BANNER_POSITION > 0) {
      // Si el banner está visible (en la parte superior de la página)
      BUTTON_UP.style.display = "none"; // Oculta el botón
  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      BUTTON_UP.style.display = "block"; // Muestra el botón si se ha desplazado
  } else {
      BUTTON_UP.style.display = "none"; // Oculta el botón si está en la parte superior
  }

  const FOOTER = document.querySelector('.footer-container');
  const FOOTER_POSITION = FOOTER.getBoundingClientRect().top;

  if (FOOTER_POSITION < window.innerHeight) {
      BUTTON_UP.style.display = "none"; // También oculta el botón si se ha llegado al footer
  }
};

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

document.getElementById("up").onclick = scrollToTop;

// Asegúrate de ocultar el botón al cargar la página
window.onload = function () {
  const BUTTON_UP = document.getElementById("up");
  const BANNER = document.querySelector('.banner-image');
  const BANNER_POSITION = BANNER.getBoundingClientRect().bottom;

  if (BANNER_POSITION > 0) {
      BUTTON_UP.style.display = "none"; // Oculta el botón si está en la parte superior
  }
};