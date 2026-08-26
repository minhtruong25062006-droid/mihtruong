// =========================================================
// ⚙️ CẤU HÌNH WEBSITE
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
        tiktok: "",
        facebook: "",
        instagram: "",
        youtube: ""
    }
};

// =========================================================
// 🛒 DANH SÁCH SẢN PHẨM
// =========================================================
//
// Muốn thêm sản phẩm:
// → copy một object
//
// Muốn đổi tên:
// → sửa name
//
// Muốn đổi ảnh:
// → sửa image
//
// Muốn đổi giá:
// → sửa price
//
// ⭐ MUỐN GẮN LINK AFFILIATE:
// → sửa affiliateLink
//
// 🔗 LINK AFFILIATE
// DÁN LINK AFFILIATE CỦA SẢN PHẨM VÀO ĐÂY
// =========================================================

const products = [
    {
        id: 1,
        featured: true,
        name: "[DỮ LIỆU DEMO] Bàn phím cơ Custom Trục Đỏ",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "600.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.9,
        reviews: 120,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 2,
        featured: false,
        name: "[DỮ LIỆU DEMO] Chuột Gaming Không Dây",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: "150.000đ",
        oldPrice: "250.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.8,
        reviews: 340,
        category: "gaming",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 3,
        featured: false,
        name: "[DỮ LIỆU DEMO] Tai nghe Bluetooth Chống Ồn",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: "299.000đ",
        oldPrice: "499.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.7,
        reviews: 215,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 4,
        featured: false,
        name: "[DỮ LIỆU DEMO] Giá Đỡ Điện Thoại Hợp Kim",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "55.000đ",
        oldPrice: "100.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 5.0,
        reviews: 890,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 5,
        featured: false,
        name: "[DỮ LIỆU DEMO] Đèn LED Bàn Học",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500",
        price: "120.000đ",
        oldPrice: "180.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.8,
        reviews: 156,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 6,
        featured: false,
        name: "[DỮ LIỆU DEMO] Hub USB Type-C 5 in 1",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500",
        price: "180.000đ",
        oldPrice: "250.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.6,
        reviews: 88,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 7,
        featured: false,
        name: "[DỮ LIỆU DEMO] Túi Đeo Chéo Canvas",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        price: "99.000đ",
        oldPrice: "150.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.9,
        reviews: 420,
        category: "thoi-trang",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: 8,
        featured: false,
        name: "[DỮ LIỆU DEMO] Bình Giữ Nhiệt Inox 304",
        description: "Mô tả sản phẩm dùng để minh họa.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        price: "110.000đ",
        oldPrice: "190.000đ",
        discount: "DEMO",
        badge: "DEMO",
        rating: 4.8,
        reviews: 512,
        category: "gia-dung",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    }
];

const categories = [
    { id: "all", name: "🔥 Tất cả" },
    { id: "cong-nghe", name: "💻 Công nghệ" },
    { id: "gaming", name: "🎮 Gaming" },
    { id: "gia-dung", name: "🏠 Gia dụng" },
    { id: "thoi-trang", name: "👕 Thời trang" },
    { id: "hoc-tap", name: "📚 Học tập" }
];

// =========================================================
// ⚙️ LOGIC XỬ LÝ (KHÔNG SỬA PHẦN NÀY)
// =========================================================

let currentCategory = "all";
let currentSearch = "";

