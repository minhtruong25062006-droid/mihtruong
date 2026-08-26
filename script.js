// ==============================================================
// 🔧 CẤU HÌNH WEBSITE - CHỈNH Ở ĐÂY
// Tất cả nội dung trang web được lấy từ khu vực này.
// Bạn chỉ cần thay chữ bên trong ngoặc kép "..." 
// ==============================================================

const CONFIG = {
    // 1. THÔNG TIN CÁ NHÂN / THƯƠNG HIỆU
    profile: {
        name: "Minh Trường", // Tên hiển thị trên cùng
        description: "Review • Gợi ý • Deal tốt mỗi ngày", // Mô tả ngắn
        
        // 👉 THAY LINK ẢNH AVATAR TẠI ĐÂY (Có thể lấy link ảnh từ Facebook/Insta)
        avatar: "https://cdn.phototourl.com/free/2026-08-26-29759525-d139-4d54-9661-79ed814c1d2e.jpg" 
    },

    // 2. MẠNG XÃ HỘI (Để trống "" nếu không có)
    socials: {
        tiktok: "https://www.tiktok.com/@minhtruong256_?_r=1&_t=ZS-99C33GnUuW7",
        facebook: "https://www.facebook.com/share/1DQBjKnseu/",
        instagram: "https://instagram.com"
    },

    // 3. DANH MỤC SẢN PHẨM
    categories: [
        { id: "all", name: "🔥 Tất cả" },
        { id: "cong-nghe", name: "💻 Công nghệ" },
        { id: "gia-dung", name: "🏠 Gia dụng" },
        { id: "thoi-trang", name: "👕 Thời trang" },
        { id: "khac", name: "🎁 Khác" }
    ],

    // 4. SẢN PHẨM NỔI BẬT NHẤT (Hiển thị ở khu vực Deal to nhất)
    featuredDeal: {
        name: "Tai Nghe Bluetooth Chống Ồn Chủ Động Mẫu Mới (DỮ LIỆU MẪU)",
        description: "Pin trâu 24h, âm thanh bass cực căng. Sản phẩm best seller tuần này.",
        // 👉 THAY LINK ẢNH SẢN PHẨM TẠI ĐÂY
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        price: "299.000đ",
        oldPrice: "500.000đ",
        badge: "⚡ SALE 40%",
        rating: "4.9",
        reviews: "2.1k",
        // 👉 THAY LINK AFFILIATE CỦA SẢN PHẨM TẠI ĐÂY
        affiliateLink: "https://shopee.vn"
    },

    // ================================
    // 🔥 5. DANH SÁCH SẢN PHẨM
    // ================================
    products: [
        {
            name: "Chuột Gaming Không Dây Led RGB (DỮ LIỆU MẪU)",
            description: "Độ trễ thấp, click êm, pin sạc type-C",
            // 👉 THAY LINK ẢNH SẢN PHẨM TẠI ĐÂY
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
            price: "150.000đ",
            oldPrice: "250.000đ",
            badge: "HOT",
            rating: "4.8",
            reviews: "150",
            category: "cong-nghe", // Phải khớp với id trong mục DANH MỤC ở trên
            // 👉 THAY LINK AFFILIATE CỦA SẢN PHẨM TẠI ĐÂY
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Bàn Phím Cơ Custom Trục Đỏ (DỮ LIỆU MẪU)",
            description: "Gõ siêu êm, có hotswap, layout 75%",
            image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
            price: "450.000đ",
            oldPrice: "600.000đ",
            badge: "ĐÁNG MUA",
            rating: "4.9",
            reviews: "340",
            category: "cong-nghe",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Giá Đỡ Điện Thoại/Tablet Hợp Kim (DỮ LIỆU MẪU)",
            description: "Gấp gọn tiện lợi, chống mỏi cổ",
            image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500&q=80",
            price: "55.000đ",
            oldPrice: "100.000đ",
            badge: "RẺ VÔ ĐỊCH",
            rating: "5.0",
            reviews: "5k+",
            category: "cong-nghe",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Đèn LED Hoàng Hôn Trang Trí Quay Tiktok (DỮ LIỆU MẪU)",
            description: "Đổi 16 màu qua app, chill phòng ngủ",
            image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500&q=80",
            price: "89.000đ",
            oldPrice: "",
            badge: "TRENDING",
            rating: "4.7",
            reviews: "890",
            category: "gia-dung",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Bình Giữ Nhiệt Inox 304 Khắc Tên (DỮ LIỆU MẪU)",
            description: "Giữ đá 24h, kèm ống hút inox",
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
            price: "120.000đ",
            oldPrice: "190.000đ",
            badge: "",
            rating: "4.8",
            reviews: "1.2k",
            category: "gia-dung",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Máy Xay Sinh Tố Cầm Tay Tiện Lợi (DỮ LIỆU MẪU)",
            description: "Mang đi học, đi làm, sạc pin",
            image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80",
            price: "210.000đ",
            oldPrice: "300.000đ",
            badge: "GIẢM MẠNH",
            rating: "4.6",
            reviews: "450",
            category: "gia-dung",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Túi Đeo Chéo Vải Canvas Form Rộng (DỮ LIỆU MẪU)",
            description: "Đựng vừa laptop 14 inch, phong cách Hàn",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
            price: "150.000đ",
            oldPrice: "200.000đ",
            badge: "MỚI",
            rating: "4.9",
            reviews: "112",
            category: "thoi-trang",
            affiliateLink: "https://shopee.vn"
        },
        {
            name: "Nến Thơm Thư Giãn Tinh Dầu (DỮ LIỆU MẪU)",
            description: "Khử mùi phòng, dễ ngủ",
            image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80",
            price: "99.000đ",
            oldPrice: "",
            badge: "",
            rating: "4.8",
            reviews: "60",
            category: "khac",
            affiliateLink: "https://shopee.vn"
        }
    ]
};

