const BUTTON_OPEN_TOKYO = "go-guide-tokyo";
const BUTTON_CLOSE_TOKYO = "close-modal-window-tokyo";
const MODAL_WINDOW_TOKYO = "modal-window-tokyo";

const BUTTON_OPEN_KYOTO = "go-guide-kyoto";
const BUTTON_CLOSE_KYOTO = "close-modal-window-kyoto";
const MODAL_WINDOW_KYOTO = "modal-window-kyoto";

const BUTTON_OPEN_OSAKA = "go-guide-osaka";
const BUTTON_CLOSE_OSAKA = "close-modal-window-osaka";
const MODAL_WINDOW_OSAKA = "modal-window-osaka";

const BUTTON_OPEN_HOKKAIDO = "go-guide-hokkaido";
const BUTTON_CLOSE_HOKKAIDO = "close-modal-window-hokkaido";
const MODAL_WINDOW_HOKKAIDO = "modal-window-hokkaido";

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

document.getElementById(BUTTON_OPEN_TOKYO).addEventListener("click", function () {
  openModal(MODAL_WINDOW_TOKYO);
});

document.getElementById(BUTTON_CLOSE_TOKYO).addEventListener("click", function () {
  closeModal(MODAL_WINDOW_TOKYO);
});

document.getElementById(BUTTON_OPEN_KYOTO).addEventListener("click", function () {
  openModal(MODAL_WINDOW_KYOTO);
});

document.getElementById(BUTTON_CLOSE_KYOTO).addEventListener("click", function () {
  closeModal(MODAL_WINDOW_KYOTO);
});

document.getElementById(BUTTON_OPEN_OSAKA).addEventListener("click", function () {
  openModal(MODAL_WINDOW_OSAKA);
});

document.getElementById(BUTTON_CLOSE_OSAKA).addEventListener("click", function () {
  closeModal(MODAL_WINDOW_OSAKA);
});

document.getElementById(BUTTON_OPEN_HOKKAIDO).addEventListener("click", function () {
  openModal(MODAL_WINDOW_HOKKAIDO);
});

document.getElementById(BUTTON_CLOSE_HOKKAIDO).addEventListener("click", function () {
  closeModal(MODAL_WINDOW_HOKKAIDO);
});

