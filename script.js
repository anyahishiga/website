// =========================
// DỮ LIỆU
// =========================

const CUISINES = [
  { name: 'Phở' },
  { name: 'Bánh mì' },
  { name: 'Cơm tấm' },
  { name: 'Hải sản' },
  { name: 'Bún bò' },
  { name: 'Lẩu' },
  { name: 'Cà phê' },
  { name: 'Bánh ngọt' }
];

const BASE_RESTAURANTS = [
  // ── QUẬN 1 ──
  {
    id: 'banh-mi-huynh-hoa',
    name: 'Bánh Mì Huỳnh Hoa',
    cuisine: 'Bánh mì',
    district: 'Quận 1',
    address: '26 Lê Thị Riêng, Q.1',
    price: '₫',
    tags: ['giá rẻ', 'đặc biệt', 'phải thử'],
    featured: true
  },
  {
    id: 'com-tam-ba-ghien',
    name: 'Cơm Tấm Bà Ghiền',
    cuisine: 'Cơm tấm',
    district: 'Quận 1',
    address: '84 Đặng Văn Ngữ, Q.1',
    price: '₫',
    tags: ['sườn nướng', 'bình dân'],
    featured: true
  },
  {
    id: 'pho-2000',
    name: 'Phở 2000',
    cuisine: 'Phở',
    district: 'Quận 1',
    address: '1-3 Phan Chu Trinh, Q.1',
    price: '₫₫',
    tags: ['nổi tiếng', 'du lịch', 'sáng'],
    featured: true
  },
  {
    id: 'banh-xeo-46a',
    name: 'Bánh Xèo 46A',
    cuisine: 'Bánh ngọt',
    district: 'Quận 1',
    address: '46A Đinh Công Tráng, Q.1',
    price: '₫₫',
    tags: ['bánh xèo', 'giòn', 'nổi tiếng'],
    featured: true
  },
  {
    id: 'cafe-trung-q1',
    name: 'Cà Phê Trứng Hà Nội',
    cuisine: 'Cà phê',
    district: 'Quận 1',
    address: '38 Lý Tự Trọng, Q.1',
    price: '₫',
    tags: ['cà phê trứng', 'yên tĩnh', 'sáng'],
    featured: false
  },

  // ── QUẬN 3 ──
  {
    id: 'pho-hoa',
    name: 'Phở Hòa Pasteur',
    cuisine: 'Phở',
    district: 'Quận 3',
    address: '260C Pasteur, Q.3',
    price: '₫₫',
    tags: ['nổi tiếng', 'truyền thống', 'sáng sớm'],
    featured: true
  },
  {
    id: 'com-nieu-sai-gon',
    name: 'Cơm Niêu Sài Gòn',
    cuisine: 'Cơm tấm',
    district: 'Quận 3',
    address: '2C Đinh Tiên Hoàng, Q.3',
    price: '₫₫',
    tags: ['cơm niêu', 'truyền thống', 'gia đình'],
    featured: false
  },
  {
    id: 'bun-bo-45-q3',
    name: 'Bún Bò Huế 45',
    cuisine: 'Bún bò',
    district: 'Quận 3',
    address: '45 Trần Quốc Thảo, Q.3',
    price: '₫',
    tags: ['bún bò', 'cay', 'sáng sớm'],
    featured: false
  },
  {
    id: 'lau-q3',
    name: 'Lẩu Bảy Món Quận 3',
    cuisine: 'Lẩu',
    district: 'Quận 3',
    address: '30 Võ Văn Tần, Q.3',
    price: '₫₫',
    tags: ['lẩu', 'nhóm', 'tối'],
    featured: false
  },

  // ── QUẬN 4 ──
  {
    id: 'hai-san-nam-can',
    name: 'Hải Sản Năm Cần Thơ',
    cuisine: 'Hải sản',
    district: 'Quận 4',
    address: '5 Vĩnh Khánh, Q.4',
    price: '₫₫₫',
    tags: ['hải sản', 'tôm hùm', 'nhậu'],
    featured: false
  },
  {
    id: 'bun-mam-q4',
    name: 'Bún Mắm Cô Năm',
    cuisine: 'Bún bò',
    district: 'Quận 4',
    address: '18 Hoàng Diệu, Q.4',
    price: '₫',
    tags: ['bún mắm', 'miền Tây', 'đặc sản'],
    featured: false
  },
  {
    id: 'com-tam-q4',
    name: 'Cơm Tấm Thuận Kiều',
    cuisine: 'Cơm tấm',
    district: 'Quận 4',
    address: '72 Tôn Thất Thuyết, Q.4',
    price: '₫',
    tags: ['cơm tấm', 'sườn nướng', 'bình dân'],
    featured: false
  },

  // ── QUẬN 5 ──
  {
    id: 'pho-le',
    name: 'Phở Lê',
    cuisine: 'Phở',
    district: 'Quận 5',
    address: '413-415 Nguyễn Trãi, Q.5',
    price: '₫',
    tags: ['phở', 'bình dân', 'sáng sớm'],
    featured: false
  },
  {
    id: 'bun-bo-hue',
    name: 'Bún Bò Huế Gia Hội',
    cuisine: 'Bún bò',
    district: 'Quận 5',
    address: '12 Châu Văn Liêm, Q.5',
    price: '₫',
    tags: ['bún bò', 'cay', 'miền Trung'],
    featured: false
  },
  {
    id: 'hai-san-cho-lon',
    name: 'Hải Sản Chợ Lớn',
    cuisine: 'Hải sản',
    district: 'Quận 5',
    address: '88 Nguyễn Trãi, Q.5',
    price: '₫₫',
    tags: ['hải sản', 'chợ lớn', 'tươi sống'],
    featured: false
  },
  {
    id: 'banh-mi-chu-teo',
    name: 'Bánh Mì Chú Tèo',
    cuisine: 'Bánh mì',
    district: 'Quận 5',
    address: '55 Hải Thượng Lãn Ông, Q.5',
    price: '₫',
    tags: ['bánh mì', 'sáng', 'giá rẻ'],
    featured: false
  },

  // ── QUẬN 6 ──
  {
    id: 'banh-xeo-ba-tu',
    name: 'Bánh Xèo Bà Tư',
    cuisine: 'Bánh ngọt',
    district: 'Quận 6',
    address: '34 Bình Tây, Q.6',
    price: '₫',
    tags: ['bánh xèo', 'giòn rụm', 'chiều'],
    featured: false
  },
  {
    id: 'bun-mam-ba-hai',
    name: 'Bún Mắm Bà Hai',
    cuisine: 'Bún bò',
    district: 'Quận 6',
    address: '9 Lê Quang Sung, Q.6',
    price: '₫',
    tags: ['bún mắm', 'đậm đà', 'trưa'],
    featured: false
  },

  // ── QUẬN 7 ──
  {
    id: 'lau-thai',
    name: 'Lẩu Thái Cung Đình',
    cuisine: 'Lẩu',
    district: 'Quận 7',
    address: '10 Phú Mỹ Hưng, Q.7',
    price: '₫₫',
    tags: ['lẩu', 'thái', 'nhóm'],
    featured: false
  },
  {
    id: 'hai-san-song-sai-gon',
    name: 'Hải Sản Sông Sài Gòn',
    cuisine: 'Hải sản',
    district: 'Quận 7',
    address: '50 Nguyễn Văn Linh, Q.7',
    price: '₫₫₫',
    tags: ['hải sản', 'view sông', 'cao cấp'],
    featured: true
  },
  {
    id: 'cafe-q7',
    name: 'The Coffee House Phú Mỹ Hưng',
    cuisine: 'Cà phê',
    district: 'Quận 7',
    address: '12 Lê Văn Lương, Q.7',
    price: '₫₫',
    tags: ['cà phê', 'máy lạnh', 'làm việc'],
    featured: false
  },

  // ── QUẬN 8 ──
  {
    id: 'com-tam-q8',
    name: 'Cơm Tấm Minh Ký',
    cuisine: 'Cơm tấm',
    district: 'Quận 8',
    address: '120 Phạm Thế Hiển, Q.8',
    price: '₫',
    tags: ['cơm tấm', 'sạch', 'bình dân'],
    featured: false
  },
  {
    id: 'lau-q8',
    name: 'Lẩu Mắm Bà Được',
    cuisine: 'Lẩu',
    district: 'Quận 8',
    address: '45 Tạ Quang Bửu, Q.8',
    price: '₫₫',
    tags: ['lẩu mắm', 'miền Tây', 'đặc sản'],
    featured: false
  },

  // ── QUẬN 10 ──
  {
    id: 'pho-tau-bay',
    name: 'Phở Tàu Bay',
    cuisine: 'Phở',
    district: 'Quận 10',
    address: '433 Lý Thái Tổ, Q.10',
    price: '₫₫',
    tags: ['phở', 'huyền thoại', 'sáng'],
    featured: true
  },
  {
    id: 'com-tam-cali',
    name: 'Cơm Tấm Cali',
    cuisine: 'Cơm tấm',
    district: 'Quận 10',
    address: '7 Cao Thắng, Q.10',
    price: '₫₫',
    tags: ['cơm tấm', 'sạch sẽ', 'có máy lạnh'],
    featured: false
  },

  // ── QUẬN 11 ──
  {
    id: 'banh-mi-q11',
    name: 'Bánh Mì Pate Quận 11',
    cuisine: 'Bánh mì',
    district: 'Quận 11',
    address: '67 Lý Thường Kiệt, Q.11',
    price: '₫',
    tags: ['bánh mì', 'pate', 'sáng sớm'],
    featured: false
  },
  {
    id: 'pho-q11',
    name: 'Phở Bắc Hải',
    cuisine: 'Phở',
    district: 'Quận 11',
    address: '112 Ba Tháng Hai, Q.11',
    price: '₫',
    tags: ['phở bắc', 'trong', 'ngọt nước'],
    featured: false
  },

  // ── QUẬN BÌNH THẠNH ──
  {
    id: 'banh-canh-cua',
    name: 'Bánh Canh Cua Bà Ba',
    cuisine: 'Hải sản',
    district: 'Quận Bình Thạnh',
    address: '45 Phan Xích Long, Bình Thạnh',
    price: '₫',
    tags: ['bánh canh', 'cua', 'sáng'],
    featured: false
  },
  {
    id: 'pho-binh',
    name: 'Phở Bình',
    cuisine: 'Phở',
    district: 'Quận Bình Thạnh',
    address: '7 Lý Chính Thắng, Bình Thạnh',
    price: '₫',
    tags: ['phở', 'lịch sử', 'sáng sớm'],
    featured: false
  },
  {
    id: 'cafe-den-da',
    name: 'Cà Phê Đen Đá Vợt',
    cuisine: 'Cà phê',
    district: 'Quận Bình Thạnh',
    address: '88 Đinh Bộ Lĩnh, Bình Thạnh',
    price: '₫',
    tags: ['cà phê vợt', 'truyền thống', 'sáng'],
    featured: false
  },

  // ── QUẬN GÒ VẤP ──
  {
    id: 'lau-de-bay-vien',
    name: 'Lẩu Dê Bảy Viên',
    cuisine: 'Lẩu',
    district: 'Quận Gò Vấp',
    address: '22 Quang Trung, Gò Vấp',
    price: '₫₫',
    tags: ['lẩu dê', 'nhậu', 'tối'],
    featured: false
  },
  {
    id: 'com-tam-gv',
    name: 'Cơm Tấm Bụi Gò Vấp',
    cuisine: 'Cơm tấm',
    district: 'Quận Gò Vấp',
    address: '105 Nguyễn Văn Nghi, Gò Vấp',
    price: '₫',
    tags: ['cơm tấm', 'bụi', 'bình dân'],
    featured: false
  },
  {
    id: 'bun-bo-gv',
    name: 'Bún Bò Chị Hoa',
    cuisine: 'Bún bò',
    district: 'Quận Gò Vấp',
    address: '78 Lê Đức Thọ, Gò Vấp',
    price: '₫',
    tags: ['bún bò', 'cay vừa', 'sáng'],
    featured: false
  },

  // ── QUẬN TÂN BÌNH ──
  {
    id: 'pho-tan-binh',
    name: 'Phở 24 Tân Bình',
    cuisine: 'Phở',
    district: 'Quận Tân Bình',
    address: '24 Hoàng Văn Thụ, Tân Bình',
    price: '₫₫',
    tags: ['phở', 'sạch', 'gần sân bay'],
    featured: false
  },
  {
    id: 'bun-bo-nam-bo',
    name: 'Bún Bò Nam Bộ',
    cuisine: 'Bún bò',
    district: 'Quận Tân Bình',
    address: '67 Cộng Hòa, Tân Bình',
    price: '₫',
    tags: ['bún bò', 'khô', 'đặc biệt'],
    featured: true
  },
  {
    id: 'hai-san-tan-binh',
    name: 'Hải Sản Ngọc Sương',
    cuisine: 'Hải sản',
    district: 'Quận Tân Bình',
    address: '55 Trường Chinh, Tân Bình',
    price: '₫₫',
    tags: ['hải sản', 'tươi', 'gia đình'],
    featured: false
  },

  // ── QUẬN PHÚ NHUẬN ──
  {
    id: 'banh-mi-phu-hoa',
    name: 'Bánh Mì Phú Hoa',
    cuisine: 'Bánh mì',
    district: 'Quận Phú Nhuận',
    address: '200 Phan Xích Long, Phú Nhuận',
    price: '₫',
    tags: ['bánh mì', 'nổi tiếng', 'sáng'],
    featured: false
  },
  {
    id: 'cafe-nha-tho',
    name: 'Cà Phê Nhà Thờ',
    cuisine: 'Cà phê',
    district: 'Quận Phú Nhuận',
    address: '14 Võ Thị Sáu, Phú Nhuận',
    price: '₫',
    tags: ['cà phê', 'view đẹp', 'yên tĩnh'],
    featured: false
  },
  {
    id: 'com-tam-pn',
    name: 'Cơm Tấm Ánh Hồng',
    cuisine: 'Cơm tấm',
    district: 'Quận Phú Nhuận',
    address: '33 Huỳnh Văn Bánh, Phú Nhuận',
    price: '₫',
    tags: ['cơm tấm', 'ngon', 'gần trung tâm'],
    featured: false
  },

  // ── QUẬN TÂN PHÚ ──
  {
    id: 'lau-tan-phu',
    name: 'Lẩu Hải Sản Tân Phú',
    cuisine: 'Lẩu',
    district: 'Quận Tân Phú',
    address: '88 Tân Sơn Nhì, Tân Phú',
    price: '₫₫',
    tags: ['lẩu hải sản', 'nhóm', 'tối'],
    featured: false
  },
  {
    id: 'pho-tan-phu',
    name: 'Phở Hà Nội Tân Phú',
    cuisine: 'Phở',
    district: 'Quận Tân Phú',
    address: '45 Âu Cơ, Tân Phú',
    price: '₫',
    tags: ['phở bắc', 'sáng', 'ngọt nước'],
    featured: false
  },

  // ── QUẬN BÌNH TÂN ──
  {
    id: 'com-tam-binh-tan',
    name: 'Cơm Tấm Ba Má',
    cuisine: 'Cơm tấm',
    district: 'Quận Bình Tân',
    address: '12 Kinh Dương Vương, Bình Tân',
    price: '₫',
    tags: ['cơm tấm', 'giá rẻ', 'đông khách'],
    featured: false
  },
  {
    id: 'banh-mi-binh-tan',
    name: 'Bánh Mì Thịt Nướng Bình Tân',
    cuisine: 'Bánh mì',
    district: 'Quận Bình Tân',
    address: '67 Tân Kỳ Tân Quý, Bình Tân',
    price: '₫',
    tags: ['bánh mì', 'thịt nướng', 'chiều'],
    featured: false
  },

  // ── TP. THỦ ĐỨC ──
  {
    id: 'hai-san-thu-duc',
    name: 'Hải Sản Đại Dương Xanh',
    cuisine: 'Hải sản',
    district: 'TP. Thủ Đức',
    address: '78 Võ Văn Ngân, Thủ Đức',
    price: '₫₫',
    tags: ['hải sản', 'tươi sống', 'gia đình'],
    featured: false
  },
  {
    id: 'lau-sinh-vien',
    name: 'Lẩu Thái Sinh Viên',
    cuisine: 'Lẩu',
    district: 'TP. Thủ Đức',
    address: '12 Kha Vạn Cân, Thủ Đức',
    price: '₫',
    tags: ['lẩu', 'sinh viên', 'giá rẻ'],
    featured: false
  },
  {
    id: 'cafe-vuon-thu-duc',
    name: 'Cà Phê Vườn Thủ Đức',
    cuisine: 'Cà phê',
    district: 'TP. Thủ Đức',
    address: '55 Lê Văn Việt, Thủ Đức',
    price: '₫',
    tags: ['cà phê', 'vườn', 'thư giãn'],
    featured: false
  },
  {
    id: 'pho-thu-duc',
    name: 'Phở Xe Lửa',
    cuisine: 'Phở',
    district: 'TP. Thủ Đức',
    address: '100 Đỗ Xuân Hợp, Thủ Đức',
    price: '₫',
    tags: ['phở', 'ngon', 'sáng sớm'],
    featured: false
  }
];