// Cập nhật text an toàn
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// 1. Khởi tạo Profile
function initProfile() {
    document.title = `${siteConfig.siteName} | Top Sản Phẩm`;
    
    setElementText('profile-name', siteConfig.siteName);
    setElementText('profile-username', siteConfig.username);
    setElementText('profile-bio', siteConfig.bio);
    setElementText('footer-name', siteConfig.siteName);
    setElementText('current-year', new Date().getFullYear());

    const avatarImg = document.getElementById('profile-avatar');
    if (avatarImg) {
        avatarImg.src = siteConfig.avatar;
        avatarImg.onerror = function() { 
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20viewBox%3D%220%200%20150%20150%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22150%22%20height%3D%22150%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%3EAvatar%3C%2Ftext%3E%3C%2Fsvg%3E'; 
        };
    }

    const socialHTML = [];
    if (siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener"><i class='bx bxl-tiktok'></i></a>`);
    if (siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener"><i class='bx bxl-facebook-circle'></i></a>`);
    if (siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener"><i class='bx bxl-instagram'></i></a>`);
    if (siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener"><i class='bx bxl-youtube'></i></a>`);
    
    const socialContainer = document.getElementById('social-container');
    if (socialContainer) socialContainer.innerHTML = socialHTML.join('');
}

// 2. Click Tracking
function trackClick(productId) {
    try {
        let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '{}');
        clicks[productId] = (clicks[productId] || 0) + 1;
        localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));
    } catch(e) {
        // Bỏ qua lỗi một cách an toàn
    }
}

// 3. Render Card HTML
function createCardHTML(p, isFeatured = false) {
    const badgeHTML = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPriceHTML = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const discountHTML = p.discount ? `<span class="p-discount" style="color: #ef4444; font-size: 12px; margin-left: 4px;">${p.discount}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label" style="display:block; color:#ef4444; font-size:12px; font-weight:700; margin-bottom:8px;">🔥 SẢN PHẨM NỔI BẬT</span>` : '';
    
    // Fallback ảnh an toàn, không để vỡ
    const fallbackImage = `this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%20viewBox%3D%220%200%20300%20300%22%3E%3Crect%20fill%3D%22%23eee%22%20width%3D%22300%22%20height%3D%22300%22%2F%3E%3Ctext%20fill%3D%22%23ccc%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%3ELỗi%20Ảnh%3C%2Ftext%3E%3C%2Fsvg%3E'`;

    return `
        <a href="#" class="product-card track-affiliate ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}" data-link="${p.affiliateLink}">
            <div class="p-img">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="${fallbackImage}">
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

// 4. Render Danh mục
function renderCategories() {
    const container = document.getElementById('category-container');
    if (!container) return;
    
    container.innerHTML = categories.map(c => 
        `<li><button class="cat-btn ${c.id === currentCategory ? 'active' : ''}" data-id="${c.id}">${c.name}</button></li>`
    ).join('');
}

// 5. Render Sản phẩm & Lọc
function renderProducts() {
    const grid = document.getElementById('product-container');
    const featured = document.getElementById('featured-container');
    const noResult = document.getElementById('no-result');
    
    if (!grid || !featured || !noResult) return;

    const term = currentSearch.trim().toLowerCase();
    
    // Lọc theo keyword & category
    const filtered = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = ''; 
        featured.innerHTML = '';
        noResult.classList.remove('hidden');
        noResult.style.display = 'block';
        return;
    }
    
    noResult.classList.add('hidden');
    noResult.style.display = 'none';

    // Tách riêng featured product để không render trùng
    const featuredProduct = filtered.find(p => p.featured === true);
    const normalProducts = filtered.filter(p => p !== featuredProduct);

    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p, false)).join('');
}


// =========================================================
// 🚀 KHỞI TẠO DUY NHẤT (MỘT DOMContentLoaded)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Chạy các hàm render UI cơ bản
    initProfile();
    renderCategories();
    renderProducts();

    // 1. Lắng nghe ô Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProducts();
        });
    }

    // 2. Lắng nghe Event Delegation (Quản lý Click Danh mục & Sản phẩm)
    document.body.addEventListener('click', (e) => {
        
        // --- Xử lý click Category ---
        const catBtn = e.target.closest('.cat-btn');
        if (catBtn) {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            catBtn.classList.add('active');
            currentCategory = catBtn.getAttribute('data-id');
            renderProducts();
            return;
        }

        // --- Xử lý click Affiliate Link ---
        const card = e.target.closest('.track-affiliate');
        if (card) {
            e.preventDefault(); 
            const link = card.getAttribute('data-link');
            const pId = card.getAttribute('data-id');
            
            if (!link || link.trim() === "" || link === "DÁN_LINK_AFFILIATE_VÀO_ĐÂY") {
                alert("Link sản phẩm chưa được cập nhật.");
            } else {
                trackClick(pId);
                window.open(link, '_blank', 'noopener,noreferrer,nofollow,sponsored');
            }
        }
    });

    // 3. Lắng nghe Dark Mode
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        // Kiểm tra state cũ
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
        }
        
        // Đổi theme
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeBtn.innerHTML = isDark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
        });
    }
    
    // 4. Lắng nghe Back to Top
    const bttBtn = document.getElementById('back-to-top');
    if (bttBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                bttBtn.classList.add('show');
                bttBtn.style.opacity = '1';
                bttBtn.style.visibility = 'visible';
            } else {
                bttBtn.classList.remove('show');
                bttBtn.style.opacity = '0';
                bttBtn.style.visibility = 'hidden';
            }
        });
        
        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
