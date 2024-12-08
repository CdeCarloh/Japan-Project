document.addEventListener('DOMContentLoaded', renderReviews);

function renderReviews() {
  const REVIEWS = JSON.parse(localStorage.getItem('reviews')) || [];
  const CONTAINER = document.getElementById('reviews-list');

  CONTAINER.innerHTML = '';

  REVIEWS.forEach((review, index) => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
      <h3>${review.title}</h3>
      <p>${review.content}</p>
      <p><strong>${review.author}</strong></p>
      <div class="actions">
        <button onclick="editReview(${index})">Editar</button>
        <button onclick="deleteReview(${index})">Eliminar</button>
      </div>
    `;
    CONTAINER.appendChild(reviewCard);
  });
}

function editReview(index) {
  localStorage.setItem('editIndex', index);
  window.location.href = 'form-reviews.html';
}

function deleteReview(index) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.splice(index, 1);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  renderReviews();
}