// =========================
// STORAGE
// =========================

const getStorage = (key, fallback) =>
  JSON.parse(localStorage.getItem(key)) || fallback;

const setStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// Merge quán mới vào localStorage nếu chưa có
function mergeRestaurants() {
  const saved = JSON.parse(localStorage.getItem('restaurants'));
  if (!saved) return BASE_RESTAURANTS;
  const savedIds = new Set(saved.map(r => r.id));
  const newOnes = BASE_RESTAURANTS.filter(r => !savedIds.has(r.id));
  return newOnes.length ? [...saved, ...newOnes] : saved;
}

let restaurants = mergeRestaurants();

let reviews = getStorage('reviews', [
  {
    id: 'r1',
    restaurantId: 'pho-hoa',
    author: 'Minh Tuấn',
    rating: 5,
    comment: 'Nước dùng trong, thịt mềm, ăn mãi không chán!',
    date: '2026-05-20'
  },
  {
    id: 'r2',
    restaurantId: 'banh-mi-huynh-hoa',
    author: 'Thu Hà',
    rating: 5,
    comment: 'Bánh mì nhân đầy, giá rẻ, hàng dài nhưng xứng đáng chờ!',
    date: '2026-05-15'
  },
  {
    id: 'r3',
    restaurantId: 'pho-2000',
    author: 'Văn Long',
    rating: 4,
    comment: 'Phở ngon, vị đậm đà, phù hợp cả khách du lịch.',
    date: '2026-05-14'
  },
  {
    id: 'r4',
    restaurantId: 'hai-san-nam-can',
    author: 'Ngọc Lan',
    rating: 5,
    comment: 'Ghẹ rang me tuyệt vời, hải sản tươi sống!',
    date: '2026-05-12'
  },
  {
    id: 'r5',
    restaurantId: 'pho-tau-bay',
    author: 'Bảo Châu',
    rating: 5,
    comment: 'Phở Tàu Bay nổi tiếng từ mấy chục năm, vị không thay đổi!',
    date: '2026-05-10'
  }
]);