// ==============================================================
// ❌ HẾT PHẦN CẤU HÌNH. VUI LÒNG KHÔNG SỬA CODE BÊN DƯỚI 
// NẾU BẠN KHÔNG RÀNH VỀ JAVASCRIPT!
// ==============================================================

// Biến toàn cục để lưu trạng thái
let currentCategory = "all";
let currentSearch = "";

// Hàm an toàn khi ảnh lỗi
const handleImageError = (img) => {
    img.src = 'https://via.placeholder.com/300x300?text=L%E1%BB%97i+%E1%BA%A3nh';
};

// 1. Render Thông tin cá nhân & Footer
function renderProfile() {
    document.title = `Top sản phẩm đáng mua | ${CONFIG.profile.name}`;
    document.getElementById('profile-name').innerText = CONFIG.profile.name;
    document.getElementById('profile-desc').innerText = CONFIG.profile.description;
    document.getElementById('profile-avatar').src = CONFIG.profile.avatar;
    document.getElementById('profile-avatar').onerror = function() { handleImageError(this) };
    
    document.getElementById('footer-name').innerText = CONFIG.profile.name;
    document.getElementById('copy-name').innerText = CONFIG.profile.name;
    document.getElementById('year').innerText = new Date().getFullYear();

    // Render Social Icons
    const socialHTML = [];
    if(CONFIG.socials.tiktok) socialHTML.push(`<a href="${CONFIG.socials.tiktok}" target="_blank" rel="noopener"><i class='bx bxl-tiktok'></i></a>`);
    if(CONFIG.socials.facebook) socialHTML.push(`<a href="${CONFIG.socials.facebook}" target="_blank" rel="noopener"><i class='bx bxl-facebook-circle'></i></a>`);
    if(CONFIG.socials.instagram) socialHTML.push(`<a href="${CONFIG.socials.instagram}" target="_blank" rel="noopener"><i class='bx bxl-instagram'></i></a>`);
    
    document.getElementById('social-container').innerHTML = socialHTML.join('');
    document.getElementById('footer-social-container').innerHTML = socialHTML.join('');
}

// 2. Render Template HTML cho 1 sản phẩm
function getProductHTML(product) {
    const badgeHTML = product.badge ? `<div class="badge">${product.badge}</div>` : '';
    const oldPriceHTML = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : '';
    
    // Yêu cầu quan trọng: Thuộc tính rel="nofollow sponsored noopener" cho Affiliate Link
    return `
        <a href="${product.affiliateLink}" target="_blank" rel="nofollow sponsored noopener" class="product-card">
            <div class="img-container">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="handleImageError(this)">
            </div>
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="rating">
                    <i class='bx bxs-star'></i> ${product.rating} <span>(${product.reviews})</span>
                </div>
                <div class="price-container">
                    <span class="price">${product.price}</span>
                    ${oldPriceHTML}
                </div>
                <div class="btn-buy">Xem sản phẩm</div>
            </div>
        </a>
    `;
}

// 3. Render Deal Nổi Bật
function renderFeaturedDeal() {
    if(CONFIG.featuredDeal) {
        document.getElementById('featured-deal').innerHTML = getProductHTML(CONFIG.featuredDeal);
    }
}

// 4. Render Danh mục
function renderCategories() {
    const container = document.getElementById('category-container');
    container.innerHTML = CONFIG.categories.map(cat => 
        `<button class="cat-btn ${cat.id === currentCategory ? 'active' : ''}" data-id="${cat.id}">
            ${cat.name}
        </button>`
    ).join('');

    // Bắt sự kiện click
    const buttons = container.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-id');
            filterProducts();
        });
    });
}

// 5. Lọc và Render Danh sách sản phẩm
function filterProducts() {
    const container = document.getElementById('product-container');
    const noResult = document.getElementById('no-result');
    
    // Lọc theo category và search
    const filtered = CONFIG.products.filter(p => {
        const matchCategory = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(currentSearch) || p.description.toLowerCase().includes(currentSearch);
        return matchCategory && matchSearch;
    });

    if (filtered.length > 0) {
        container.innerHTML = filtered.map(p => getProductHTML(p)).join('');
        container.classList.remove('hidden');
        noResult.classList.add('hidden');
    } else {
        container.innerHTML = '';
        container.classList.add('hidden');
        noResult.classList.remove('hidden');
    }
}

// 6. Xử lý thanh Tìm kiếm
document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    filterProducts();
});

// 7. Đồng hồ đếm ngược (Countdown ảo tạo cảm giác FOMO nhẹ)
function initCountdown() {
    let hours = 5;
    let minutes = 59;
    let seconds = 59;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) hours = 23; // Reset

        document.getElementById('countdown').innerText = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// 8. Nút Back to Top & Scroll mượt
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Chạy các hàm khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderFeaturedDeal();
    renderCategories();
    filterProducts();
    initCountdown();
});
