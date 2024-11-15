function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("form-contact");
  PERSONAL_DATA_FORM.addEventListener("submit", validateFormContact);
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

  if (EMAIL && !validateEmail()) {
    document.getElementById("form-email-invalid").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (!MESSAGE) {
    document.getElementById("form-message").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-message").style.visibility = "hidden";
  }

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME, EMAIL, MESSAGE);
  }
}

function saveData(name, surname, email, message) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
}

function validateEmail() {
  var emailField = document.getElementById('email');
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validEmail.test(emailField.value)) {
    return true;
  } else {
    return false;
  }
}

listenForValidation();