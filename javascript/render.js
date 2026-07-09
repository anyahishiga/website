function renderCard(r) {
  const { avg, count } = getRestaurantRating(r.id);
  const imgUrl = r.image || 'https://via.placeholder.com/300x200?text=No+Image';
  return `
    <div class="restaurant-card" onclick="showDetail('${r.id}')">
      <div class="card-img" style="background-image:url('${imgUrl}')"></div>
      <div class="card-body">
        <div class="card-cuisine">${r.cuisine}</div>
        <div class="card-name">${r.name}</div>
        <div class="card-meta">
          <span>${r.district}</span> <span>${r.price}</span>
        </div>
        <div class="card-footer">
          ${count ? `${renderStars(Math.round(avg))} <span>${avg} (${count})</span>` : '<span>Chưa có đánh giá</span>'}
        </div>
        <div class="card-tags">${r.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </div>
  `;
}

function renderHome() {
  $('#statRestaurants').textContent = restaurants.length;
  $('#statReviews').textContent = reviews.length;
  $('#featuredStrip').innerHTML = restaurants.filter(r => r.featured).map(renderCard).join('');

  $('#categoryPills').innerHTML = CUISINES.map(c => `
    <div class="category-pill" onclick="filterCuisine('${c.name}')">${c.name}</div>
  `).join('');

  const districtCount = {};
  restaurants.forEach(r => { districtCount[r.district] = (districtCount[r.district] || 0) + 1; });

  const districtGrid = $('#districtGrid');
  if (districtGrid) {
    districtGrid.innerHTML = Object.entries(districtCount)
      .sort((a, b) => b[1] - a[1])
      .map(([d, cnt]) => `
        <div class="district-card" onclick="filterDistrict('${d}')">
          <span class="district-emoji"></span>
          <div class="district-name">${d}</div>
          <div class="district-count">${cnt} quán</div>
        </div>
      `).join('');
  }
}

function renderBrowse() {
  const list = getFilteredRestaurants();
  $('#browseCount').textContent = `Tìm thấy ${list.length} quán`;
  $('#browseGrid').innerHTML = list.length ? list.map(renderCard).join('') : `<p>Không có kết quả</p>`;
  populateDistrictSelect();
}

function populateDistrictSelect() {
  const sel = document.querySelector('.filter-select');
  if (!sel) return;
  const districts = [...new Set(restaurants.map(r => r.district))].sort();
  sel.innerHTML = `<option value="all">Tất cả quận</option>` +
    districts.map(d => `<option value="${d}" ${activeFilters.district === d ? 'selected' : ''}>${d}</option>`).join('');
  sel.onchange = e => setFilter('district', e.target.value);
}

function showDetail(id) {
  window.currentDetailId = id;
  const r = restaurants.find(x => x.id === id);
  if (!r) return;

  const { avg, count } = getRestaurantRating(id);
  $('#detailCuisine').textContent = r.cuisine;
  $('#detailName').textContent = r.name;
  $('#detailRatingNum').textContent = avg || '0';
  $('#detailReviewCount').textContent = count;
  $('#detailStars').innerHTML = renderStars(Math.round(avg));

  $('#detailInfo').innerHTML = `
    <div>${r.address}</div>
    <div>🏘️ ${r.district}</div>
    <div>💰 ${r.price}</div>
  `;

  $('#detailTags').innerHTML = r.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('');
  renderReviews(id);
  showPage('detail');
}

function renderReviews(id) {
  const list = reviews.filter(r => r.restaurantId === id);
  $('#detailReviews').innerHTML = list.length ? list.map(r => `
    <div class="review-card">
      <strong>${r.author}</strong>
      ${renderStars(r.rating)}
      <p>${r.comment}</p>
    </div>
  `).join('') : `<p>Chưa có đánh giá</p>`;
}