document.addEventListener('DOMContentLoaded', () => {
  const FORM = document.getElementById('form-reviews');

  FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const TITLE = document.getElementById('title').value.trim();
    const CONTENT = document.getElementById('content').value.trim();
    const AUTHOR = document.getElementById('author').value.trim();

    let valid = true;

    if (!TITLE) {
      document.getElementById('form-title').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-title').style.visibility = 'hidden';
    }

    if (!CONTENT) {
      document.getElementById('form-content').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-content').style.visibility = 'hidden';
    }

    if (!AUTHOR) {
      document.getElementById('form-author').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-author').style.visibility = 'hidden';
    }

    if (!valid) return;

    const REVIEWS = JSON.parse(localStorage.getItem('reviews')) || [];
    REVIEWS.push({ TITLE, CONTENT, AUTHOR });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    window.location.href = 'reviews.html';
  });
});
