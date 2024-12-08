function listenForValidation() {
  const personalDataForm = document.getElementById("form-contact");
  personalDataForm.addEventListener("submit", validateFormContact);
}

function validateFormContact(e) {

  const NAME = e.target.name.value;
  const SURNAME = e.target.surname.value;
  const EMAIL = e.target.email.value;
  const MESSAGE = e.target.message.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-name").style.visibility = "hidden";
  }

  if (!SURNAME) {
    document.getElementById("form-surname").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-surname").style.visibility = "hidden";
  }

  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (!MESSAGE) {
    document.getElementById("form-message").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-message").style.visibility = "hidden";


  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME, EMAIL, MESSAGE);
  }
}

function saveData(NAME, SURNAME, EMAIL, MESSAGE) {
  localStorage.setItem("name", NAME);
  localStorage.setItem("surname", SURNAME);
  localStorage.setItem("email", EMAIL);
  localStorage.setItem("message", MESSAGE);
}

listenForValidation();