// =========================
// STATE
// =========================

let activeFilters = {
  cuisine: 'all',
  district: 'all',
  price: 'all'
};

let selectedStars = 0;
let currentDetailId = null;

// =========================
// HELPER
// =========================

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function renderStars(rating) {
  return `
    <div class="stars">
      ${Array.from({ length: 5 }, (_, i) => `
        <span class="star ${i < rating ? 'filled' : ''}">
          ★
        </span>
      `).join('')}
    </div>
  `;
}

function getRestaurantRating(id) {
  const list = reviews.filter(
    r => r.restaurantId === id
  );

  if (!list.length) {
    return { avg: 0, count: 0 };
  }

  const avg =
    list.reduce((sum, r) => sum + r.rating, 0) / list.length;

  return {
    avg: avg.toFixed(1),
    count: list.length
  };
}

// =========================
// RENDER CARD
// =========================

function renderCard(r) {
  const { avg, count } =
    getRestaurantRating(r.id);

  return `
    <div
      class="restaurant-card"
      onclick="showDetail('${r.id}')"
    >

      <div class="card-img"></div>

      <div class="card-body">

        <div class="card-cuisine">
          ${r.cuisine}
        </div>

        <div class="card-name">
          ${r.name}
        </div>

        <div class="card-meta">
          <span>📍 ${r.district}</span>
          <span>${r.price}</span>
        </div>

        <div class="card-footer">
          ${
            count
              ? `
                ${renderStars(Math.round(avg))}
                <span>
                  ${avg} (${count})
                </span>
              `
              : '<span>Chưa có đánh giá</span>'
          }
        </div>

        <div class="card-tags">
          ${r.tags.map(tag => `
            <span class="tag">
              ${tag}
            </span>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}

