// ====================================
// ⚙️ WEBSITE CONFIG
// 👉 CHỈNH THÔNG TIN WEBSITE TẠI ĐÂY
// ====================================
const siteConfig = {
    siteName: "Minh Trường",
    username: "@minhtruong",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300", 
    bio: "Tổng hợp những sản phẩm hữu ích và đáng mua.",
    socials: {
        tiktok: "https://tiktok.com/@minhtruong",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: ""
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
        featured: true,
        name: "[DỮ LIỆU DEMO] Bàn phím cơ Custom Trục Đỏ",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "600.000đ",
        discount: "-25%",
        badge: "DEMO",
        rating: 4.9,
        reviews: 120,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p2",
        featured: false,
        name: "[DỮ LIỆU DEMO] Chuột Gaming Không Dây",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: "150.000đ",
        oldPrice: "250.000đ",
        discount: "-40%",
        badge: "DEMO",
        rating: 4.8,
        reviews: 340,
        category: "gaming",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p3",
        featured: false,
        name: "[DỮ LIỆU DEMO] Tai nghe Bluetooth Chống Ồn",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: "299.000đ",
        oldPrice: "499.000đ",
        discount: "-40%",
        badge: "DEMO",
        rating: 4.7,
        reviews: 215,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p4",
        featured: false,
        name: "[DỮ LIỆU DEMO] Giá Đỡ Điện Thoại Hợp Kim",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "55.000đ",
        oldPrice: "100.000đ",
        discount: "-45%",
        badge: "DEMO",
        rating: 5.0,
        reviews: 890,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p5",
        featured: false,
        name: "[DỮ LIỆU DEMO] Đèn LED Bàn Học Chống Cận",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500",
        price: "120.000đ",
        oldPrice: "180.000đ",
        discount: "-33%",
        badge: "DEMO",
        rating: 4.8,
        reviews: 156,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p6",
        featured: false,
        name: "[DỮ LIỆU DEMO] Hub USB Type-C 5 in 1",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500",
        price: "180.000đ",
        oldPrice: "250.000đ",
        discount: "-28%",
        badge: "DEMO",
        rating: 4.6,
        reviews: 88,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p7",
        featured: false,
        name: "[DỮ LIỆU DEMO] Túi Đeo Chéo Canvas Basic",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        price: "99.000đ",
        oldPrice: "150.000đ",
        discount: "-34%",
        badge: "DEMO",
        rating: 4.9,
        reviews: 420,
        category: "thoi-trang",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "p8",
        featured: false,
        name: "[DỮ LIỆU DEMO] Bình Giữ Nhiệt Inox 304",
        description: "Mô tả sản phẩm minh họa.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        price: "110.000đ",
        oldPrice: "190.000đ",
        discount: "-42%",
        badge: "DEMO",
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

function initProfile() {
    document.title = `${siteConfig.siteName} | Top Sản Phẩm`;
    
    const elName = document.getElementById('profile-name');
    if(elName) elName.textContent = siteConfig.siteName;
    
    const elUsername = document.getElementById('profile-username');
    if(elUsername) elUsername.textContent = siteConfig.username;
    
    const elBio = document.getElementById('profile-bio');
    if(elBio) elBio.textContent = siteConfig.bio;
    
    const elFooterName = document.getElementById('footer-name');
    if(elFooterName) elFooterName.textContent = siteConfig.siteName;
    
    const elYear = document.getElementById('current-year');
    if(elYear) elYear.textContent = new Date().getFullYear();

    const avatarImg = document.getElementById('profile-avatar');
    if(avatarImg) {
        avatarImg.src = siteConfig.avatar;
        avatarImg.onerror = function() { this.src = 'https://via.placeholder.com/150'; };
    }

    const socialHTML = [];
    if(siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener"><i class='bx bxl-tiktok'></i></a>`);
    if(siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener"><i class='bx bxl-facebook-circle'></i></a>`);
    if(siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener"><i class='bx bxl-instagram'></i></a>`);
    if(siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener"><i class='bx bxl-youtube'></i></a>`);
    
    const socialContainer = document.getElementById('social-container');
    if(socialContainer) socialContainer.innerHTML = socialHTML.join('');
}

function trackClick(productId) {
    try {
        let clicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '{}');
        clicks[productId] = (clicks[productId] || 0) + 1;
        localStorage.setItem('affiliate_clicks', JSON.stringify(clicks));
    } catch(e) {}
}

function createCardHTML(p, isFeatured = false) {
    const badgeHTML = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPriceHTML = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const discountHTML = p.discount ? `<span class="p-discount" style="color: #ef4444; font-size: 12px; margin-left: 4px;">${p.discount}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label" style="display:block; color:#ef4444; font-size:12px; font-weight:700; margin-bottom:8px;">🔥 SẢN PHẨM NỔI BẬT</span>` : '';
    
    return `
        <a href="${p.affiliateLink}" class="product-card track-btn ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}" data-link="${p.affiliateLink}">
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

function renderCategories() {
    const container = document.getElementById('category-container');
    if(!container) return;
    
    container.innerHTML = siteConfig.categories.map(c => 
        `<li><button class="cat-btn ${c.id === currentCategory ? 'active' : ''}" data-id="${c.id}">${c.name}</button></li>`
    ).join('');
}

function filterProducts() {
    const grid = document.getElementById('product-container');
    const featured = document.getElementById('featured-container');
    const noResult = document.getElementById('no-result');
    if(!grid || !featured || !noResult) return;

    const term = currentSearch.trim().toLowerCase();
    
    let filtered = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = ''; 
        featured.innerHTML = '';
        noResult.classList.remove('hidden');
        return;
    }
    noResult.classList.add('hidden');

    const featuredProduct = filtered.find(p => p.featured);
    const normalProducts = filtered.filter(p => !p.featured);

    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p)).join('');
}

// ====================================
// DUY NHẤT 1 KHỐI KHỞI TẠO
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    initProfile();
    renderCategories();
    filterProducts();

    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterProducts();
        });
    }

    const catContainer = document.getElementById('category-container');
    if(catContainer) {
        catContainer.addEventListener('click', (e) => {
            if(e.target.classList.contains('cat-btn')) {
                document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.getAttribute('data-id');
                filterProducts();
            }
        });
    }

    document.body.addEventListener('click', function(e) {
        const card = e.target.closest('.track-btn');
        if(card) {
            e.preventDefault(); 
            const link = card.getAttribute('data-link');
            const pId = card.getAttribute('data-id');
            
            if(link === "DÁN_LINK_AFFILIATE_VÀO_ĐÂY" || !link) {
                alert('Link sản phẩm chưa được cập nhật.');
            } else {
                trackClick(pId);
                window.open(link, '_blank', 'noopener,noreferrer,nofollow,sponsored');
            }
        }
    });

    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        if(localStorage.getItem('theme') === 'dark') {
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
    
    const bttBtn = document.getElementById('back-to-top');
    if(bttBtn) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) bttBtn.classList.add('show');
            else bttBtn.classList.remove('show');
        });
        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
        
