// Nike Product Collection
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Running",
        description: "Nike's most comfortable Air Max ever, featuring the largest heel Air unit for maximum impact protection and all-day comfort.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['Black', 'White', 'Blue'],
        sale: true,
        brand: "Nike"
    },
    {
        id: 2,
        name: "Nike Air Force 1",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Casual",
        description: "The iconic Nike Air Force 1 that redefined basketball footwear from the hardwood to the blacktop.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['White', 'Black', 'Gray'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 3,
        name: "Nike React Infinity Run",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Running",
        description: "Designed to help reduce injury and keep you running. More foam and improved upper design create a secure feel.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['Red', 'Black', 'White'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 4,
        name: "Nike Blazer Mid '77",
        price: 99.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Casual",
        description: "Vintage basketball style meets modern comfort in this updated Nike Blazer with classic details.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['White', 'Black', 'Navy'],
        sale: true,
        brand: "Nike"
    },
    {
        id: 5,
        name: "Nike ZoomX Vaporfly",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Running",
        description: "Elite racing shoe with ZoomX foam and carbon fiber plate for maximum energy return and speed.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['Black', 'White', 'Orange'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 6,
        name: "Nike Air Max 90",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Casual",
        description: "The Nike Air Max 90 stays true to its OG running roots with iconic Waffle outsole and visible Air cushioning.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ['Gray', 'Black', 'Blue'],
        sale: false,
        brand: "Nike"
    }
];

// Nike Men's Collection
const menProducts = [
    {
        id: 7,
        name: "Nike Air Jordan 1 High",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Basketball",
        description: "The iconic Nike Air Jordan 1 High that started it all. Classic basketball style meets street culture.",
        sizes: [7, 8, 9, 10, 11, 12, 13],
        colors: ['Black', 'Red', 'White'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 8,
        name: "Nike Dunk Low",
        price: 149.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Casual",
        description: "Born on the basketball court, the Nike Dunk Low has cemented its status as a street icon.",
        sizes: [7, 8, 9, 10, 11, 12, 13],
        colors: ['White', 'Black', 'Navy'],
        sale: true,
        brand: "Nike"
    },
    {
        id: 9,
        name: "Nike Metcon 8",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Training",
        description: "Nike's most versatile trainer for weightlifting, cross-training, and high-intensity workouts.",
        sizes: [7, 8, 9, 10, 11, 12, 13],
        colors: ['Black', 'White', 'Red'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 10,
        name: "Nike Air Max 97",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1608256246200-53e8b47b859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Lifestyle",
        description: "Inspired by Japanese bullet trains, the Nike Air Max 97 features full-length visible Air cushioning.",
        sizes: [7, 8, 9, 10, 11, 12, 13],
        colors: ['Silver', 'Black'],
        sale: false,
        brand: "Nike"
    }
];

// Nike Women's Collection
const womenProducts = [
    {
        id: 11,
        name: "Nike Air Max 1",
        price: 119.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Lifestyle",
        description: "The original Nike Air Max featuring visible Air cushioning and timeless design.",
        sizes: [5, 6, 7, 8, 9, 10, 11],
        colors: ['White', 'Pink', 'Black'],
        sale: true,
        brand: "Nike"
    },
    {
        id: 12,
        name: "Nike Court Vision Low",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Casual",
        description: "Classic basketball look with modern comfort. Perfect for everyday wear.",
        sizes: [5, 6, 7, 8, 9, 10, 11],
        colors: ['White', 'Pink', 'Beige'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 13,
        name: "Nike Air Zoom Pegasus",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Running",
        description: "Nike's most trusted running shoe with responsive Zoom Air units for a smooth, energized ride.",
        sizes: [5, 6, 7, 8, 9, 10, 11],
        colors: ['White', 'Pink', 'Gray'],
        sale: false,
        brand: "Nike"
    },
    {
        id: 14,
        name: "Nike Blazer Low Platform",
        price: 169.99,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Lifestyle",
        description: "Vintage basketball charm meets platform style in this elevated Nike Blazer.",
        sizes: [5, 6, 7, 8, 9, 10, 11],
        colors: ['White', 'Brown', 'Black'],
        sale: false,
        brand: "Nike"
    }
];

// Combine all products
const allProducts = [...products, ...menProducts, ...womenProducts];

// Function to get products by category
function getProductsByCategory(category) {
    if (category === 'All') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Function to get men's products
function getMenProducts() {
    return [...products.filter(p => p.category === 'Running' || p.category === 'Casual'), ...menProducts];
}

// Function to get women's products
function getWomenProducts() {
    return [...products.filter(p => p.category === 'Running' || p.category === 'Casual'), ...womenProducts];
}

// Function to get product by ID
function getProductById(id) {
    return allProducts.find(product => product.id === id);
}
