window.onscroll = function () {
  const BUTTON_UP = document.getElementById("up");

  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    BUTTON_UP.style.display = "block";
  } else {
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