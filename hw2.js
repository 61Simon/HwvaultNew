// Product Data
const products = [
    {
        id: 1,
        title: "Машинка Premium Hot Wheels Rexy Porsche 911 GT3 R (992) Race Day 1:64 HRV72 Green",
        series: "Серія: Race Day",
        price: 799.99,
        image: "https://retromagaz.com/uploads/products/2b/72/site_list_foe0ukjol_827486a5.webp",
        rating: 4.5,
        badge: "Новинка"
    },
    {
        id: 2,
        title: "Машинка Premium Hot Wheels Nissan Skyline GT-R (R34) Gran Turismo Pop Culture 1:64 HKC28 White",
        series: "Серія: Pop Culture",
        price: 589.99,
        image: "https://retromagaz.com/uploads/products/f4/c1/site_fj77cv8d1_aa6484f3.webp",
        rating: 5,
        badge: "Хіт"
    },
    {
        id: 3,
        title: "Машинка Premium Hot Wheels Toyota AE86 Sprinter Trueno Fast & Furious 1:64 HVR61 Grey",
        series: "Серія: Fast & Furious",
        price: 655.55,
        image: "https://retromagaz.com/uploads/products/1a/66/site_list_fgmrccb7n_d7032c53.webp",
        rating: 4,
        badge: null
    },
    {
        id: 4,
        title: "Машинка Базова Hot Wheels Lamborghini Huracán LP 620-2 Super Trofeo Super Treasure Hunt STH Exotics 1:64 HTF43 Red",
        series: "Серія: Exotics",
        price: 3999.99,
        image: "https://retromagaz.com/uploads/products/dc/98/site_list_fns7brm4i_30a18f29.webp",
        rating: 4.5,
        badge: "Акція"
    },
    {
        id: 5,
        title: "Машинка Premium Hot Wheels 2шт Audi S4 quattro / R8 LMS 2-Packs 1:64 JDY82 Blue",
        series: "Серія: 2-Packs",
        price: 1049.99,
        oldPrice: 1399.99,
        image: "https://retromagaz.com/uploads/products/a7/b6/site_fr4q4fd5c_00f0a987.webp",
        rating: 4,
        badge: null
    },
    {
        id: 6,
        title: "Машинка Premium Hot Wheels Rexy Porsche 911 GT3 R (992) Chase Race Day 1:64 HRV96 Pink",
        series: "Серія: Race Day",
        price: 9450.99,
        image: "https://retromagaz.com/uploads/products/7d/67/site_list_foekq3ev6_5ef058ec.webp",
        rating: 5,
        badge: "Обмежена серія"
    },
    {
        id: 7,
        title: "Машинка Premium Hot Wheels Nissan Silvia (S15) Fast & Furious 1:64 HYP73 Blue",
        series: "Серія: Fast & Furious",
        price: 777.77,
        image: "https://retromagaz.com/uploads/products/40/8f/site_fhi4r4t4d_be043124.webp",
        rating: 4.5,
        badge: "Новинка"
    },
    {
        id: 8,
        title: "Машинка Базова Hot Wheels BMW M3 GT2 Race Day 1:64 GTC82 White",
        series: "Серія: Race Day",
        price: 399.50,
        image: "https://retromagaz.com/uploads/products/f7/de/site_list_f5rbreahe_b656d266.webp",
        rating: 4,
        badge: null
    },
    {
        id: 9,
        title: "Тематична Машинка Hot Wheels McLaren F1 GTR Gran Turismo 1:64 FKF34 Orange",
        series: "Серія: Gran Turismo",
        price: 449.99,
        image: "https://retromagaz.com/uploads/products/c1/c1/site_fdo1a5f6p_61d049c6.webp",
        rating: 5,
        badge: "Хіт"
    },
    {
        id: 10,
        title: "Машинка Premium Hot Wheels 2шт Subaru Impreza WRX / '16 STI 2-Packs 1:64 HKF60 Silver",
        series: "Серія: 2-Packs",
        price: 1488.88,
        image: "https://retromagaz.com/uploads/products/96/3b/site_fh9fone2e_a36630c3.webp",
        rating: 4,
        badge: null
    },
    {
        id: 11,
        title: "Машинка Базова Hot Wheels 2019 Audi R8 Spyder Super Treasure Hunt STH Exotics 1:64 GTD01 Blue",
        series: "Серія: Exotics",
        price: 3899.99,
        image: "https://retromagaz.com/uploads/products/b1/6a/site_fe27s52cf_d3d1fbd4.webp",
        rating: 4.5,
        badge: null
    },
    {
        id: 12,
        title: "Машинка Базова Hot Wheels '17 Nissan GT-R (R35) Nightburnerz 1:64 DVC50 Grey",
        series: "Серія: Nightburnerz",
        price: 333.33,
        image: "https://retromagaz.com/uploads/products/f9/9f/site_fg4ebts84_ed0aaaa3.webp",
        rating: 4,
        badge: "Акція"
    },
    {
        id: 13,
        title: "Машинка Premium Hot Wheels '94 AMG-Mercedes C-Class DTM Touring Car Race Day 1:64 HKC62 Yellow",
        series: "Серія: Race Day",
        price: 599.99,
        image: "https://retromagaz.com/uploads/products/bc/e2/site_ffl564b2d_708e8a43.webp",
        rating: 4.5,
        badge: "Новинка"
    },
    {
        id: 14,
        title: "Машинка Premium Hot Wheels Mercedes-Benz 500 E Chase Canyon Warriors 1:64 FPY86/HKC57 Black",
        series: "Серія: Canyon Warriors",
        price: 2759.99,
        image: "https://retromagaz.com/uploads/products/c5/a6/site_fdhc6auev_26d63863.webp",
        rating: 5,
        badge: "Хіт"
    },
    {
        id: 15,
        title: "Машинка Premium Hot Wheels 1996 Toyota Chaser JZX100 Elite 64 1:64 HGW10 White",
        series: "Серія: Elite 64",
        price: 2549.99,
        image: "https://retromagaz.com/uploads/products/1a/60/site_fdoqtksgv_c6f08396.webp",
        rating: 5,
        badge: "Колекційна"
    }
];

