// Cart functionality
class CartManager {
    constructor() {
        this.items = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        // Load cart from localStorage
        this.loadCart();
        
        // Bind events
        this.bindEvents();
        
        // Update UI
        this.updateCartUI();
    }

    bindEvents() {
        // Cart toggle button
        document.getElementById('cartBtn').addEventListener('click', () => {
            this.toggleCart();
        });

        // Close cart button
        document.getElementById('closeCart').addEventListener('click', () => {
            this.closeCart();
        });

        // Cart overlay
        document.getElementById('cartOverlay').addEventListener('click', () => {
            this.closeCart();
        });
    }

    addToCart(product, size) {
        const existingItem = this.items.find(
            item => item.id === product.id && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                size,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showAddToCartAnimation();
    }

    removeFromCart(productId, size) {
        this.items = this.items.filter(
            item => !(item.id === productId && item.size === size)
        );
        this.saveCart();
        this.updateCartUI();
    }

    updateQuantity(productId, size, quantity) {
        if (quantity === 0) {
            this.removeFromCart(productId, size);
            return;
        }

        const item = this.items.find(
            item => item.id === productId && item.size === size
        );

        if (item) {
            item.quantity = quantity;
            this.saveCart();
            this.updateCartUI();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }

    toggleCart() {
        this.isOpen = !this.isOpen;
        this.updateCartDisplay();
    }

    closeCart() {
        this.isOpen = false;
        this.updateCartDisplay();
    }

    openCart() {
        this.isOpen = true;
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');

        if (this.isOpen) {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartUI() {
        this.updateCartCount();
        this.updateCartContent();
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.getTotalItems();
        
        cartCount.textContent = totalItems;
        
        if (totalItems > 0) {
            cartCount.classList.add('show');
        } else {
            cartCount.classList.remove('show');
        }
    }

    updateCartContent() {
        const emptyCart = document.getElementById('emptyCart');
        const cartItems = document.getElementById('cartItems');
        const cartActions = document.getElementById('cartActions');
        const totalPrice = document.getElementById('totalPrice');

        if (this.items.length === 0) {
            emptyCart.style.display = 'block';
            cartItems.style.display = 'none';
            cartActions.style.display = 'none';
        } else {
            emptyCart.style.display = 'none';
            cartItems.style.display = 'block';
            cartActions.style.display = 'block';

            // Render cart items
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-size">Size: ${item.size}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.size}, ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.size}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="cart.removeFromCart(${item.id}, ${item.size})">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');

            // Update total price
            totalPrice.textContent = `$${this.getTotalPrice().toFixed(2)}`;
        }
    }

    showAddToCartAnimation() {
        const cartCount = document.getElementById('cartCount');
        cartCount.style.animation = 'none';
        setTimeout(() => {
            cartCount.style.animation = 'pulse 1s ease-out';
        }, 10);
    }

    saveCart() {
        localStorage.setItem('solestore_cart', JSON.stringify(this.items));
    }

    loadCart() {
        const savedCart = localStorage.getItem('solestore_cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }
    }
}

// Initialize cart
const cart = new CartManager();

// Global functions for cart operations
function addToCart(product, size) {
    cart.addToCart(product, size);
}

function removeFromCart(productId, size) {
    cart.removeFromCart(productId, size);
}

function updateQuantity(productId, size, quantity) {
    cart.updateQuantity(productId, size, quantity);
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart.clearCart();
    }
}

function closeCart() {
    cart.closeCart();
}

function openCart() {
    cart.openCart();
}