// =========================
// HOME
// =========================

function renderHome() {
  $('#statRestaurants').textContent =
    restaurants.length;

  $('#statReviews').textContent =
    reviews.length;

  $('#homeGrid').innerHTML =
    restaurants
      .map(renderCard)
      .join('');

  $('#featuredStrip').innerHTML =
    restaurants
      .filter(r => r.featured)
      .map(renderCard)
      .join('');

  $('#categoryPills').innerHTML =
    CUISINES.map(c => `
      <div
        class="category-pill"
        onclick="filterCuisine('${c.name}')"
      >
        ${c.name}
      </div>
    `).join('');

  // District grid — tự động từ dữ liệu
  const districtCount = {};
  restaurants.forEach(r => {
    districtCount[r.district] = (districtCount[r.district] || 0) + 1;
  });

  const districtEmoji = {
    'Quận 1': '🏙️', 'Quận 3': '🌿', 'Quận 4': '🌊',
    'Quận 5': '🏮', 'Quận 6': '🎋', 'Quận 7': '🏢',
    'Quận 8': '🛶', 'Quận 10': '🏫', 'Quận 11': '🎪',
    'Quận Bình Thạnh': '🌉', 'Quận Gò Vấp': '🍃',
    'Quận Tân Bình': '✈️', 'Quận Phú Nhuận': '🌸',
    'Quận Tân Phú': '🛍️', 'Quận Bình Tân': '🏭',
    'TP. Thủ Đức': '🎓'
  };

  const districtGrid = $('#districtGrid');
  if (districtGrid) {
    districtGrid.innerHTML = Object.entries(districtCount)
      .sort((a, b) => b[1] - a[1])
      .map(([d, cnt]) => `
        <div class="district-card" onclick="filterDistrict('${d}')">
          <span class="district-emoji">${districtEmoji[d] || '📍'}</span>
          <div class="district-name">${d}</div>
          <div class="district-count">${cnt} quán</div>
        </div>
      `).join('');
  }
}