// Cart functionality
let cart = [];
const cartIcon = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const orderSummaryItems = document.getElementById('order-summary-items');
const orderSummaryTotal = document.getElementById('order-summary-total');
const productsGrid = document.getElementById('products-grid');
const cartDropdown = document.querySelector('.cart-dropdown');
const closeCartBtn = document.querySelector('.close-cart');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupModalLinks();
    setupIntersectionObserver();
});

// Render products
function renderProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const ratingStars = renderRatingStars(product.rating);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-series">${product.series}</p>
                <div class="product-rating">
                    ${ratingStars}
                </div>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="discount-price">${product.oldPrice.toFixed(2)} ₴</span>` : ''}
                    <div class="price">${product.price.toFixed(2)} ₴</div>
                    <div class="product-actions">
                        <a href="car-${product.id}.html" class="btn-details"><i class="fas fa-info-circle"></i> Детальніше</a>
                    </div>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Render rating stars
function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Remove from cart buttons
    cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const element = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const productId = parseInt(element.getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        // Quantity buttons
        if (e.target.classList.contains('quantity-btn') || e.target.closest('.quantity-btn')) {
            const button = e.target.classList.contains('quantity-btn') ? e.target : e.target.closest('.quantity-btn');
            const productId = parseInt(button.closest('.cart-item').querySelector('.remove-item').getAttribute('data-id'));
            const isIncrease = button.textContent === '+';
            updateQuantity(productId, isIncrease);
        }
    });

    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', function() {
        cart = [];
        updateCart();
        showCartNotification('Кошик очищено', 'success');
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', searchProducts);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });

    // Order form submission
    document.getElementById('order-form').addEventListener('submit', submitOrder);

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', submitContactForm);
    
    // Review form submission
    document.getElementById('review-form').addEventListener('submit', submitReview);
    
    // Rating stars
    document.querySelectorAll('.rating-input i').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            setRatingStars(rating);
        });
    });
    
    // Cart dropdown
    document.querySelector('.cart-icon').addEventListener('click', function(e) {
        e.stopPropagation();
        cartDropdown.classList.toggle('show');
    });
    
    closeCartBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        cartDropdown.classList.remove('show');
    });
    
    document.addEventListener('click', function() {
        cartDropdown.classList.remove('show');
    });
    
    cartDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Setup modal links
function setupModalLinks() {
    // Footer links that should open modals
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const modal = document.getElementById(targetId);
            if (modal) {
                e.preventDefault();
                modal.style.display = 'flex';
            }
        });
    });

    // Close buttons in modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

// Setup Intersection Observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.slide-in, .fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    showCartNotification('Товар додано до кошика', 'success');
    
    // Animation
    const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    if (button) {
        button.innerHTML = '<i class="fas fa-check"></i> Додано';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-cart-plus"></i> Купити';
        }, 1000);
    }

    // Pulse cart icon
    cartIcon.classList.add('pulse');
    setTimeout(() => {
        cartIcon.classList.remove('pulse');
    }, 1000);
    
    // Show cart dropdown
    cartDropdown.classList.add('show');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showCartNotification('Товар видалено з кошика', 'warning');
}

// Update product quantity
function updateQuantity(productId, isIncrease) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (isIncrease) {
        item.quantity += 1;
    } else {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
    }
    
    updateCart();
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.textContent = totalItems;

    // Update cart dropdown
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Кошик порожній</p>';
        cartTotalElement.innerHTML = `
            <span>Всього:</span>
            <span>0 ₴</span>
        `;
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} ₴</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="remove-item" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotalElement.innerHTML = `
            <span>Всього:</span>
            <span>${total.toFixed(2)} ₴</span>
        `;
    }

    // Update order summary
    updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
    if (cart.length === 0) {
        orderSummaryItems.innerHTML = '<p>Кошик порожній</p>';
        orderSummaryTotal.innerHTML = `
            <span>Всього:</span>
            <span>0 ₴</span>
        `;
    } else {
        orderSummaryItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.title} × ${item.quantity}</span>
                <span>${itemTotal.toFixed(2)} ₴</span>
            `;
            orderSummaryItems.appendChild(orderItem);
        });
        
        orderSummaryTotal.innerHTML = `
            <span>Всього:</span>
            <span>${total.toFixed(2)} ₴</span>
        `;
    }
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    if (searchTerm === '') {
        productCards.forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        });
    }
}

