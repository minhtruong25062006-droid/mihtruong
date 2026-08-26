// ====================================
// ⚙️ WEBSITE CONFIG
// 👉 CHỈNH THÔNG TIN WEBSITE TẠI ĐÂY
// ====================================
const siteConfig = {
    siteName: "Minh Trường",
    username: "@minhtruong",
    // 🖼️ LINK ẢNH AVATAR
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300", 
    bio: "Tổng hợp những sản phẩm hữu ích và đáng mua.",
    socials: {
        tiktok: "https://tiktok.com/@minhtruong",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "" // Để trống nếu không dùng
    },
    categories: [
        { id: "all", name: "🔥 Tất cả" },
        { id: "cong-nghe", name: "💻 Công nghệ" },
        { id: "gaming", name: "🎮 Gaming" },
        { id: "gia-dung", name: "🏠 Gia dụng" },
        { id: "thoi-trang", name: "👕 Thời trang" },
        { id: "hoc-tap", name: "📚 Học tập" }
    ]
};

// ========================================
// 🛒 DANH SÁCH SẢN PHẨM
// 👉 CHỈNH SẢN PHẨM TẠI ĐÂY
// ========================================
const products = [
    {
        id: "p1",
        featured: true, // Hiển thị to ở phần Sản phẩm nổi bật
        name: "[DEMO] Bàn phím cơ Custom Trục Đỏ",
        description: "Gõ êm, có LED RGB. Sản phẩm dùng để minh họa.",
        // 🖼️ LINK ẢNH SẢN PHẨM
        // 👉 DÁN LINK ẢNH VÀO ĐÂY
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "600.000đ",
        discount: "-25%",
        badge: "🔥 HOT",
        rating: 4.9,
        reviews: 120,
        category: "cong-nghe",
        // 🔗 LINK AFFILIATE
        // 👉 DÁN LINK AFFILIATE CỦA SẢN PHẨM VÀO ĐÂY
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p2",
        featured: false,
        name: "[DEMO] Chuột Gaming Không Dây",
        description: "Độ trễ thấp, vừa vặn tay cầm, click siêu êm.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: "150.000đ",
        oldPrice: "250.000đ",
        discount: "-40%",
        badge: "BEST SELLER",
        rating: 4.8,
        reviews: 340,
        category: "gaming",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p3",
        featured: false,
        name: "[DEMO] Tai nghe Bluetooth Chống Ồn",
        description: "Pin trâu 24h, bass đập cực căng, chống ồn chủ động.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: "299.000đ",
        oldPrice: "499.000đ",
        discount: "-40%",
        badge: "GIẢM SỐC",
        rating: 4.7,
        reviews: 215,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p4",
        featured: false,
        name: "[DEMO] Giá Đỡ Điện Thoại Hợp Kim",
        description: "Gấp gọn tiện lợi, chống mỏi cổ khi học online.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "55.000đ",
        oldPrice: "100.000đ",
        discount: "-45%",
        badge: "RẺ VÔ ĐỊCH",
        rating: 5.0,
        reviews: 890,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p5",
        featured: false,
        name: "[DEMO] Đèn LED Bàn Học Chống Cận",
        description: "3 chế độ sáng, bảo vệ mắt, có kẹp bàn tiện lợi.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500",
        price: "120.000đ",
        oldPrice: "180.000đ",
        discount: "-33%",
        badge: "MỚI",
        rating: 4.8,
        reviews: 156,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p6",
        featured: false,
        name: "[DEMO] Hub USB Type-C 5 in 1",
        description: "Mở rộng cổng kết nối cho Laptop, truyền dữ liệu nhanh.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500",
        price: "180.000đ",
        oldPrice: "250.000đ",
        discount: "-28%",
        badge: "",
        rating: 4.6,
        reviews: 88,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p7",
        featured: false,
        name: "[DEMO] Túi Đeo Chéo Canvas Basic",
        description: "Đựng vừa iPad, phong cách trẻ trung năng động.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        price: "99.000đ",
        oldPrice: "150.000đ",
        discount: "-34%",
        badge: "TRENDING",
        rating: 4.9,
        reviews: 420,
        category: "thoi-trang",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p8",
        featured: false,
        name: "[DEMO] Bình Giữ Nhiệt Inox 304",
        description: "Giữ đá 24h, kèm ống hút inox, dung tích 750ml.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        price: "110.000đ",
        oldPrice: "190.000đ",
        discount: "-42%",
        badge: "",
        rating: 4.8,
        reviews: 512,
        category: "gia-dung",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    }
];

// ====================================
// ❌ HẾT PHẦN CẤU HÌNH. KHÔNG SỬA CODE BÊN DƯỚI.
// ====================================

let currentCategory = "all";
let currentSearch = "";

