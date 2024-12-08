if (localStorage.getItem("editIndex") !== null) {
  const TITLE = document.getElementById('title');
  const CONTENT = document.getElementById('content');
  const AUTHOR = document.getElementById('author');


  const REVIEWS = JSON.parse(localStorage.getItem("reviews")) || [];
  const EDIT_INDEX = parseInt(localStorage.getItem("editIndex"), 10);


  if (REVIEWS[EDIT_INDEX]) {
    TITLE.value = REVIEWS[EDIT_INDEX].TITLE || "";
    CONTENT.value = REVIEWS[EDIT_INDEX].CONTENT || "";
    AUTHOR.value = REVIEWS[EDIT_INDEX].AUTHOR || "";
  }

  document.addEventListener('DOMContentLoaded', () => {
    const FORM = document.getElementById('form-reviews');

    FORM.addEventListener('submit', (event) => {
      event.preventDefault();

      let valid = true;


      if (TITLE.value.trim() === "") {
        document.getElementById('form-title').style.visibility = 'visible';
        valid = false;
      } else {
        document.getElementById('form-title').style.visibility = 'hidden';
      }

      if (CONTENT.value.trim() === "") {
        document.getElementById('form-content').style.visibility = 'visible';
        valid = false;
      } else {
        document.getElementById('form-content').style.visibility = 'hidden';
      }

      if (AUTHOR.value.trim() === "") {
        document.getElementById('form-author').style.visibility = 'visible';
        valid = false;
      } else {
        document.getElementById('form-author').style.visibility = 'hidden';
      }

      if (!valid) return;

      REVIEWS[EDIT_INDEX] = {
        TITLE: TITLE.value.trim(),
        CONTENT: CONTENT.value.trim(),
        AUTHOR: AUTHOR.value.trim()
      };

      localStorage.setItem('reviews', JSON.stringify(REVIEWS));
      window.location.href = 'reviews.html';
    });
  });
}