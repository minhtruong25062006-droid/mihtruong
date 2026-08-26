// ====================================
// ⚙️ WEBSITE CONFIG
// 👉 CHỈNH THÔNG TIN WEBSITE TẠI ĐÂY
// ====================================
const siteConfig = {
    siteName: "Góc của Trường",
    username: "@minhtruong2506",
    
    // 👉 ĐỔI AVATAR (Dán link ảnh của bạn vào)
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    
    bio: "Sinh viên IT đam mê công nghệ. Cùng mình khám phá những công cụ học tập và setup cực chất nhé!",
    
    socials: {
        tiktok: "https://tiktok.com/@minhtruong2506",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "" // Bỏ trống nếu không có
    },

    categories: [
        { id: "all", name: "🔥 Tất cả" },
        { id: "cong-nghe", name: "💻 Công nghệ & Setup" },
        { id: "hoc-tap", name: "📚 Góc Học Tập" },
        { id: "gia-dung", name: "🏠 Gia dụng tiện ích" }
    ]
};

// ========================================
// 🛒 DANH SÁCH SẢN PHẨM
// 👉 CHỈNH SẢN PHẨM TẠI ĐÂY
// ========================================
const products = [
    {
        id: "prod_01",
        isFeatured: true, // Đặt true để hiển thị to ở đầu trang
        name: "Bàn phím cơ Custom Trục Đỏ (Gõ cực êm)",
        description: "Cứu tinh cho những đêm gõ code C chạy deadline. Phím nảy, êm ái, LED RGB cực chất.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "750.000đ",
        badge: "🔥 ĐANG SALE",
        rating: 4.9,
        reviews: "3.2k",
        category: "cong-nghe",
        
        // ========================================
        // 🔗 LINK AFFILIATE
        // 👉 DÁN LINK AFFILIATE CỦA BẠN TẠI ĐÂY
        // ========================================
        affiliateLink: "https://shopee.vn" 
    },
    {
        id: "prod_02",
        isFeatured: false,
        name: "Giá đỡ Laptop Nhôm nguyên khối",
        description: "Chống gù lưng và mỏi vai gáy. Tản nhiệt cực tốt.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "85.000đ",
        oldPrice: "150.000đ",
        badge: "⭐ MUST HAVE",
        rating: 5.0,
        reviews: "10k+",
        category: "cong-nghe",
        affiliateLink: "https://shopee.vn"
    },
    {
        id: "prod_03",
        isFeatured: false,
        name: "Sách Hack Não 1500 Từ Tiếng Anh",
        description: "Giúp người mới bắt đầu nạp từ vựng cực nhanh qua hình ảnh.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        price: "199.000đ",
        oldPrice: "350.000đ",
        badge: "BÁN CHẠY",
        rating: 4.8,
        reviews: "2.5k",
        category: "hoc-tap",
        affiliateLink: "https://shopee.vn"
    }
];

// ====================================
// ❌ HẾT PHẦN CẤU HÌNH. 
// VUI LÒNG KHÔNG SỬA CODE BÊN DƯỚI.
// ====================================

let currentCategory = "all";
let currentSearch = "";

// 1. Khởi tạo giao diện
function initSite() {
    document.title = `${siteConfig.siteName} | Top sản phẩm`;
    document.getElementById('profile-name').textContent = siteConfig.siteName;
    document.getElementById('profile-username').textContent = siteConfig.username;
    document.getElementById('profile-bio').textContent = siteConfig.bio;
    document.getElementById('footer-name').textContent = siteConfig.siteName;
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const avatarImg = document.getElementById('profile-avatar');
    avatarImg.src = siteConfig.avatar;
    avatarImg.onerror = () => { avatarImg.src = 'https://via.placeholder.com/150'; };

    // Social Links
    const socialHTML = [];
    if(siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class='bx bxl-tiktok'></i></a>`);
    if(siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class='bx bxl-facebook-circle'></i></a>`);
    if(siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class='bx bxl-instagram'></i></a>`);
    if(siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class='bx bxl-youtube'></i></a>`);
    document.getElementById('social-container').innerHTML = socialHTML.join('');
}

// 2. Click Tracking System (Local Storage)
function trackClick(productId) {
    try {
        let clicks = JSON.parse(localStorage.getItem('product_clicks') || '{}');
        clicks[productId] = (clicks[productId] || 0) + 1;
        localStorage.setItem('product_clicks', JSON.stringify(clicks));
        console.log('Thống kê Click (Chỉ bạn thấy):', clicks);
    } catch(e) { console.warn('Lỗi tracking'); }
}

// Lắng nghe sự kiện click vào sản phẩm
document.addEventListener('click', function(e) {
    const card = e.target.closest('.track-click');
    if(card) {
        trackClick(card.getAttribute('data-id'));
    }
});

// 3. Render Card HTML
function createCardHTML(p, isFeatured = false) {
    const badge = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPrice = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label">🔥 SẢN PHẨM NỔI BẬT</span>` : '';
    
    // YÊU CẦU BẮT BUỘC: target="_blank" rel="nofollow sponsored noopener"
    return `
        <a href="${p.affiliateLink}" target="_blank" rel="nofollow sponsored noopener" class="product-card track-click ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}">
            <div class="p-img">
                ${badge}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300'">
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
                    ${oldPrice}
                </div>
                <div class="btn-buy">${isFeatured ? 'Xem deal →' : 'Xem sản phẩm →'}</div>
            </div>
        </a>
    `;
}

// 4. Render Sản phẩm & Danh mục
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
    
    // Lọc
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

    // Tách Featured
    const featuredProduct = filtered.find(p => p.isFeatured);
    const normalProducts = filtered.filter(p => !p.isFeatured);

    // Hiển thị
    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p)).join('');
}

// 5. Search & Dark Mode & Back to top
document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterProducts();
});

const themeBtn = document.getElementById('theme-toggle');
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

const bttBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) bttBtn.classList.add('show');
    else bttBtn.classList.remove('show');
});
bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    initSite();
    renderCategories();
    filterProducts();
});
er Danh sách sản phẩm
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
