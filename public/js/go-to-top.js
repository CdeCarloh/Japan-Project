window.onscroll = function () {
  const BUTTON_UP = document.getElementById("up");
  const BANNER = document.querySelector('.banner-image');
  const BANNER_POSITION = BANNER.getBoundingClientRect().bottom;

  if (BANNER_POSITION > 0) {
    BUTTON_UP.style.display = "none";
  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    BUTTON_UP.style.display = "block";
  } else {
    BUTTON_UP.style.display = "none";
  }

  const FOOTER = document.querySelector('.footer-container');
  const FOOTER_POSITION = FOOTER.getBoundingClientRect().top;

  if (FOOTER_POSITION < window.innerHeight) {
    BUTTON_UP.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("up").onclick = scrollToTop;

window.onload = function () {
  const BUTTON_UP = document.getElementById("up");
  const BANNER = document.querySelector('.banner-image');
  const BANNER_POSITION = BANNER.getBoundingClientRect().bottom;

  if (BANNER_POSITION > 0) {
    BUTTON_UP.style.display = "none";
  }
};