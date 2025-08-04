// Main application functionality
class SoleStoreApp {
    constructor() {
        this.currentSection = 'home';
        this.activeFilter = 'All';
        this.selectedProduct = null;
        this.selectedSize = null;
        this.wishlist = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadProducts();
        this.loadWishlist();
        this.handleInitialHash();
    }

    bindEvents() {
        // Navigation
        this.bindNavigation();
        
        // Mobile menu
        this.bindMobileMenu();
        
        // Product filters
        this.bindProductFilters();
        
        // Contact form
        this.bindContactForm();
        
        // Newsletter
        this.bindNewsletter();
        
        // Modal events
        this.bindModalEvents();
        
        // Window events
        window.addEventListener('hashchange', () => this.handleHashChange());
        window.addEventListener('scroll', () => this.handleScroll());
    }

    bindNavigation() {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const section = href.substring(1); // Remove the #
                this.showSection(section);
                this.closeMobileMenu();
            });
        });
    }

    bindMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.remove('open');
    }

    bindProductFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Update active filter
                this.activeFilter = tab.dataset.filter;
                
                // Reload products
                this.loadFilteredProducts();
            });
        });
    }

    bindContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmit();
            });
        }
    }

    bindNewsletter() {
        // Newsletter subscription can be handled here
    }

    bindModalEvents() {
        // Quick view modal events will be handled when products are loaded
    }

    handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.showSection(hash);
        }
    }

    handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.showSection(hash);
        }
    }

    handleScroll() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }

    showSection(sectionId) {
        // Show loading bar
        this.showLoadingBar();
        
        // Hide all sections
        const sections = document.querySelectorAll('.page-section, .hero, .small-banners, .features, .newsletter');
        sections.forEach(section => {
            if (section.id === sectionId || 
                (sectionId === 'home' && (section.classList.contains('hero') || 
                                         section.classList.contains('small-banners') || 
                                         section.classList.contains('features') || 
                                         section.classList.contains('newsletter')))) {
                section.classList.remove('hidden');
                section.style.display = '';
            } else {
                section.classList.add('hidden');
            }
        });

        // Update URL hash
        window.history.pushState(null, null, `#${sectionId}`);
        
        // Load section-specific content
        this.loadSectionContent(sectionId);
        
        // Update current section
        this.currentSection = sectionId;
        
        // Hide loading bar
        setTimeout(() => this.hideLoadingBar(), 300);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showLoadingBar() {
        const loadingBar = document.getElementById('loadingBar');
        loadingBar.classList.add('active');
        loadingBar.style.width = '100%';
    }

    hideLoadingBar() {
        const loadingBar = document.getElementById('loadingBar');
        setTimeout(() => {
            loadingBar.classList.remove('active');
            loadingBar.style.width = '0%';
        }, 100);
    }

    loadSectionContent(sectionId) {
        switch (sectionId) {
            case 'men':
                this.loadMenProducts();
                break;
            case 'women':
                this.loadWomenProducts();
                break;
            case 'home':
                this.loadProducts();
                break;
        }
    }

    loadProducts() {
        const productsGrid = document.getElementById('productsGrid');
        const filteredProducts = getProductsByCategory(this.activeFilter);
        
        productsGrid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
        this.bindProductEvents();
    }

    loadFilteredProducts() {
        this.loadProducts();
    }

    loadMenProducts() {
        const menProductsGrid = document.getElementById('menProductsGrid');
        const menProducts = getMenProducts();
        
        menProductsGrid.innerHTML = menProducts.map(product => this.createProductCard(product)).join('');
        this.bindProductEvents();
    }

    loadWomenProducts() {
        const womenProductsGrid = document.getElementById('womenProductsGrid');
        const womenProducts = getWomenProducts();
        
        womenProductsGrid.innerHTML = womenProducts.map(product => this.createProductCard(product)).join('');
        this.bindProductEvents();
    }

    createProductCard(product) {
        const salebadge = product.sale ? '<div class="product-badge">Sale</div>' : '';
        const originalPrice = product.originalPrice ? 
            `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${salebadge}
                    <div class="product-actions">
                        <button class="action-btn wishlist-btn" data-product-id="${product.id}">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button class="action-btn quick-view-btn" data-product-id="${product.id}">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <div class="product-prices">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        ${originalPrice}
                    </div>
                    <div class="size-selection" data-product-id="${product.id}">
                        <h4>Select Size:</h4>
                        <div class="size-options">
                            ${product.sizes.map(size => 
                                `<button class="size-option" data-size="${size}">${size}</button>`
                            ).join('')}
                        </div>
                    </div>
                    <button class="add-to-cart-btn" disabled data-product-id="${product.id}">
                        Select Size First
                    </button>
                </div>
            </div>
        `;
    }

    bindProductEvents() {
        // Size selection
        document.querySelectorAll('.size-option').forEach(sizeBtn => {
            sizeBtn.addEventListener('click', (e) => {
                const productCard = e.target.closest('.product-card');
                const productId = parseInt(productCard.dataset.productId);
                const size = parseInt(e.target.dataset.size);
                
                // Remove selected class from all size options in this product
                productCard.querySelectorAll('.size-option').forEach(btn => 
                    btn.classList.remove('selected'));
                
                // Add selected class to clicked size
                e.target.classList.add('selected');
                
                // Enable add to cart button
                const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
                addToCartBtn.disabled = false;
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.dataset.size = size;
            });
        });

        // Add to cart
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                const size = parseInt(e.target.dataset.size);
                
                if (size) {
                    const product = getProductById(productId);
                    cart.addToCart(product, size);
                    
                    // Show success feedback
                    this.showAddToCartSuccess(e.target);
                }
            });
        });

        // Wishlist
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.wishlist-btn').dataset.productId);
                this.toggleWishlist(productId);
                e.target.closest('.wishlist-btn').classList.toggle('active');
            });
        });

        // Quick view
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.quick-view-btn').dataset.productId);
                this.showQuickView(productId);
            });
        });
    }

    showAddToCartSuccess(button) {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1500);
    }

    toggleWishlist(productId) {
        const index = this.wishlist.indexOf(productId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
        } else {
            this.wishlist.push(productId);
        }
        this.saveWishlist();
    }

    showQuickView(productId) {
        const product = getProductById(productId);
        if (!product) return;

        this.selectedProduct = product;
        
        // Populate modal
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('modalProductDescription').textContent = product.description;
        
        // Populate size options
        const sizeOptions = document.getElementById('modalSizeOptions');
        sizeOptions.innerHTML = product.sizes.map(size => 
            `<button class="size-option" data-size="${size}">${size}</button>`
        ).join('');
        
        // Bind size selection in modal
        sizeOptions.querySelectorAll('.size-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                sizeOptions.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.selectedSize = parseInt(e.target.dataset.size);
            });
        });
        
        // Show modal
        document.getElementById('quickViewModal').classList.add('active');
    }

    handleContactSubmit() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        document.getElementById('contactForm').reset();
    }

    saveWishlist() {
        localStorage.setItem('solestore_wishlist', JSON.stringify(this.wishlist));
    }

    loadWishlist() {
        const savedWishlist = localStorage.getItem('solestore_wishlist');
        if (savedWishlist) {
            this.wishlist = JSON.parse(savedWishlist);
        }
    }
}

// Global functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showSection(sectionId) {
    app.showSection(sectionId);
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletterEmail').value = '';
    }
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
    app.selectedProduct = null;
    app.selectedSize = null;
}

function addToCartFromModal() {
    if (app.selectedProduct && app.selectedSize) {
        cart.addToCart(app.selectedProduct, app.selectedSize);
        closeQuickView();
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 10001;
            animation: slideInRight 0.3s ease-out;
        `;
        successMsg.textContent = 'Product added to cart!';
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    } else {
        alert('Please select a size first!');
    }
}

// Add CSS for success message animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SoleStoreApp();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('quickViewModal');
    if (e.target === modal) {
        closeQuickView();
    }
});