// 1. Tải thông tin Profile lên giao diện
function initProfile() {
    document.title = `${siteConfig.siteName} | Top Sản Phẩm`;
    document.getElementById('profile-name').textContent = siteConfig.siteName;
    document.getElementById('profile-username').textContent = siteConfig.username;
    document.getElementById('profile-bio').textContent = siteConfig.bio;
    
    // Gắn Footer
    document.getElementById('footer-name').textContent = siteConfig.siteName;
    document.getElementById('current-year').textContent = new Date().getFullYear(); // Tự động lấy năm hiện tại (2026)

    // Xử lý Avatar fallback
    const avatarImg = document.getElementById('profile-avatar');
    avatarImg.src = siteConfig.avatar;
    avatarImg.onerror = function() { this.src = 'https://via.placeholder.com/150'; };

    // Gắn icon mạng xã hội
    const socialHTML = [];
    if(siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener"><i class='bx bxl-tiktok'></i></a>`);
    if(siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener"><i class='bx bxl-facebook-circle'></i></a>`);
    if(siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener"><i class='bx bxl-instagram'></i></a>`);
    if(siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener"><i class='bx bxl-youtube'></i></a>`);
    document.getElementById('social-container').innerHTML = socialHTML.join('');
}

// 2. Click Tracking System
function trackClick(productId) {
    try {
        let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '{}');
        clicks[productId] = (clicks[productId] || 0) + 1;
        localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));
    } catch(e) {}
}

// 3. Render Card HTML
function createCardHTML(p, isFeatured = false) {
    const badgeHTML = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPriceHTML = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const discountHTML = p.discount ? `<span class="p-discount" style="color: #ef4444; font-size: 12px; margin-left: 4px;">${p.discount}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label" style="display:block; color:#ef4444; font-size:12px; font-weight:700; margin-bottom:8px;">🔥 SẢN PHẨM NỔI BẬT</span>` : '';
    
    // Kiểm tra xem Link đã được gắn thật chưa
    const isPlaceholderLink = p.affiliateLink === "DÁN_LINK_AFFILIATE_VÀO_ĐÂY" || !p.affiliateLink;
    
    // Nếu chưa thay link -> Hiện cảnh báo. Nếu thay rồi -> Mở tab mới với nofollow.
    const linkHref = isPlaceholderLink ? "javascript:void(0)" : p.affiliateLink;
    const linkAction = isPlaceholderLink ? `onclick="alert('Link sản phẩm chưa được cập nhật.'); return false;"` : `target="_blank" rel="nofollow sponsored noopener"`;

    return `
        <a href="${linkHref}" ${linkAction} class="product-card track-btn ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}">
            <div class="p-img">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300?text=Lỗi+Ảnh'">
            </div>
            <div class="p-info">
                ${featureLabel}
                <h3 class="p-name">${p.name}</h3>
                <p class="p-desc">${p.description}</p>
                <div class="p-rating">
                    <i class='bx bxs-star'></i> ${p.rating} <span>(${p.reviews})</span>
                </div>
                <div class="p-prices">
                    <span class="p-price">${p.price}</span>
                    ${oldPriceHTML} ${discountHTML}
                </div>
                <div class="btn-buy">${isFeatured ? 'Xem deal →' : 'Xem sản phẩm →'}</div>
            </div>
        </a>
    `;
}

// 4. Khởi tạo danh mục & Render Sản phẩm
function renderCategories() {
    const container = document.getElementById('category-container');
    container.innerHTML = siteConfig.categories.map(c => 
        `<li><button class="cat-btn ${c.id === currentCategory ? 'active' : ''}" data-id="${c.id}">${c.name}</button></li>`
    ).join('');

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-id');
            filterProducts();
        });
    });
}

function filterProducts() {
    const grid = document.getElementById('product-container');
    const featured = document.getElementById('featured-container');
    const noResult = document.getElementById('no-result');
    const term = currentSearch.trim().toLowerCase();
    
    // Lọc theo keyword & category
    let filtered = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = ''; featured.innerHTML = '';
        noResult.classList.remove('hidden');
        return;
    }
    noResult.classList.add('hidden');

    const featuredProduct = filtered.find(p => p.featured);
    const normalProducts = filtered.filter(p => !p.featured);

    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p)).join('');

    // Gắn sự kiện tracking click cho các card vừa tạo
    document.querySelectorAll('.track-btn').forEach(card => {
        card.addEventListener('click', function(e) {
            if(this.getAttribute('href') !== 'javascript:void(0)') {
                trackClick(this.getAttribute('data-id'));
            }
        });
    });
}

// 5. Thanh Tìm Kiếm & Dark Mode
document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterProducts();
});

const themeBtn = document.getElementById('theme-toggle');
if(themeBtn) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
    }
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.innerHTML = isDark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
    });
}

// Chạy các tính năng khi load xong web
document.addEventListener('DOMContentLoaded', () => {
    initProfile();
    renderCategories();
    filterProducts();
});
) || p.description.toLowerCase().includes(currentSearch);
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