// =========================
// FILTER
// =========================

function filterCuisine(cuisine) {
  activeFilters.cuisine = cuisine;
  showPage('browse');
  renderBrowse();
}

function filterDistrict(district) {
  activeFilters.district = district;
  activeFilters.cuisine  = 'all';
  activeFilters.price    = 'all';
  // sync dropdown
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
      (activeFilters.cuisine  === 'all' || r.cuisine  === activeFilters.cuisine)  &&
      (activeFilters.district === 'all' || r.district === activeFilters.district) &&
      (activeFilters.price    === 'all' || r.price    === activeFilters.price)
    );
  });
}

function renderBrowse() {
  const list = getFilteredRestaurants();

  $('#browseCount').textContent =
    `Tìm thấy ${list.length} quán`;

  $('#browseGrid').innerHTML =
    list.length
      ? list.map(renderCard).join('')
      : `<p>Không có kết quả</p>`;

  // Điền dropdown quận
  populateDistrictSelect();
}

function populateDistrictSelect() {
  const sel = document.querySelector('.filter-select');
  if (!sel) return;
  const districts = [...new Set(restaurants.map(r => r.district))].sort();
  sel.innerHTML =
    `<option value="all">Tất cả quận</option>` +
    districts.map(d =>
      `<option value="${d}" ${activeFilters.district === d ? 'selected' : ''}>${d}</option>`
    ).join('');
  sel.onchange = e => setFilter('district', e.target.value);
}