// Submit order form
function submitOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showCartNotification('Ваш кошик порожній', 'error');
        return;
    }
    
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    const city = document.getElementById('order-city').value;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showCartNotification(`Дякуємо за замовлення, ${name}! Ваше замовлення на суму ${total.toFixed(2)} ₴ буде доставлено до ${city}. Наш менеджер зв'яжеться з вами за номером ${phone} для підтвердження.`, 'success');
    
    // Reset form and cart
    this.reset();
    cart = [];
    updateCart();
}

// Submit contact form
function submitContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    
    showCartNotification(`Дякуємо за ваше повідомлення, ${name || 'шановний клієнте'}! Ми зв'яжемося з вами найближчим часом.`, 'success');
    this.reset();
}

// Submit review form
function submitReview(e) {
    e.preventDefault();
    
    const name = document.getElementById('review-name').value;
    const reviewText = document.getElementById('review-text').value;
    const rating = document.querySelector('.rating-input i.active') ? 
        parseInt(document.querySelector('.rating-input i.active').getAttribute('data-rating')) : 0;
    
    if (!name || !reviewText || rating === 0) {
        showCartNotification('Будь ласка, заповніть усі поля та оберіть рейтинг', 'error');
        return;
    }
    
    showCartNotification('Дякуємо за ваш відгук! Він буде опублікований після модерації.', 'success');
    this.reset();
    resetRatingStars();
}

// Set rating stars
function setRatingStars(rating) {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach(star => {
        star.classList.remove('active');
        if (parseInt(star.getAttribute('data-rating')) <= rating) {
            star.classList.add('active');
        }
    });
}

// Reset rating stars
function resetRatingStars() {
    document.querySelectorAll('.rating-input i').forEach(star => {
        star.classList.remove('active');
    });
}

// Show cart notification
function showCartNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `cart-notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}