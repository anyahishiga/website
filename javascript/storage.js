const getStorage = (key, fallback) => JSON.parse(localStorage.getItem(key)) || fallback;
const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

function mergeRestaurants() {
  const saved = JSON.parse(localStorage.getItem('restaurants'));
  if (!saved) return BASE_RESTAURANTS;
  const savedIds = new Set(saved.map(r => r.id));
  const newOnes = BASE_RESTAURANTS.filter(r => !savedIds.has(r.id));
  return newOnes.length ? [...saved, ...newOnes] : saved;
}

let restaurants = mergeRestaurants();

let reviews = getStorage('reviews', [
  { id: 'r1', restaurantId: 'pho-hoa', author: 'Minh Tuấn', rating: 5, comment: 'Nước dùng trong, thịt mềm, ăn mãi không chán!', date: '2026-05-20' },
  { id: 'r2', restaurantId: 'banh-mi-huynh-hoa', author: 'Thu Hà', rating: 5, comment: 'Bánh mì nhân đầy, giá rẻ, hàng dài nhưng xứng đáng chờ!', date: '2026-05-15' },
  { id: 'r3', restaurantId: 'pho-2000', author: 'Văn Long', rating: 4, comment: 'Phở ngon, vị đậm đà, phù hợp cả khách du lịch.', date: '2026-05-14' },
  { id: 'r4', restaurantId: 'hai-san-nam-can', author: 'Ngọc Lan', rating: 5, comment: 'Ghẹ rang me tuyệt vời, hải sản tươi sống!', date: '2026-05-12' },
  { id: 'r5', restaurantId: 'pho-tau-bay', author: 'Bảo Châu', rating: 5, comment: 'Phở Tàu Bay nổi tiếng từ mấy chục năm, vị không thay đổi!', date: '2026-05-10' }
]);

window.currentDetailId = null;