/* Variables y Reset - Inspirado en Knasta y Compy */
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f8fafc;
    --white: #ffffff;
    --border-color: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--bg-light);
}

/* Header Styles - Inspirado en Knasta */
.header {
    background: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.logo h1 {
    color: var(--primary-color);
    font-size: 1.8rem;
    font-weight: bold;
}

.search-bar {
    display: flex;
    flex: 1;
    max-width: 500px;
}

.search-input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
}

.search-btn {
    background: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: background 0.3s;
}

.search-btn:hover {
    background: var(--secondary-color);
}

.nav-actions {
    display: flex;
    gap: 1rem;
}

.nav-btn {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-dark);
    transition: color 0.3s;
}

.nav-btn:hover {
    color: var(--primary-color);
}

.cart-btn {
    position: relative;
}

.cart-count {
    background: var(--accent-color);
    color: var(--white);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    position: absolute;
    top: -5px;
    right: 0;
}

/* Hero Section - Inspirado en Compy */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    padding: 4rem 2rem;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.cta-button {
    background: var(--accent-color);
    color: var(--white);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.placeholder-image {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 4rem;
    text-align: center;
    font-size: 6rem;
    backdrop-filter: blur(10px);
}

/* Categories - Inspirado en Knasta */
.categories {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-dark);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.category-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid transparent;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.category-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.category-card span {
    font-size: 1.2rem;
    font-weight: 600;
}

/* Products Grid */
.featured-products {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}

.product-card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.product-image {
    background: var(--bg-light);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: var(--primary-color);
}

.product-info {
    padding: 1.5rem;
}

.product-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.original-price {
    text-decoration: line-through;
    color: var(--text-light);
    font-size: 1rem;
    margin-left: 0.5rem;
}

.discount-badge {
    background: var(--accent-color);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-left: 0.5rem;
}

.add-to-cart {
    width: 100%;
    background: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: var(--secondary-color);
}

/* Newsletter - Inspirado en Compy */
.newsletter {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    padding: 4rem 2rem;
    margin-top: 4rem;
}

.newsletter-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.newsletter h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.newsletter-form {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.email-input {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
}

.subscribe-btn {
    background: var(--accent-color);
    color: var(--white);
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

.subscribe-btn:hover {
    background: #e69008;
}

/* Footer */
.footer {
    background: var(--text-dark);
    color: var(--white);
    padding: 3rem 2rem 1rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
    color: var(--accent-color);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: var(--white);
    font-size: 1.5rem;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--accent-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .search-bar {
        max-width: none;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
    
    .categories-grid {
        grid-template-columns: repeat(2, 1fr);
    }
                    }
