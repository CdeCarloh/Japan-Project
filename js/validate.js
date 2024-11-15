function listenForValidation() {
  const personalDataForm = document.getElementById("form-contact");
  personalDataForm.addEventListener("submit", validateFormContact);
}

function validateFormContact(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const surname = e.target.surname.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  let valid = true;

  if (!name) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-name").style.visibility = "hidden";
  }

  if (!surname) {
    document.getElementById("form-surname").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-surname").style.visibility = "hidden";
  }

  if (!email) {
    document.getElementById("form-email").style.visibility = "visible";
    document.getElementById("form-email-invalid").style.visibility = "hidden";
    valid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("form-email-invalid").style.visibility = "visible";
    document.getElementById("form-email").style.visibility = "hidden";
    valid = false;
  } else {
    document.getElementById("form-email").style.visibility = "hidden";
    document.getElementById("form-email-invalid").style.visibility = "hidden";
  }

  if (!message) {
    document.getElementById("form-message").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-message").style.visibility = "hidden";
  }

  if (valid) {
    saveData(name, surname, email, message);
    window.location.href = "show-data.html"
  }
}

function saveData(name, surname, email, message) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
}

function validateEmail(email) {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return validEmail.test(email);
}

listenForValidation();