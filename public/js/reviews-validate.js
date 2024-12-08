function validateReview(title, description, author) {
  let valid = true;

  if (!title.trim()) {
    document.getElementById("form-title").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-title").style.visibility = "hidden";
  }

  if (!description.trim()) {
    document.getElementById("form-content").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-content").style.visibility = "hidden";
  }

  if (!author.trim()) {
    document.getElementById("form-author").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-author").style.visibility = "hidden";
  }

  return valid;
}
