document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-reviews');

  // Validar campos y manejar envío
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const author = document.getElementById('author').value.trim();

    // Validar campos
    let valid = true;

    if (!title) {
      document.getElementById('form-title').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-title').style.visibility = 'hidden';
    }

    if (!content) {
      document.getElementById('form-content').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-content').style.visibility = 'hidden';
    }

    if (!author) {
      document.getElementById('form-author').style.visibility = 'visible';
      valid = false;
    } else {
      document.getElementById('form-author').style.visibility = 'hidden';
    }

    if (!valid) return;

    // Guardar en localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ title, content, author });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Redirigir a reviews.html
    window.location.href = 'reviews.html';
  });
});
