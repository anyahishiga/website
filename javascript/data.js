const CUISINES = [
  { name: 'Phở' }, { name: 'Bánh mì' }, { name: 'Cơm tấm' },
  { name: 'Hải sản' }, { name: 'Bún bò' }, { name: 'Lẩu' },
  { name: 'Cà phê' }, { name: 'Bánh ngọt' }
];

const BASE_RESTAURANTS = [
  {
    id: 'banh-mi-huynh-hoa', name: 'Bánh Mì Huỳnh Hoa', cuisine: 'Bánh mì', district: 'Quận 1', address: '26 Lê Thị Riêng, Q.1',
    price: '₫', tags: ['giá rẻ', 'đặc biệt', 'phải thử'], featured: true, image: 'images/Banh_Mi_Huynh_Hoa.jpeg'
  },
  {
    id: 'com-tam-ba-ghien', name: 'Cơm Tấm Bà Ghiền', cuisine: 'Cơm tấm', district: 'Quận 1', address: '84 Đặng Văn Ngữ, Q.1',
    price: '₫', tags: ['sườn nướng', 'bình dân'], featured: true, image: 'images/com_tam_ba_ghien.jpeg'
  },
  {
    id: 'pho-2000', name: 'Phở 2000', cuisine: 'Phở', district: 'Quận 1', address: '1-3 Phan Chu Trinh, Q.1',
    price: '₫₫', tags: ['nổi tiếng', 'du lịch', 'sáng'], featured: true, image: 'images/pho_20000.jpeg'
  },
  { id: 'banh-xeo-46a', name: 'Bánh Xèo 46A', cuisine: 'Bánh ngọt', district: 'Quận 1', address: '46A Đinh Công Tráng, Q.1', price: '₫₫', tags: ['bánh xèo', 'giòn', 'nổi tiếng'], featured: true },
  { id: 'cafe-trung-q1', name: 'Cà Phê Trứng Hà Nội', cuisine: 'Cà phê', district: 'Quận 1', address: '38 Lý Tự Trọng, Q.1', price: '₫', tags: ['cà phê trứng', 'yên tĩnh', 'sáng'], featured: false },

  { id: 'pho-hoa', name: 'Phở Hòa Pasteur', cuisine: 'Phở', district: 'Quận 3', address: '260C Pasteur, Q.3', price: '₫₫', tags: ['nổi tiếng', 'truyền thống', 'sáng sớm'], featured: true },
  { id: 'com-nieu-sai-gon', name: 'Cơm Niêu Sài Gòn', cuisine: 'Cơm tấm', district: 'Quận 3', address: '2C Đinh Tiên Hoàng, Q.3', price: '₫₫', tags: ['cơm niêu', 'truyền thống', 'gia đình'], featured: false },
  { id: 'bun-bo-45-q3', name: 'Bún Bò Huế 45', cuisine: 'Bún bò', district: 'Quận 3', address: '45 Trần Quốc Thảo, Q.3', price: '₫', tags: ['bún bò', 'cay', 'sáng sớm'], featured: false },
  { id: 'lau-q3', name: 'Lẩu Bảy Món Quận 3', cuisine: 'Lẩu', district: 'Quận 3', address: '30 Võ Văn Tần, Q.3', price: '₫₫', tags: ['lẩu', 'nhóm', 'tối'], featured: false },

  { id: 'hai-san-nam-can', name: 'Hải Sản Năm Cần Thơ', cuisine: 'Hải sản', district: 'Quận 4', address: '5 Vĩnh Khánh, Q.4', price: '₫₫₫', tags: ['hải sản', 'tôm hùm', 'nhậu'], featured: false },
  { id: 'bun-mam-q4', name: 'Bún Mắm Cô Năm', cuisine: 'Bún bò', district: 'Quận 4', address: '18 Hoàng Diệu, Q.4', price: '₫', tags: ['bún mắm', 'miền Tây', 'đặc sản'], featured: false },
  { id: 'com-tam-q4', name: 'Cơm Tấm Thuận Kiều', cuisine: 'Cơm tấm', district: 'Quận 4', address: '72 Tôn Thất Thuyết, Q.4', price: '₫', tags: ['cơm tấm', 'sườn nướng', 'bình dân'], featured: false },

  { id: 'pho-le', name: 'Phở Lê', cuisine: 'Phở', district: 'Quận 5', address: '413-415 Nguyễn Trãi, Q.5', price: '₫', tags: ['phở', 'bình dân', 'sáng sớm'], featured: false },
  { id: 'bun-bo-hue', name: 'Bún Bò Huế Gia Hội', cuisine: 'Bún bò', district: 'Quận 5', address: '12 Châu Văn Liêm, Q.5', price: '₫', tags: ['bún bò', 'cay', 'miền Trung'], featured: false },
  { id: 'hai-san-cho-lon', name: 'Hải Sản Chợ Lớn', cuisine: 'Hải sản', district: 'Quận 5', address: '88 Nguyễn Trãi, Q.5', price: '₫₫', tags: ['hải sản', 'chợ lớn', 'tươi sống'], featured: false },
  { id: 'banh-mi-chu-teo', name: 'Bánh Mì Chú Tèo', cuisine: 'Bánh mì', district: 'Quận 5', address: '55 Hải Thượng Lãn Ông, Q.5', price: '₫', tags: ['bánh mì', 'sáng', 'giá rẻ'], featured: false },

  { id: 'banh-xeo-ba-tu', name: 'Bánh Xèo Bà Tư', cuisine: 'Bánh ngọt', district: 'Quận 6', address: '34 Bình Tây, Q.6', price: '₫', tags: ['bánh xèo', 'giòn rụm', 'chiều'], featured: false },
  { id: 'bun-mam-ba-hai', name: 'Bún Mắm Bà Hai', cuisine: 'Bún bò', district: 'Quận 6', address: '9 Lê Quang Sung, Q.6', price: '₫', tags: ['bún mắm', 'đậm đà', 'trưa'], featured: false },

  { id: 'lau-thai', name: 'Lẩu Thái Cung Đình', cuisine: 'Lẩu', district: 'Quận 7', address: '10 Phú Mỹ Hưng, Q.7', price: '₫₫', tags: ['lẩu', 'thái', 'nhóm'], featured: false },
  { id: 'hai-san-song-sai-gon', name: 'Hải Sản Sông Sài Gòn', cuisine: 'Hải sản', district: 'Quận 7', address: '50 Nguyễn Văn Linh, Q.7', price: '₫₫₫', tags: ['hải sản', 'view sông', 'cao cấp'], featured: true },
  { id: 'cafe-q7', name: 'The Coffee House Phú Mỹ Hưng', cuisine: 'Cà phê', district: 'Quận 7', address: '12 Lê Văn Lương, Q.7', price: '₫₫', tags: ['cà phê', 'máy lạnh', 'làm việc'], featured: false },

  { id: 'com-tam-q8', name: 'Cơm Tấm Minh Ký', cuisine: 'Cơm tấm', district: 'Quận 8', address: '120 Phạm Thế Hiển, Q.8', price: '₫', tags: ['cơm tấm', 'sạch', 'bình dân'], featured: false },
  { id: 'lau-q8', name: 'Lẩu Mắm Bà Được', cuisine: 'Lẩu', district: 'Quận 8', address: '45 Tạ Quang Bửu, Q.8', price: '₫₫', tags: ['lẩu mắm', 'miền Tây', 'đặc sản'], featured: false },

  { id: 'pho-tau-bay', name: 'Phở Tàu Bay', cuisine: 'Phở', district: 'Quận 10', address: '433 Lý Thái Tổ, Q.10', price: '₫₫', tags: ['phở', 'huyền thoại', 'sáng'], featured: true },
  { id: 'com-tam-cali', name: 'Cơm Tấm Cali', cuisine: 'Cơm tấm', district: 'Quận 10', address: '7 Cao Thắng, Q.10', price: '₫₫', tags: ['cơm tấm', 'sạch sẽ', 'có máy lạnh'], featured: false },

  { id: 'banh-mi-q11', name: 'Bánh Mì Pate Quận 11', cuisine: 'Bánh mì', district: 'Quận 11', address: '67 Lý Thường Kiệt, Q.11', price: '₫', tags: ['bánh mì', 'pate', 'sáng sớm'], featured: false },
  { id: 'pho-q11', name: 'Phở Bắc Hải', cuisine: 'Phở', district: 'Quận 11', address: '112 Ba Tháng Hai, Q.11', price: '₫', tags: ['phở bắc', 'trong', 'ngọt nước'], featured: false },

  { id: 'banh-canh-cua', name: 'Bánh Canh Cua Bà Ba', cuisine: 'Hải sản', district: 'Quận Bình Thạnh', address: '45 Phan Xích Long, Bình Thạnh', price: '₫', tags: ['bánh canh', 'cua', 'sáng'], featured: false },
  { id: 'pho-binh', name: 'Phở Bình', cuisine: 'Phở', district: 'Quận Bình Thạnh', address: '7 Lý Chính Thắng, Bình Thạnh', price: '₫', tags: ['phở', 'lịch sử', 'sáng sớm'], featured: false },
  { id: 'cafe-den-da', name: 'Cà Phê Đen Đá Vợt', cuisine: 'Cà phê', district: 'Quận Bình Thạnh', address: '88 Đinh Bộ Lĩnh, Bình Thạnh', price: '₫', tags: ['cà phê vợt', 'truyền thống', 'sáng'], featured: false },

  { id: 'lau-de-bay-vien', name: 'Lẩu Dê Bảy Viên', cuisine: 'Lẩu', district: 'Quận Gò Vấp', address: '22 Quang Trung, Gò Vấp', price: '₫₫', tags: ['lẩu dê', 'nhậu', 'tối'], featured: false },
  { id: 'com-tam-gv', name: 'Cơm Tấm Bụi Gò Vấp', cuisine: 'Cơm tấm', district: 'Quận Gò Vấp', address: '105 Nguyễn Văn Nghi, Gò Vấp', price: '₫', tags: ['cơm tấm', 'bụi', 'bình dân'], featured: false },
  { id: 'bun-bo-gv', name: 'Bún Bò Chị Hoa', cuisine: 'Bún bò', district: 'Quận Gò Vấp', address: '78 Lê Đức Thọ, Gò Vấp', price: '₫', tags: ['bún bò', 'cay vừa', 'sáng'], featured: false },

  { id: 'pho-tan-binh', name: 'Phở 24 Tân Bình', cuisine: 'Phở', district: 'Quận Tân Bình', address: '24 Hoàng Văn Thụ, Tân Bình', price: '₫₫', tags: ['phở', 'sạch', 'gần sân bay'], featured: false },
  { id: 'bun-bo-nam-bo', name: 'Bún Bò Nam Bộ', cuisine: 'Bún bò', district: 'Quận Tân Bình', address: '67 Cộng Hòa, Tân Bình', price: '₫', tags: ['bún bò', 'khô', 'đặc biệt'], featured: true },
  { id: 'hai-san-tan-binh', name: 'Hải Sản Ngọc Sương', cuisine: 'Hải sản', district: 'Quận Tân Bình', address: '55 Trường Chinh, Tân Bình', price: '₫₫', tags: ['hải sản', 'tươi', 'gia đình'], featured: false },

  { id: 'banh-mi-phu-hoa', name: 'Bánh Mì Phú Hoa', cuisine: 'Bánh mì', district: 'Quận Phú Nhuận', address: '200 Phan Xích Long, Phú Nhuận', price: '₫', tags: ['bánh mì', 'nổi tiếng', 'sáng'], featured: false },
  { id: 'cafe-nha-tho', name: 'Cà Phê Nhà Thờ', cuisine: 'Cà phê', district: 'Quận Phú Nhuận', address: '14 Võ Thị Sáu, Phú Nhuận', price: '₫', tags: ['cà phê', 'view đẹp', 'yên tĩnh'], featured: false },
  { id: 'com-tam-pn', name: 'Cơm Tấm Ánh Hồng', cuisine: 'Cơm tấm', district: 'Quận Phú Nhuận', address: '33 Huỳnh Văn Bánh, Phú Nhuận', price: '₫', tags: ['cơm tấm', 'ngon', 'gần trung tâm'], featured: false },

  { id: 'lau-tan-phu', name: 'Lẩu Hải Sản Tân Phú', cuisine: 'Lẩu', district: 'Quận Tân Phú', address: '88 Tân Sơn Nhì, Tân Phú', price: '₫₫', tags: ['lẩu hải sản', 'nhóm', 'tối'], featured: false },
  { id: 'pho-tan-phu', name: 'Phở Hà Nội Tân Phú', cuisine: 'Phở', district: 'Quận Tân Phú', address: '45 Âu Cơ, Tân Phú', price: '₫', tags: ['phở bắc', 'sáng', 'ngọt nước'], featured: false },

  { id: 'com-tam-binh-tan', name: 'Cơm Tấm Ba Má', cuisine: 'Cơm tấm', district: 'Quận Bình Tân', address: '12 Kinh Dương Vương, Bình Tân', price: '₫', tags: ['cơm tấm', 'giá rẻ', 'đông khách'], featured: false },
  { id: 'banh-mi-binh-tan', name: 'Bánh Mì Thịt Nướng Bình Tân', cuisine: 'Bánh mì', district: 'Quận Bình Tân', address: '67 Tân Kỳ Tân Quý, Bình Tân', price: '₫', tags: ['bánh mì', 'thịt nướng', 'chiều'], featured: false },

  { id: 'hai-san-thu-duc', name: 'Hải Sản Đại Dương Xanh', cuisine: 'Hải sản', district: 'TP. Thủ Đức', address: '78 Võ Văn Ngân, Thủ Đức', price: '₫₫', tags: ['hải sản', 'tươi sống', 'gia đình'], featured: false },
  { id: 'lau-sinh-vien', name: 'Lẩu Thái Sinh Viên', cuisine: 'Lẩu', district: 'TP. Thủ Đức', address: '12 Kha Vạn Cân, Thủ Đức', price: '₫', tags: ['lẩu', 'sinh viên', 'giá rẻ'], featured: false },
  { id: 'cafe-vuon-thu-duc', name: 'Cà Phê Vườn Thủ Đức', cuisine: 'Cà phê', district: 'TP. Thủ Đức', address: '55 Lê Văn Việt, Thủ Đức', price: '₫', tags: ['cà phê', 'vườn', 'thư giãn'], featured: false },
  { id: 'pho-thu-duc', name: 'Phở Xe Lửa', cuisine: 'Phở', district: 'TP. Thủ Đức', address: '100 Đỗ Xuân Hợp, Thủ Đức', price: '₫', tags: ['phở', 'ngon', 'sáng sớm'], featured: false }
];