// =========================
// DETAIL
// =========================

function showDetail(id) {
  currentDetailId = id;

  const r = restaurants.find(x => x.id === id);
  if (!r) return;

  const { avg, count } = getRestaurantRating(id);

  $('#detailCuisine').textContent   = r.cuisine;
  $('#detailName').textContent      = r.name;
  $('#detailRatingNum').textContent = avg || '0';
  $('#detailReviewCount').textContent = count;
  $('#detailStars').innerHTML       = renderStars(Math.round(avg));

  $('#detailInfo').innerHTML = `
    <div>📍 ${r.address}</div>
    <div>🏘️ ${r.district}</div>
    <div>💰 ${r.price}</div>
  `;

  $('#detailTags').innerHTML =
    r.tags.map(tag => `
      <span class="detail-tag">${tag}</span>
    `).join('');

  renderReviews(id);
  showPage('detail');
}

function renderReviews(id) {
  const list = reviews.filter(r => r.restaurantId === id);

  $('#detailReviews').innerHTML =
    list.length
      ? list.map(r => `
          <div class="review-card">
            <strong>${r.author}</strong>
            ${renderStars(r.rating)}
            <p>${r.comment}</p>
          </div>
        `).join('')
      : `<p>Chưa có đánh giá</p>`;
}

// =========================
// REVIEW
// =========================

