// public/js/main.js
document.addEventListener('DOMContentLoaded', function () {
  fetch('/movies')
    .then(response => response.json())
    .then(data => {
      const listContainer = document.getElementById('ratings-list');
      
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <img src="/posters/${item.poster}" alt="Poster" class="poster-image">
          <h3>${item.title}</h3>
          <p><strong>Type:</strong> ${item.type}</p>
          <p><strong>Rating:</strong> ${item.rating}/10</p>
          <p><strong>Comment:</strong> ${item.comment}</p>
          <button onclick="deleteRating('${item.id}')">Delete</button>
        `;

        // FIX: Append to the specific section, not the body
        listContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error loading movies:', error);
    });
});
// delete buttom dunction
function deleteRating(id) {
  fetch(`/movies/${id}`, { method: 'DELETE' })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to delete rating.');
    });
}