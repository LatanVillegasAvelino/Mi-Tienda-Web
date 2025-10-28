// Agregar esta función al final del archivo, antes de las llaves de cierre

// Función para filtrar tiendas
function initializeStoreFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const storeCards = document.querySelectorAll('.store-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar active al botón clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            storeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Llamar a la función en la inicialización
function initializeApp() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
    initializeStoreFilters(); // ← Agregar esta línea
}

// Agregar tracking para clicks en tiendas
document.addEventListener('click', function(e) {
    if (e.target.closest('.store-link')) {
        const storeName = e.target.closest('.store-card').querySelector('.store-name').textContent;
        console.log(`Click en tienda: ${storeName}`);
        // Aquí puedes agregar Google Analytics o otro tracking
    }
});