function setStarRating(value) {
  selectedStars = value;
  $$('.star-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < value);
  });
}

function populateReviewSelect() {
  const sel = $('#reviewRestaurantSelect');
  if (!sel) return;
  sel.innerHTML =
    `<option value="">-- Chọn nhà hàng --</option>` +
    restaurants.map(r =>
      `<option value="${r.id}">${r.name} (${r.district})</option>`
    ).join('');
  if (currentDetailId) sel.value = currentDetailId;
}

function submitReview() {
  const restaurantId = $('#reviewRestaurantSelect').value;
  const author       = $('#reviewAuthor').value.trim();
  const comment      = $('#reviewComment').value.trim();

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

// =========================
// SEARCH
// =========================

function handleHeroSearch() {}

function doHeroSearch() {
  const keyword = $('#heroSearch').value.toLowerCase();

  const result = restaurants.filter(r =>
    r.name.toLowerCase().includes(keyword)    ||
    r.cuisine.toLowerCase().includes(keyword) ||
    r.district.toLowerCase().includes(keyword)||
    r.tags.some(t => t.toLowerCase().includes(keyword))
  );

  showPage('browse');

  $('#browseGrid').innerHTML =
    result.map(renderCard).join('');

  $('#browseCount').textContent =
    `Tìm thấy ${result.length} quán`;
}

// =========================
// PAGE
// =========================

function showPage(name) {
  $$('.page').forEach(page =>
    page.classList.remove('active')
  );

  $(`#page-${name}`).classList.add('active');
  window.scrollTo(0, 0);

  if (name === 'addReview') populateReviewSelect();
}

function setActiveNav(btn) {
  $$('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function goBack() {
  showPage('home');
}

// =========================
// INIT
// =========================

renderHome();
renderBrowse();


$('#featuredStrip').innerHTML =
  restaurants
    .filter(r => r.featured)
    .map(renderCard)
    .join('');