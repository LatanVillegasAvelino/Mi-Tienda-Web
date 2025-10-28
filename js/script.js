// Actualizar la función setupEventListeners para incluir las nuevas categorías
function setupEventListeners() {
    // Categorías del menú desplegable
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Cerrar el menú en móviles
            if (window.innerWidth <= 768) {
                document.querySelector('.categories-menu').style.display = 'none';
            }
        });
    });

    // Categorías de tarjetas (mantener existente)
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

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        const categoriesDropdown = document.querySelector('.categories-dropdown');
        if (!categoriesDropdown.contains(e.target)) {
            if (window.innerWidth <= 768) {
                document.querySelector('.categories-menu').style.display = 'none';
            }
        }
    });
}

// Ampliar los datos de productos para incluir más categorías
const products = [
    // Tecnología (existente)
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
        category: "smartphones",
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
        category: "accesorios-tech",
        icon: "fas fa-headphones"
    },
    
    // Hardware
    {
        id: 5,
        name: "Procesador Intel i9",
        price: 1899,
        originalPrice: 2199,
        category: "componentes-pc",
        icon: "fas fa-microchip"
    },
    {
        id: 6,
        name: "Mouse Gaming RGB",
        price: 199,
        originalPrice: 299,
        category: "perifericos",
        icon: "fas fa-mouse"
    },
    
    // Electrodomésticos
    {
        id: 7,
        name: "Licuadora Oster",
        price: 299,
        originalPrice: 399,
        category: "cocina",
        icon: "fas fa-blender"
    },
    {
        id: 8,
        name: "Lavadora Samsung",
        price: 1899,
        originalPrice: 2199,
        category: "lavanderia",
        icon: "fas fa-tshirt"
    },
    
    // Decohogar
    {
        id: 9,
        name: "Sofá 3 Plazas",
        price: 1299,
        originalPrice: 1599,
        category: "muebles",
        icon: "fas fa-couch"
    },
    {
        id: 10,
        name: "Lámpara LED Moderna",
        price: 199,
        originalPrice: 299,
        category: "iluminacion",
        icon: "fas fa-lightbulb"
    },
    
    // Mujer
    {
        id: 11,
        name: "Vestido Casual",
        price: 89,
        originalPrice: 129,
        category: "ropa-mujer",
        icon: "fas fa-female"
    },
    
    // Hombre
    {
        id: 12,
        name: "Camisa Formal",
        price: 79,
        originalPrice: 99,
        category: "ropa-hombre",
        icon: "fas fa-male"
    },
    
    // Niños
    {
        id: 13,
        name: "Set de Lego",
        price: 149,
        originalPrice: 199,
        category: "juguetes",
        icon: "fas fa-gamepad"
    },
    {
        id: 14,
        name: "Ropa para Bebé",
        price: 59,
        originalPrice: 79,
        category: "bebe",
        icon: "fas fa-baby"
    }
];

// Función mejorada para filtrar por categoría
function filterByCategory(category) {
    currentCategory = category;
    loadProducts();
    
    // Actualizar estado visual en el menú desplegable
    document.querySelectorAll('.category-link').forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = 'bold';
        } else {
            link.style.color = '';
            link.style.fontWeight = '';
        }
    });
    
    // Efecto visual en las categorías de tarjetas (si existe)
    document.querySelectorAll('.category-card').forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.borderColor = 'var(--primary-color)';
        } else {
            card.style.borderColor = 'transparent';
        }
    });
    
    // Mostrar notificación de categoría
    const categoryNames = {
        'laptops': 'Laptops',
        'smartphones': 'Smartphones',
        'tablets': 'Tablets',
        'accesorios-tech': 'Accesorios Tech',
        'componentes-pc': 'Componentes PC',
        'perifericos': 'Periféricos',
        'cocina': 'Electrodomésticos de Cocina',
        'lavanderia': 'Lavandería',
        'muebles': 'Muebles',
        'iluminacion': 'Iluminación',
        'ropa-mujer': 'Ropa de Mujer',
        'ropa-hombre': 'Ropa de Hombre',
        'juguetes': 'Juguetes',
        'bebe': 'Artículos para Bebé'
    };
    
    showNotification(`Mostrando productos de: ${categoryNames[category] || category}`);
}
