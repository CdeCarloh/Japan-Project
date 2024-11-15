function listenForValidation() {
  const rewiewsDataForm = document.getElementById("form-rewiews");
  rewiewsDataForm.addEventListener("submit", validateFormRewiews);
}

function validateFormRewiews(e) {

  const TITLE = e.target.title.value;
  const CONTENT = e.target.content.value;
  const AUTHOR = e.target.author.value;

  let valid = true;

  if (!TITLE) {
    document.getElementById("form-title").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-title").style.visibility = "hidden";
  }

  if (!CONTENT) {
    document.getElementById("form-content").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-content").style.visibility = "hidden";
  }

  if (!AUTHOR) {
    document.getElementById("form-author").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-author").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(TITLE, CONTENT, AUTHOR);
  }
}

function saveData(TITLE, CONTENT, AUTHOR) {
  localStorage.setItem("title", TITLE);
  localStorage.setItem("content", CONTENT);
  localStorage.setItem("author", AUTHOR);
}

listenForValidation();