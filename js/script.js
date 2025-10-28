// Datos de productos simulados
const products = [
    {
        id: 1,
        name: "Laptop Gaming ASUS TUF",
        price: 2999,
        originalPrice: 3499,
        category: "laptops",
        icon: "fas fa-laptop"
    },
    {
        id: 2,
        name: "iPhone 14 Pro Max",
        price: 4599,
        originalPrice: 4999,
        category: "phones",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 3,
        name: "Samsung Galaxy Tab S8",
        price: 2199,
        originalPrice: 2599,
        category: "tablets",
        icon: "fas fa-tablet-alt"
    },
    {
        id: 4,
        name: "Audífonos Sony WH-1000XM4",
        price: 1299,
        originalPrice: 1599,
        category: "accessories",
        icon: "fas fa-headphones"
    },
    {
        id: 5,
        name: "MacBook Air M2",
        price: 5199,
        originalPrice: 5599,
        category: "laptops",
        icon: "fas fa-laptop"
    },
    {
        id: 6,
        name: "Samsung Galaxy S23 Ultra",
        price: 3899,
        originalPrice: 4299,
        category: "phones",
        icon: "fas fa-mobile-alt"
    }
];

// Estado de la aplicación
let cart = [];
let currentCategory = 'all';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <div class="product-price">
                    S/ ${product.price}
                    <span class="original-price">S/ ${product.originalPrice}</span>
                    <span class="discount-badge">
                        -${Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Categorías
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });

    // Búsqueda
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        searchProducts(e.target.value);
    });

    // Newsletter
    const subscribeBtn = document.querySelector('.subscribe-btn');
    subscribeBtn.addEventListener('click', handleNewsletterSubscription);

    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        document.querySelector('.featured-products').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

function filterByCategory(category) {
    currentCategory = category;
    loadProducts();
    
    // Efecto visual en la categoría seleccionada
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.borderColor = card.getAttribute('data-category') === category 
            ? 'var(--primary-color)' 
            : 'transparent';
    });
}

function searchProducts(query) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <div class="product-price">
                    S/ ${product.price}
                    <span class="original-price">S/ ${product.originalPrice}</span>
                    <span class="discount-badge">
                        -${Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${product.name} agregado al carrito`);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function showNotification(message) {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function handleNewsletterSubscription() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Por favor ingresa tu correo electrónico');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }
    
    // Simular envío
    emailInput.value = '';
    showNotification('¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Agregar estilos de animación para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
