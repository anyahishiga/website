let activeFilters = { cuisine: 'all', district: 'all', price: 'all' };

function filterCuisine(cuisine) {
  activeFilters.cuisine = cuisine;
  showPage('browse');
  renderBrowse();
}

function filterDistrict(district) {
  activeFilters.district = district;
  activeFilters.cuisine = 'all';
  activeFilters.price = 'all';
  const sel = document.querySelector('.filter-select');
  if (sel) sel.value = district;
  showPage('browse');
  renderBrowse();
}

function setFilter(type, value, btn) {
  activeFilters[type] = value;
  if (btn && type === 'cuisine') {
    $$('.filter-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
  }
  renderBrowse();
}

function getFilteredRestaurants() {
  return restaurants.filter(r => {
    return (
      (activeFilters.cuisine === 'all' || r.cuisine === activeFilters.cuisine) &&
      (activeFilters.district === 'all' || r.district === activeFilters.district) &&
      (activeFilters.price === 'all' || r.price === activeFilters.price)
    );
  });
}

function handleHeroSearch() { }

function doHeroSearch() {
  const keyword = $('#heroSearch').value.toLowerCase();
  const result = restaurants.filter(r =>
    r.name.toLowerCase().includes(keyword) ||
    r.cuisine.toLowerCase().includes(keyword) ||
    r.district.toLowerCase().includes(keyword) ||
    r.tags.some(t => t.toLowerCase().includes(keyword))
  );

  showPage('browse');
  $('#browseGrid').innerHTML = result.map(renderCard).join('');
  $('#browseCount').textContent = `Tìm thấy ${result.length} quán`;
}