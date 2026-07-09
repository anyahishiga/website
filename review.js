let selectedStars = 0;

function setStarRating(value) {
  selectedStars = value;
  $$('.star-btn').forEach((btn, i) => { btn.classList.toggle('active', i < value); });
}

function populateReviewSelect() {
  const sel = $('#reviewRestaurantSelect');
  if (!sel) return;
  sel.innerHTML = `<option value="">-- Chọn nhà hàng --</option>` +
    restaurants.map(r => `<option value="${r.id}">${r.name} (${r.district})</option>`).join('');
  if (window.currentDetailId) sel.value = window.currentDetailId;
}

function submitReview() {
  const restaurantId = $('#reviewRestaurantSelect').value;
  const author = $('#reviewAuthor').value.trim();
  const comment = $('#reviewComment').value.trim();

  if (!restaurantId || !author || !comment || !selectedStars) {
    showToast('Vui lòng nhập đầy đủ');
    return;
  }

  reviews.push({
    id: Date.now().toString(),
    restaurantId,
    author,
    rating: selectedStars,
    comment,
    date: new Date().toISOString().split('T')[0]
  });

  setStorage('reviews', reviews);
  showToast('Đã gửi đánh giá 🎉');
  showDetail(restaurantId);
}