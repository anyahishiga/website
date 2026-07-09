const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

function renderStars(rating) {
  return `
    <div class="stars">
      ${Array.from({ length: 5 }, (_, i) => `<span class="star ${i < rating ? 'filled' : ''}">★</span>`).join('')}
    </div>
  `;
}

function getRestaurantRating(id) {
  const list = reviews.filter(r => r.restaurantId === id);
  if (!list.length) return { avg: 0, count: 0 };
  const avg = list.reduce((sum, r) => sum + r.rating, 0) / list.length;
  return { avg: avg.toFixed(1), count: list.length };
}