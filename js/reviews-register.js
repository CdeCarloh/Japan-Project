document.addEventListener('DOMContentLoaded', renderReviews);

function renderReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const container = document.getElementById('reviews-list');

  container.innerHTML = ''; // Limpiar contenedor

  reviews.forEach((review, index) => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
      <h3>${review.title}</h3>
      <p>${review.content}</p>
      <p>${review.author}</p>
      <div class="actions">
        <button onclick="editReview(${index})">Editar</button>
        <button onclick="deleteReview(${index})">Eliminar</button>
      </div>
    `;
    container.appendChild(reviewCard);
  });
}

function editReview(index) {
  localStorage.setItem('editIndex', index);
  window.location.href = 'form-reviews.html';
}

function deleteReview(index) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.splice(index, 1); // Eliminar la review seleccionada
  localStorage.setItem('reviews', JSON.stringify(reviews));
  renderReviews(); // Actualizar vista
}
