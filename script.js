// =========================================================
// ⚙️ CẤU HÌNH WEBSITE (CONFIG)
// =========================================================

// 👉 ĐỔI TÊN WEBSITE Ở ĐÂY
// 👉 ĐỔI USERNAME Ở ĐÂY
// 👉 ĐỔI BIO Ở ĐÂY
// 👉 ĐỔI AVATAR Ở ĐÂY
// 👉 ĐỔI LINK MẠNG XÃ HỘI Ở ĐÂY

const siteConfig = {
    siteName: "Minh Trường",
    username: "@minhtruong",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    bio: "Tổng hợp những sản phẩm hữu ích và đáng mua.",
    socials: {
        tiktok: "https://tiktok.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "" // Để trống ("") nếu không sử dụng
    }
};

// =========================================================
// 🛒 DANH SÁCH SẢN PHẨM (PRODUCTS)
// =========================================================
// Muốn thêm sản phẩm: → copy một object {}
// Muốn đổi tên:       → sửa name
// Muốn đổi ảnh:       → sửa image
// Muốn đổi giá:       → sửa price
// ⭐ MUỐN GẮN LINK:   → sửa affiliateLink
// =========================================================

const products = [
    {
        id: 1,
        featured: true, // 👉 Đổi thành true để làm Sản phẩm nổi bật
        name: "[DỮ LIỆU DEMO] Bàn phím cơ Custom Trục Đỏ",
        description: "Gõ siêu êm, có LED RGB, layout 75% gọn gàng.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "600.000đ",
        discount: "-25%",
        badge: "HOT",
        rating: 4.9,
        reviews: 120,
        category: "cong-nghe",
        
        // 🔗 LINK AFFILIATE
        // DÁN LINK AFFILIATE CỦA SẢN PHẨM VÀO ĐÂY
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 2,
        featured: false,
        name: "[DỮ LIỆU DEMO] Chuột Gaming Không Dây Silent",
        description: "Độ trễ thấp, click không tiếng ồn, pin sạc Type-C.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: "150.000đ",
        oldPrice: "250.000đ",
        discount: "-40%",
        badge: "NEW",
        rating: 4.8,
        reviews: 340,
        category: "gaming",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 3,
        featured: false,
        name: "[DỮ LIỆU DEMO] Tai nghe Bluetooth Chống Ồn",
        description: "Pin 24h, đệm tai êm ái, âm bass mạnh mẽ.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: "299.000đ",
        oldPrice: "499.000đ",
        discount: "-40%",
        badge: "",
        rating: 4.7,
        reviews: 215,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 4,
        featured: false,
        name: "[DỮ LIỆU DEMO] Giá Đỡ Điện Thoại/Tablet Hợp Kim",
        description: "Gấp gọn dễ dàng, mang đi học đi cafe rất tiện.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "55.000đ",
        oldPrice: "100.000đ",
        discount: "-45%",
        badge: "SALE",
        rating: 5.0,
        reviews: 890,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 5,
        featured: false,
        name: "[DỮ LIỆU DEMO] Đèn LED Bàn Học Bảo Vệ Mắt",
        description: "Chống cận, 3 chế độ sáng, có hộp cắm bút.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500",
        price: "120.000đ",
        oldPrice: "180.000đ",
        discount: "-33%",
        badge: "",
        rating: 4.8,
        reviews: 156,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 6,
        featured: false,
        name: "[DỮ LIỆU DEMO] Hub USB Type-C 5 in 1",
        description: "Mở rộng cổng kết nối cho Laptop, vỏ nhôm tản nhiệt.",
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
        id: 7,
        featured: false,
        name: "[DỮ LIỆU DEMO] Túi Đeo Chéo Canvas Nam Nữ",
        description: "Vải dày dặn, form rộng đựng vừa iPad và sổ tay.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        price: "99.000đ",
        oldPrice: "150.000đ",
        discount: "-34%",
        badge: "TREND",
        rating: 4.9,
        reviews: 420,
        category: "thoi-trang",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 8,
        featured: false,
        name: "[DỮ LIỆU DEMO] Bình Giữ Nhiệt Inox 304 750ml",
        description: "Giữ đá 24h, thiết kế trơn thanh lịch, tặng kèm ống hút.",
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

// =========================================================
// 🏷️ DANH MỤC SẢN PHẨM (CATEGORIES)
// =========================================================
const categories = [
    { id: "all", name: "🔥 Tất cả" },
    { id: "cong-nghe", name: "💻 Công nghệ" },
    { id: "gaming", name: "🎮 Gaming" },
    { id: "gia-dung", name: "🏠 Gia dụng" },
    { id: "thoi-trang", name: "👕 Thời trang" },
    { id: "hoc-tap", name: "📚 Học tập" }
];

// =========================================================
// 🔄 STATE (TRẠNG THÁI ỨNG DỤNG)
// =========================================================
const state = {
    currentCategory: "all",
    currentSearch: ""
};

// =========================================================
// 👤 PROFILE RENDER
// =========================================================
function initProfile() {
    document.title = `${siteConfig.siteName} | Top Sản Phẩm`;
    
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText('profile-name', siteConfig.siteName);
    setText('profile-username', siteConfig.username);
    setText('profile-bio', siteConfig.bio);
    setText('footer-name', siteConfig.siteName);
    setText('current-year', new Date().getFullYear());

    const avatarEl = document.getElementById('profile-avatar');
    if (avatarEl) {
        avatarEl.src = siteConfig.avatar;
        // Xử lý lỗi ảnh an toàn (Base64 SVG)
        avatarEl.onerror = function() {
            this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Cpath d='M50 55c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0 5c15 0 30 7.5 30 22.5V90H20v-7.5C20 67.5 35 60 50 60z' fill='%239ca3af'/%3E%3C/svg%3E";
        };
    }

    // Render Socials
    const socialHTML = [];
    if (siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class='bx bxl-tiktok'></i></a>`);
    if (siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class='bx bxl-facebook-circle'></i></a>`);
    if (siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class='bx bxl-instagram'></i></a>`);
    if (siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class='bx bxl-youtube'></i></a>`);
    
    const socialContainer = document.getElementById('social-container');
    if (socialContainer) socialContainer.innerHTML = socialHTML.join('');
}

// =========================================================
// 📦 PRODUCT RENDER
// =========================================================
function createCardHTML(p, isFeatured = false) {
    const badgeHTML = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPriceHTML = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const discountHTML = p.discount ? `<span class="p-discount">${p.discount}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label">🔥 SẢN PHẨM NỔI BẬT</span>` : '';
    
    // Fallback ảnh Base64 gọn nhẹ
    const fallbackImage = `this.onerror=null; this.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3ELỗi Ảnh%3C/text%3E%3C/svg%3E"`;

    return `
        <a href="#" class="product-card track-affiliate ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}" data-link="${p.affiliateLink}" aria-label="Xem sản phẩm ${p.name}">
            <div class="p-img">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror='${fallbackImage}'>
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

function renderProducts() {
    const grid = document.getElementById('product-container');
    const featured = document.getElementById('featured-container');
    const noResult = document.getElementById('no-result');
    
    if (!grid || !featured || !noResult) return;

    const term = state.currentSearch.trim().toLowerCase();
    
    // Lọc sản phẩm
    const filtered = products.filter(p => {
        const matchCat = state.currentCategory === 'all' || p.category === state.currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = ''; 
        featured.innerHTML = '';
        noResult.classList.remove('hidden');
        return;
    }
    noResult.classList.add('hidden');

    // Tách Featured Product
    const featuredProduct = filtered.find(p => p.featured === true);
    const normalProducts = filtered.filter(p => p !== featuredProduct);

    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p, false)).join('');
}

// =========================================================
// 🏷️ CATEGORY RENDER
// =========================================================
function renderCategories() {
    const container = document.getElementById('category-container');
    if (!container) return;
    
    container.innerHTML = categories.map(c => 
        `<li><button class="cat-btn ${c.id === state.currentCategory ? 'active' : ''}" data-id="${c.id}" aria-label="Lọc theo ${c.name}">${c.name}</button></li>`
    ).join('');
}

// =========================================================
// 🔗 AFFILIATE & TRACKING
// =========================================================
function handleAffiliateClick(e) {
    const card = e.target.closest('.track-affiliate');
    if (!card) return;

    e.preventDefault(); 
    const link = card.getAttribute('data-link');
    const pId = card.getAttribute('data-id');
    
    if (!link || link.trim() === "" || link === "DÁN_LINK_AFFILIATE_VÀO_ĐÂY") {
        alert("Link sản phẩm chưa được cập nhật.");
        return;
    }

    // Ghi nhận Click cục bộ (LocalStorage)
    try {
        let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '{}');
        clicks[pId] = (clicks[pId] || 0) + 1;
        localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));
    } catch(err) { /* An toàn bỏ qua */ }

    // Mở Link Affiliate
    window.open(link, '_blank', 'noopener,noreferrer,sponsored');
}

// =========================================================
// 🚀 INITIALIZATION (GỌI DUY NHẤT 1 LẦN)
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Render Giao Diện
    initProfile();
    renderCategories();
    renderProducts();

    // 2. Event Delegation: Xử lý Click Tổng hợp trên Body
    document.body.addEventListener('click', (e) => {
        
        // Clicks Category
        const catBtn = e.target.closest('.cat-btn');
        if (catBtn) {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            catBtn.classList.add('active');
            state.currentCategory = catBtn.getAttribute('data-id');
            renderProducts();
            return;
        }

        // Clicks Affiliate Card
        handleAffiliateClick(e);
    });

    // 3. Xử lý Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.currentSearch = e.target.value;
            renderProducts();
        });
    }

    // 4. Xử lý Dark Mode
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') {
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
    
    // 5. Xử lý Back to Top
    const bttBtn = document.getElementById('back-to-top');
    if (bttBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                bttBtn.classList.add('show');
            } else {
                bttBtn.classList.remove('show');
            }
        });
        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
