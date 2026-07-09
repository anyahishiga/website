-- ============================================================
--  Ăn Ngon — HCMC Food Review Website
--  Database Schema + Seed Data
-- ============================================================

-- ============================================================
-- TABLES
-- ============================================================

CREATE TABLE cuisines (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE restaurants (
  id       VARCHAR(100) PRIMARY KEY,       -- slug, e.g. 'pho-hoa'
  name     VARCHAR(255) NOT NULL,
  cuisine  VARCHAR(100) NOT NULL REFERENCES cuisines(name),
  district VARCHAR(100) NOT NULL,
  address  VARCHAR(255) NOT NULL,
  price    VARCHAR(10)  NOT NULL CHECK (price IN ('₫','₫₫','₫₫₫')),
  featured BOOLEAN DEFAULT FALSE,
  badge    VARCHAR(50),                    -- e.g. 'Nổi tiếng', 'Mới', 'Top pick'
  emoji    VARCHAR(10),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE restaurant_tags (
  id            SERIAL PRIMARY KEY,
  restaurant_id VARCHAR(100) NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  tag           VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  id            VARCHAR(50) PRIMARY KEY,
  restaurant_id VARCHAR(100) NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  author        VARCHAR(150) NOT NULL,
  rating        SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment       TEXT NOT NULL,
  review_date   DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at    TIMESTAMP DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_restaurants_cuisine  ON restaurants(cuisine);
CREATE INDEX idx_restaurants_district ON restaurants(district);
CREATE INDEX idx_restaurants_price    ON restaurants(price);
CREATE INDEX idx_reviews_restaurant   ON reviews(restaurant_id);

-- ============================================================
-- SEED: món đặc trưng Sài Gòn
-- ============================================================

INSERT INTO cuisines (name) VALUES
  ('Phở'),
  ('Bánh mì'),
  ('Cơm tấm'),
  ('Hải sản'),
  ('Bún bò'),
  ('Lẩu'),
  ('Cà phê'),
  ('Bánh ngọt');

-- ============================================================
-- SEED: nhà hàng nổi tiếng Sài Gòn
-- ============================================================

INSERT INTO restaurants (id, name, cuisine, district, address, price, featured, badge, emoji) VALUES
  ('pho-hoa',          'Phở Hòa Pasteur',        'Phở',     'Quận 3',           '260C Pasteur, Q.3',              '₫₫',  TRUE,  'Nổi tiếng', '🍜'),
  ('banh-mi-huynh-hoa','Bánh Mì Huỳnh Hoa',      'Bánh mì', 'Quận 1',           '26 Lê Thị Riêng, Q.1',          '₫',   TRUE,  'Top pick',  '🥖'),
  ('com-tam-ba-ghien', 'Cơm Tấm Bà Ghiền',       'Cơm tấm', 'Quận 1',           '84 Đặng Văn Ngữ, Q.1',          '₫',   TRUE,  NULL,        '🍚'),
  ('bun-bo-hue',       'Bún Bò Huế Gia Hội',     'Bún bò',  'Quận 5',           '12 Châu Văn Liêm, Q.5',         '₫',   FALSE, NULL,        '🥣'),
  ('hai-san-nam-can',  'Hải Sản Năm Cần Thơ',    'Hải sản', 'Quận 4',           '5 Vĩnh Khánh, Q.4',             '₫₫₫', FALSE, 'Mới',       '🦐'),
  ('lau-thai',         'Lẩu Thái Cung Đình',      'Lẩu',     'Quận 7',           '10 Phú Mỹ Hưng, Q.7',           '₫₫',  FALSE, NULL,        '🫕'),
  ('cafe-trung',       'Cà Phê Trứng Hà Nội',    'Cà phê',  'Quận 1',           '38 Lý Tự Trọng, Q.1',           '₫',   FALSE, 'Mới',       '☕'),
  ('pho-2000',         'Phở 2000',                'Phở',     'Quận 1',           '1-3 Phan Chu Trinh, Q.1',        '₫₫',  TRUE,  NULL,        '🍜'),
  ('com-nieu-sai-gon', 'Cơm Niêu Sài Gòn',       'Cơm tấm', 'Quận 3',           '2C Đinh Tiên Hoàng, Q.3',       '₫₫',  FALSE, NULL,        '🍚'),
  ('banh-canh-cua',    'Bánh Canh Cua Bà Ba',    'Hải sản', 'Quận Bình Thạnh',  '45 Phan Xích Long, Bình Thạnh', '₫',   FALSE, NULL,        '🦀'),
  ('lau-de-bay-vien',  'Lẩu Dê Bảy Viên',        'Lẩu',     'Quận Gò Vấp',      '22 Quang Trung, Gò Vấp',        '₫₫',  FALSE, NULL,        '🍲'),
  ('pho-le',           'Phở Lê',                  'Phở',     'Quận 5',           '413-415 Nguyễn Trãi, Q.5',      '₫',   FALSE, NULL,        '🍜');

-- ============================================================
-- SEED:tag nhà hàng
-- ============================================================

INSERT INTO restaurant_tags (restaurant_id, tag) VALUES
  ('pho-hoa',           'nổi tiếng'),
  ('pho-hoa',           'truyền thống'),
  ('pho-hoa',           'sáng sớm'),
  ('banh-mi-huynh-hoa', 'đặc biệt'),
  ('banh-mi-huynh-hoa', 'phải thử'),
  ('banh-mi-huynh-hoa', 'giá rẻ'),
  ('com-tam-ba-ghien',  'cơm tấm'),
  ('com-tam-ba-ghien',  'sườn nướng'),
  ('com-tam-ba-ghien',  'bình dân'),
  ('bun-bo-hue',        'bún bò'),
  ('bun-bo-hue',        'cay'),
  ('bun-bo-hue',        'miền Trung'),
  ('hai-san-nam-can',   'hải sản'),
  ('hai-san-nam-can',   'tôm hùm'),
  ('hai-san-nam-can',   'nhậu'),
  ('lau-thai',          'lẩu'),
  ('lau-thai',          'thái'),
  ('lau-thai',          'nhóm'),
  ('cafe-trung',        'cà phê trứng'),
  ('cafe-trung',        'yên tĩnh'),
  ('cafe-trung',        'sáng'),
  ('pho-2000',          'phở'),
  ('pho-2000',          'nổi tiếng'),
  ('pho-2000',          'du lịch'),
  ('com-nieu-sai-gon',  'cơm niêu'),
  ('com-nieu-sai-gon',  'truyền thống'),
  ('banh-canh-cua',     'bánh canh'),
  ('banh-canh-cua',     'cua'),
  ('banh-canh-cua',     'sáng'),
  ('lau-de-bay-vien',   'lẩu dê'),
  ('lau-de-bay-vien',   'nhậu'),
  ('lau-de-bay-vien',   'tối'),
  ('pho-le',            'phở'),
  ('pho-le',            'bình dân'),
  ('pho-le',            'sáng sớm');

-- ============================================================
-- SEED: REVIEWS
-- ============================================================

INSERT INTO reviews (id, restaurant_id, author, rating, comment, review_date) VALUES
  ('r1', 'pho-hoa',         'Minh Tuấn',   5, 'Phở ở đây ngon nhất Sài Gòn! Nước dùng trong, thơm, thịt mềm. Đã ăn hơn 20 năm vẫn không chán!', '2026-05-10'),
  ('r2', 'pho-hoa',         'Thu Hà',      4, 'Rất ngon nhưng hay đông người, phải đợi một chút. Xứng đáng để chờ!',                               '2026-05-08'),
  ('r3', 'banh-mi-huynh-hoa','Văn Long',   5, 'Bánh mì to, nhân đầy ắp, giá lại rẻ. Đây là quán bánh mì yêu thích của cả gia đình tôi.',           '2026-05-15'),
  ('r4', 'com-tam-ba-ghien','Ngọc Lan',    4, 'Cơm tấm sườn nướng thơm lừng, ăn kèm bì chả trứng rất đầy đặn. Giá hợp lý!',                       '2026-05-12'),
  ('r5', 'hai-san-nam-can', 'Hoàng Phúc', 5, 'Hải sản tươi sống, nhà hàng rộng rãi. Ghẹ rang me là món không thể bỏ qua!',                         '2026-05-18'),
  ('r6', 'cafe-trung',      'Bảo Châu',    5, 'Cà phê trứng béo ngậy, thơm lắm. Không gian nhỏ xinh rất thích hợp để làm việc buổi sáng.',         '2026-05-20');

