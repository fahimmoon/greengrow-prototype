// Sample data
const products = [
    { id: 1, name: "Organic Plant Food", category: "organic", description: "Rich in nutrients for healthy plant growth. Made from natural compost and organic matter.", price: 2499, stock: 50, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Nitrogen Boost", category: "inorganic", description: "High nitrogen formula for leafy growth. Perfect for leafy vegetables and grass.", price: 1999, stock: 75, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Liquid Fertilizer", category: "liquid", description: "Easy-to-apply liquid concentrate. Fast absorption for immediate results.", price: 2999, stock: 30, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Slow-Release Granules", category: "granular", description: "Gradual nutrient release over 3 months. Ideal for long-term feeding.", price: 3499, stock: 40, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Flower Booster", category: "organic", description: "Specially formulated for flowering plants. Enhances bloom size and color.", price: 2299, stock: 60, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Vegetable Mix", category: "inorganic", description: "Balanced nutrients for vegetable gardens. Complete nutrition for all vegetables.", price: 2799, stock: 55, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Compost Tea", category: "organic", description: "Organic liquid fertilizer made from compost. Rich in beneficial microorganisms.", price: 1899, stock: 45, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Bone Meal Fertilizer", category: "organic", description: "Natural source of phosphorus. Promotes strong root development.", price: 1699, stock: 65, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Fish Emulsion", category: "liquid", description: "Organic liquid fertilizer from fish waste. Excellent source of nitrogen.", price: 2199, stock: 35, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Potassium Sulfate", category: "inorganic", description: "High-potassium fertilizer. Improves fruit quality and disease resistance.", price: 2399, stock: 50, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Seaweed Extract", category: "organic", description: "Natural growth stimulant from seaweed. Contains over 60 trace minerals.", price: 2699, stock: 40, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Humic Acid", category: "organic", description: "Improves soil structure and nutrient uptake. Enhances root development.", price: 3199, stock: 35, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Calcium Nitrate", category: "inorganic", description: "Provides calcium and nitrogen. Prevents blossom end rot in tomatoes.", price: 1999, stock: 55, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Magnesium Sulfate", category: "inorganic", description: "Corrects magnesium deficiency. Essential for chlorophyll production.", price: 1599, stock: 70, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Worm Castings", category: "organic", description: "100% organic soil conditioner. Rich in beneficial microbes and nutrients.", price: 2899, stock: 45, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Blood Meal", category: "organic", description: "High nitrogen organic fertilizer. Fast-acting for leafy growth.", price: 1799, stock: 60, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Kelp Meal", category: "organic", description: "Slow-release organic fertilizer. Contains natural growth hormones.", price: 2599, stock: 50, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 18, name: "Epsom Salt", category: "inorganic", description: "Magnesium sulfate for plants. Corrects magnesium deficiency quickly.", price: 1299, stock: 80, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 19, name: "Chicken Manure", category: "organic", description: "Well-composted organic fertilizer. Balanced NPK ratio for all plants.", price: 1499, stock: 65, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Iron Chelate", category: "inorganic", description: "Corrects iron deficiency in plants. Treats yellowing leaves.", price: 2099, stock: 40, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    // Additional products
    { id: 21, name: "pH Soil Tester", category: "tools", description: "Digital soil pH tester for accurate soil analysis. Essential for determining the right fertilizer for your plants.", price: 1599, stock: 100, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 22, name: "Compost Starter", category: "organic", description: "Accelerates decomposition of organic matter. Turn your kitchen scraps into nutrient-rich compost faster.", price: 1299, stock: 75, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 23, name: "Micro Nutrient Blend", category: "inorganic", description: "Complete micronutrient supplement. Provides essential trace elements for optimal plant health.", price: 2299, stock: 50, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 24, name: "Organic Mulch", category: "organic", description: "Premium organic mulch made from recycled wood chips. Helps retain moisture and suppress weeds.", price: 1899, stock: 60, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 25, name: "Fertilizer Spreader", category: "tools", description: "Adjustable broadcast spreader for even fertilizer distribution. Perfect for lawns and large gardens.", price: 2999, stock: 40, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 26, name: "Soil Moisture Meter", category: "tools", description: "Digital moisture meter to prevent over or under watering. Takes the guesswork out of plant care.", price: 1499, stock: 85, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 27, name: "Organic Lawn Food", category: "organic", description: "Safe for pets and children. Promotes thick, green lawn growth without harmful chemicals.", price: 3299, stock: 45, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 28, name: "Calcium Carbonate", category: "inorganic", description: "Raises soil pH for acid-loving plants. Essential for preventing blossom end rot in tomatoes and peppers.", price: 1699, stock: 70, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 29, name: "Neem Cake Fertilizer", category: "organic", description: "Natural pest deterrent and soil conditioner. Cold-pressed from neem seeds for maximum effectiveness.", price: 2499, stock: 55, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 30, name: "Fertilizer Injector", category: "tools", description: "Drip irrigation fertilizer injector. Automatically delivers nutrients with every watering.", price: 3999, stock: 30, image: "https://images.unsplash.com/photo-1597038164126-93d5bd8c33bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

const orders = [
    { id: 1001, customer: "John Doe", date: "2023-06-15", amount: 7497, status: "Completed" },
    { id: 1002, customer: "Jane Smith", date: "2023-06-18", amount: 5298, status: "Processing" },
    { id: 1003, customer: "Robert Johnson", date: "2023-06-20", amount: 10495, status: "Pending" }
];

const users = [
    { id: 1, name: "John Doe", email: "john@example.com", password: "client123", type: "client", regDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", password: "client123", type: "client", regDate: "2023-03-22" },
    { id: 3, name: "Admin User", email: "admin@greengrow.com", password: "admin123", type: "admin", regDate: "2023-01-10" }
];

// Make data globally accessible for the admin dashboard
window.products = products;
window.orders = orders;
window.users = users;

// Also make functions globally accessible for the admin dashboard
window.addToCart = addToCart;
window.updateCartDisplay = updateCartDisplay;

// Sample user profile data
const userProfiles = {
    "john@example.com": {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, City, State 12345",
        memberSince: "2023-01-15",
        type: "client"
    },
    "jane@example.com": {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1 (555) 987-6543",
        address: "456 Oak Ave, Town, State 67890",
        memberSince: "2023-03-22",
        type: "client"
    },
    "admin@greengrow.com": {
        name: "Admin User",
        email: "admin@greengrow.com",
        phone: "+1 (555) 555-5555",
        address: "789 Admin Blvd, City, State 11111",
        memberSince: "2023-01-10",
        type: "admin"
    }
};

// Sample user orders
const userOrdersData = {
    "john@example.com": [
        { id: 1001, date: "2023-06-15", items: 3, amount: 74.97, status: "Completed" },
        { id: 1002, date: "2023-06-18", items: 2, amount: 52.98, status: "Processing" }
    ],
    "jane@example.com": [
        { id: 1003, date: "2023-06-20", items: 1, amount: 104.95, status: "Pending" }
    ],
    "admin@greengrow.com": []
};

// Current user and cart
let currentUser = null;
let cart = [];

// DOM Elements
let loginBtn, registerBtn, adminBtn, profileBtn, logoutBtn;
let loginModal, registerModal, cartModal, productModal, orderDetailsModal;
let closeModals;
let switchToRegister, switchToLogin;
let loginForm, registerForm, productForm;
let productsGrid, cartIcon, cartItems, cartTotal, cartCount;
let adminDashboard, adminProductsTable, adminOrdersTable, adminUsersTable, addProductBtn;
let tabs, tabContents, navLinks;
let sections = {};
let profileBtns, profileTabContents, profileForm, changePasswordBtn;

// Admin Dashboard Elements
let generateReportBtn, productSearch, productCategoryFilter;
let orderSearch, orderStatusFilter;
let userSearch, userTypeFilter;

// Page routing
const pages = {
    home: 'pages/home.html',
    products: 'pages/products.html',
    about: 'pages/about.html',
    blog: 'pages/blog.html',
    testimonials: 'pages/testimonials.html',
    contact: 'pages/contact.html',
    profile: 'pages/profile.html',
    admin: 'pages/admin-dashboard.html',
    checkout: 'pages/checkout.html'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadComponents();
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        getDOMElements();
        setupEventListeners();
        showPage('home');
        updateAuthButtons(); // Initialize auth buttons state
        updateCartDisplay(); // Initialize cart display
        setupMobileMenu(); // Initialize mobile menu functionality
    }, 100);
});

// Load header, footer, and modals
async function loadComponents() {
    // Load header
    const headerResponse = await fetch('components/header.html');
    const headerHTML = await headerResponse.text();
    // Extract only the header content (not the full HTML document)
    const headerContent = headerHTML.substring(
        headerHTML.indexOf('<header>'),
        headerHTML.indexOf('</header>') + 9
    );
    document.getElementById('header-container').innerHTML = headerContent;
    
    // Load footer
    const footerResponse = await fetch('components/footer.html');
    const footerHTML = await footerResponse.text();
    // Extract only the footer content (not the full HTML document)
    const footerContent = footerHTML.substring(
        footerHTML.indexOf('<footer>'),
        footerHTML.indexOf('</footer>') + 9
    );
    document.getElementById('footer-container').innerHTML = footerContent;
    
    // Load modals
    const modalsResponse = await fetch('components/modals.html');
    const modalsHTML = await modalsResponse.text();
    // Extract only the modal content (not the full HTML document)
    const bodyStart = modalsHTML.indexOf('<body>');
    const bodyEnd = modalsHTML.indexOf('</body>');
    const modalsContent = bodyStart !== -1 && bodyEnd !== -1 
        ? modalsHTML.substring(bodyStart + 6, bodyEnd)
        : modalsHTML.substring(
            modalsHTML.indexOf('<!-- Login Modal -->'),
            modalsHTML.indexOf('<!-- Order Details Modal -->') + 30
        );
    document.getElementById('modals-container').innerHTML = modalsContent;
}

// Get DOM elements after components are loaded
function getDOMElements() {
    loginBtn = document.getElementById('loginBtn');
    registerBtn = document.getElementById('registerBtn');
    adminBtn = document.getElementById('adminBtn');
    profileBtn = document.getElementById('profileBtn');
    logoutBtn = document.getElementById('logoutBtn');
    loginModal = document.getElementById('loginModal');
    registerModal = document.getElementById('registerModal');
    cartModal = document.getElementById('cartModal');
    productModal = document.getElementById('productModal');
    orderDetailsModal = document.getElementById('orderDetailsModal');
    closeModals = document.querySelectorAll('.close-modal');
    switchToRegister = document.getElementById('switchToRegister');
    switchToLogin = document.getElementById('switchToLogin');
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    productForm = document.getElementById('productForm');
    productsGrid = document.getElementById('productsGrid');
    cartIcon = document.getElementById('cartIcon');
    cartItems = document.getElementById('cartItems');
    cartTotal = document.getElementById('cartTotal');
    cartCount = document.querySelector('.cart-count');
    adminDashboard = document.getElementById('adminDashboard');
    adminProductsTable = document.getElementById('adminProductsTable');
    adminOrdersTable = document.getElementById('adminOrdersTable');
    adminUsersTable = document.getElementById('adminUsersTable');
    addProductBtn = document.getElementById('addProductBtn');
    tabs = document.querySelectorAll('.tab');
    tabContents = document.querySelectorAll('.tab-content');
    navLinks = document.querySelectorAll('.nav-link');
    
    // Admin Dashboard Elements
    generateReportBtn = document.getElementById('generateReportBtn');
    productSearch = document.getElementById('productSearch');
    productCategoryFilter = document.getElementById('productCategoryFilter');
    orderSearch = document.getElementById('orderSearch');
    orderStatusFilter = document.getElementById('orderStatusFilter');
    userSearch = document.getElementById('userSearch');
    userTypeFilter = document.getElementById('userTypeFilter');
    
    // Profile Elements
    profileBtns = document.querySelectorAll('.profile-nav-link');
    profileTabContents = document.querySelectorAll('.profile-tab-content');
    profileForm = document.getElementById('profileForm');
    changePasswordBtn = document.getElementById('changePasswordBtn');
}

// Set up event listeners
function setupEventListeners() {
    // Modal open/close
    if (loginBtn) loginBtn.addEventListener('click', () => openModal(loginModal));
    if (registerBtn) registerBtn.addEventListener('click', () => openModal(registerModal));
    if (cartIcon) cartIcon.addEventListener('click', () => openModal(cartModal));
    if (adminBtn) adminBtn.addEventListener('click', showAdminDashboard);
    if (profileBtn) profileBtn.addEventListener('click', showProfile);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    
    if (closeModals) {
        closeModals.forEach(closeBtn => {
            closeBtn.addEventListener('click', closeAllModals);
        });
    }
    
    // Switch between login and register modals
    if (switchToRegister) {
        switchToRegister.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', () => {
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
    
    // Form submissions
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (productForm) productForm.addEventListener('submit', handleProductSubmit);
    if (profileForm) profileForm.addEventListener('submit', handleProfileUpdate);
    
    // Admin dashboard tabs
    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
    }
    
    // Profile tabs
    if (profileBtns) {
        profileBtns.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tab = link.getAttribute('data-profile-tab');
                switchProfileTab(tab);
            });
        });
    }
    
    // Navigation
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                
                // Check if user is trying to access admin page without being admin
                if (page === 'admin' && (!currentUser || currentUser.type !== 'admin')) {
                    alert('Access denied. Admin privileges required.');
                    return;
                }
                
                // Check if user is trying to access profile without being logged in
                if (page === 'profile' && !currentUser) {
                    openModal(loginModal);
                    return;
                }
                
                // Check if user is trying to access checkout without being logged in
                if (page === 'checkout' && !currentUser) {
                    openModal(loginModal);
                    return;
                }
                
                showPage(page);
            });
        });
    }
    
    // Add product button
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            if (!currentUser || currentUser.type !== 'admin') {
                alert('Access denied. Admin privileges required.');
                return;
            }
            document.getElementById('productModalTitle').textContent = 'Add New Product';
            document.getElementById('productForm').reset();
            productForm.removeAttribute('data-edit-id');
            // Hide image preview
            document.getElementById('imagePreview').classList.remove('show');
            openModal(productModal);
        });
    }
    
    // Change password button
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            if (!currentUser) {
                alert('Please log in to change your password.');
                return;
            }
            alert('Change password functionality would be implemented here.');
        });
    }
    
    // Admin dashboard enhancements
    if (generateReportBtn) generateReportBtn.addEventListener('click', generateReport);
    if (productSearch) productSearch.addEventListener('input', filterProducts);
    if (productCategoryFilter) productCategoryFilter.addEventListener('change', filterProducts);
    if (orderSearch) orderSearch.addEventListener('input', filterOrders);
    if (orderStatusFilter) orderStatusFilter.addEventListener('change', filterOrders);
    if (userSearch) userSearch.addEventListener('input', filterUsers);
    if (userTypeFilter) userTypeFilter.addEventListener('change', filterUsers);
    
    // Image preview
    const productImage = document.getElementById('productImage');
    if (productImage) {
        productImage.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('previewImage').src = e.target.result;
                    document.getElementById('imagePreview').classList.add('show');
                }
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Attach event listeners to Add to Cart buttons
    // This ensures that any existing buttons on the page get event listeners
    attachAddToCartListeners();
}

// Modal functions
function openModal(modal) {
    if (modal) modal.style.display = 'flex';
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Page navigation
async function showPage(page) {
    const mainContent = document.getElementById('main-content');
    
    try {
        // Load the page content
        const response = await fetch(pages[page]);
        if (!response.ok) throw new Error('Page not found');
        
        const html = await response.text();
        mainContent.innerHTML = html;
        
        // Update active nav link
        if (navLinks) {
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === page) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
        
        // Execute page-specific JavaScript if needed
        switch (page) {
            case 'home':
                // Home page specific initialization
                initializeHomePage();
                break;
            case 'products':
                displayProducts();
                break;
            case 'profile':
                if (currentUser) {
                    loadProfileData();
                } else {
                    showPage('home');
                    openModal(loginModal);
                }
                break;
            case 'admin':
                if (currentUser && currentUser.type === 'admin') {
                    loadAdminProducts();
                    loadAdminOrders();
                    loadAdminUsers();
                    updateAnalytics();
                } else {
                    showPage('home');
                }
                break;
            case 'checkout':
                if (currentUser) {
                    initializeCheckoutPage();
                } else {
                    showPage('home');
                    openModal(loginModal);
                }
                break;
            case 'blog':
                // Blog page specific initialization if needed
                break;
            case 'testimonials':
                // Testimonials page specific initialization if needed
                break;
        }
        
        // Attach event listeners to Add to Cart buttons after page content is loaded
        // Use setTimeout to ensure DOM is fully updated
        setTimeout(() => {
            attachAddToCartListeners();
        }, 0);
    } catch (error) {
        mainContent.innerHTML = '<h2>Page not found</h2><p>The requested page could not be loaded.</p>';
    }
}

// Initialize home page specific functionality
function initializeHomePage() {
    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function() {
            // Find the Products link in the navigation and click it
            const productsLink = document.querySelector('a[data-page="products"]');
            if (productsLink) {
                productsLink.click();
            }
        });
    }
    displayProducts(); // Display best sellers on home page
}

// Display products on the products page
function displayProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}">` : 
                    `<i class="fas fa-seedling large-icon"></i>`}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span class="price">₨${(product.price/100).toFixed(2)}</span>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Event listeners will be attached in showPage function
}

// New function to attach event listeners to Add to Cart buttons
function attachAddToCartListeners() {
    console.log('Attaching event listeners to Add to Cart buttons');
    // Remove existing listeners to prevent duplicates
    document.querySelectorAll('.add-to-cart').forEach(button => {
        console.log('Found Add to Cart button with data-id:', button.getAttribute('data-id'));
        button.removeEventListener('click', handleAddToCart);
        button.addEventListener('click', handleAddToCart);
    });
}

// New function to handle Add to Cart button clicks
function handleAddToCart(e) {
    console.log('Add to Cart button clicked');
    if (!currentUser) {
        console.log('User not logged in, opening login modal');
        openModal(loginModal);
        return;
    }
    const productId = parseInt(e.target.getAttribute('data-id'));
    console.log('Product ID:', productId);
    addToCart(productId);
}

// Cart functions
function addToCart(productId) {
    console.log('Adding product to cart:', productId);
    if (!currentUser) {
        console.log('User not logged in, opening login modal');
        openModal(loginModal);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    console.log('Found product:', product);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Incremented quantity for existing item');
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
        console.log('Added new item to cart');
    }
    
    updateCartDisplay();
    // Show a more subtle notification instead of an alert
    showNotification(`${product.name} added to cart!`);
}

// New function to show notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function updateCartDisplay() {
    if (cartCount) cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (!cartItems) return;
    
    // Show empty cart message if cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty. Add some products!</p>';
        if (cartTotal) cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-image">
                    <i class="fas fa-seedling"></i>
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₨${(item.price/100).toFixed(2)} × ${item.quantity}</p>
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                </div>
                <button class="btn btn-danger remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    if (cartTotal) cartTotal.textContent = `₨${(total/100).toFixed(2)}`;
    
    // Add event listeners to cart controls
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) item.quantity += 1;
            updateCartDisplay();
        });
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== productId);
                }
            }
            updateCartDisplay();
        });
    });
    
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
        });
    });
    
    // Add checkout button functionality
    const checkoutBtn = document.querySelector('.cart-modal .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
}

function handleCheckout() {
    if (!currentUser) {
        openModal(loginModal);
        return;
    }
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Redirect to checkout page
    showPage('checkout');
    closeAllModals();
}

// Authentication functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const userType = document.getElementById('userType').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password && u.type === userType);
    
    if (user) {
        currentUser = user;
        updateAuthButtons();
        closeAllModals();
        alert(`Welcome back, ${user.name}!`);
        
        // Directly redirect admin users to the admin dashboard
        if (userType === 'admin') {
            // Redirect to the new admin dashboard
            window.location.href = 'pages/admin-dashboard.html';
        } else {
            showPage('home');
        }
    } else {
        alert('Invalid credentials or user type mismatch');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const userType = document.getElementById('registerType').value;
    
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    // Create new user
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        type: userType,
        regDate: new Date().toISOString().split('T')[0]
    };
    
    users.push(newUser);
    
    // Create user profile
    userProfiles[email] = {
        name,
        email,
        phone: "",
        address: "",
        memberSince: new Date().toISOString().split('T')[0],
        type: userType
    };
    
    // Create empty orders array for user
    userOrdersData[email] = [];
    
    currentUser = newUser;
    updateAuthButtons();
    closeAllModals();
    alert(`Registration successful! Welcome, ${name}`);
    
    // Directly redirect admin users to the admin dashboard
    if (userType === 'admin') {
        // Redirect to the new admin dashboard
        window.location.href = 'pages/admin-dashboard.html';
    } else {
        showPage('home');
    }
}

function logout() {
    currentUser = null;
    cart = [];
    updateAuthButtons();
    updateCartDisplay();
    showPage('home');
    alert('You have been logged out.');
}

function updateAuthButtons() {
    // Login and Register buttons - shown when not logged in
    if (loginBtn) loginBtn.style.display = currentUser ? 'none' : 'inline-block';
    if (registerBtn) registerBtn.style.display = currentUser ? 'none' : 'inline-block';
    
    // Profile button - shown when logged in
    if (profileBtn) profileBtn.style.display = currentUser ? 'inline-block' : 'none';
    
    // Admin button - shown only when logged in as admin
    if (adminBtn) adminBtn.style.display = (currentUser && currentUser.type === 'admin') ? 'inline-block' : 'none';
    
    // Logout button - shown when logged in
    if (logoutBtn) logoutBtn.style.display = currentUser ? 'inline-block' : 'none';
}

// Admin dashboard functions
function showAdminDashboard() {
    if (!currentUser || currentUser.type !== 'admin') {
        alert('Access denied. Admin privileges required.');
        return;
    }
    // Redirect to the new admin dashboard
    window.location.href = 'pages/admin-dashboard.html';
}

// Add responsive enhancements for mobile devices
function setupMobileEnhancements() {
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Add orientation change handling
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            // Reinitialize any components that might need it
            console.log('Orientation changed, reinitializing components');
        }, 100);
    });
}

// Call mobile enhancements on DOM load
document.addEventListener('DOMContentLoaded', function() {
    setupMobileEnhancements();
});

function switchTab(tabId) {
    // Update active tab
    if (tabs) {
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    // Show active tab content
    if (tabContents) {
        tabContents.forEach(content => {
            if (content.id === `${tabId}Tab`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
    
    // Load data for the active tab
    if (tabId === 'products') loadAdminProducts();
    if (tabId === 'orders') loadAdminOrders();
    if (tabId === 'users') loadAdminUsers();
    if (tabId === 'analytics') updateAnalytics();
}

function loadAdminProducts() {
    if (!adminProductsTable) return;
    
    const searchTerm = productSearch ? productSearch.value.toLowerCase() : '';
    const categoryFilter = productCategoryFilter ? productCategoryFilter.value : '';
    
    adminProductsTable.innerHTML = '';
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === '' || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>
                <div class="product-admin-display">
                    ${product.image ? 
                        `<img src="${product.image}" alt="${product.name}" class="admin-product-image">` : 
                        `<i class="fas fa-seedling"></i>`}
                    <span>${product.name}</span>
                </div>
            </td>
            <td>${product.category}</td>
            <td>₨${(product.price/100).toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>
                <button class="action-btn btn-edit edit-product" data-id="${product.id}">Edit</button>
                <button class="action-btn btn-danger delete-product" data-id="${product.id}">Delete</button>
            </td>
        `;
        adminProductsTable.appendChild(row);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-product').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            editProduct(productId);
        });
    });
    
    document.querySelectorAll('.delete-product').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this product?')) {
                deleteProduct(productId);
            }
        });
    });
}

function loadAdminOrders() {
    if (!adminOrdersTable) return;
    
    const searchTerm = orderSearch ? orderSearch.value.toLowerCase() : '';
    const statusFilter = orderStatusFilter ? orderStatusFilter.value : '';
    
    adminOrdersTable.innerHTML = '';
    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.customer.toLowerCase().includes(searchTerm) || 
                             order.id.toString().includes(searchTerm);
        const matchesStatus = statusFilter === '' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    
    filteredOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>₨${(order.amount/100).toFixed(2)}</td>
            <td>
                <select class="status-select" data-order-id="${order.id}" title="Change order status">
                    <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </td>
            <td>
                <button class="action-btn btn-edit view-order" data-id="${order.id}">View</button>
                <button class="action-btn btn-danger cancel-order" data-id="${order.id}">Cancel</button>
            </td>
        `;
        adminOrdersTable.appendChild(row);
    });
    
    // Add event listeners for status changes
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const orderId = parseInt(select.getAttribute('data-order-id'));
            const newStatus = e.target.value;
            updateOrderStatus(orderId, newStatus);
        });
    });
    
    // Add event listeners for view and cancel buttons
    document.querySelectorAll('.view-order').forEach(button => {
        button.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.getAttribute('data-id'));
            viewOrderDetails(orderId);
        });
    });
    
    document.querySelectorAll('.cancel-order').forEach(button => {
        button.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.getAttribute('data-id'));
            cancelOrder(orderId);
        });
    });
}

function loadAdminUsers() {
    if (!adminUsersTable) return;
    
    const searchTerm = userSearch ? userSearch.value.toLowerCase() : '';
    const typeFilter = userTypeFilter ? userTypeFilter.value : '';
    
    adminUsersTable.innerHTML = '';
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                             user.email.toLowerCase().includes(searchTerm);
        const matchesType = typeFilter === '' || user.type === typeFilter;
        return matchesSearch && matchesType;
    });
    
    filteredUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.type}</td>
            <td>${user.regDate}</td>
            <td>
                <button class="action-btn btn-edit edit-user" data-id="${user.id}">Edit</button>
                <button class="action-btn btn-danger delete-user" data-id="${user.id}" ${user.type === 'admin' ? 'disabled' : ''}>Delete</button>
            </td>
        `;
        adminUsersTable.appendChild(row);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-user').forEach(button => {
        button.addEventListener('click', (e) => {
            const userId = parseInt(e.target.getAttribute('data-id'));
            editUser(userId);
        });
    });
    
    document.querySelectorAll('.delete-user').forEach(button => {
        button.addEventListener('click', (e) => {
            const userId = parseInt(e.target.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this user?')) {
                deleteUser(userId);
            }
        });
    });
}

function updateAnalytics() {
    // Update analytics cards
    const totalProductsEl = document.getElementById('totalProducts');
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalUsersEl = document.getElementById('totalUsers');
    const totalRevenueEl = document.getElementById('totalRevenue');
    
    if (totalProductsEl) totalProductsEl.textContent = products.length;
    if (totalOrdersEl) totalOrdersEl.textContent = orders.length;
    if (totalUsersEl) totalUsersEl.textContent = users.length;
    
    // Calculate total revenue
    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
    if (totalRevenueEl) totalRevenueEl.textContent = `₨${(totalRevenue/100).toFixed(2)}`;
}

function filterProducts() {
    loadAdminProducts();
}

function filterOrders() {
    loadAdminOrders();
}

function filterUsers() {
    loadAdminUsers();
}

function generateReport() {
    alert('Report generation feature would be implemented here. In a real application, this would generate a downloadable report.');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        alert(`Order ${orderId} status updated to ${newStatus}`);
        loadAdminOrders(); // Refresh the orders table
    }
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const orderDetailsContent = document.getElementById('orderDetailsContent');
        if (orderDetailsContent) {
            orderDetailsContent.innerHTML = `
                <div class="order-details">
                    <h3>Order #${order.id}</h3>
                    <div class="order-info">
                        <p><strong>Customer:</strong> ${order.customer}</p>
                        <p><strong>Date:</strong> ${order.date}</p>
                        <p><strong>Amount:</strong> ₨${(order.amount/100).toFixed(2)}</p>
                        <p><strong>Status:</strong> ${order.status}</p>
                    </div>
                    <div class="order-items">
                        <h4>Order Items</h4>
                        <p>Sample order items would be listed here in a real application.</p>
                    </div>
                    <div class="order-actions">
                        <button class="btn btn-primary print-invoice">Print Invoice</button>
                        <button class="btn btn-secondary download-invoice">Download Invoice</button>
                    </div>
                </div>
            `;
            
            // Add event listeners for order actions
            document.querySelector('.print-invoice').addEventListener('click', () => {
                alert('Printing invoice for order #' + order.id);
            });
            
            document.querySelector('.download-invoice').addEventListener('click', () => {
                alert('Downloading invoice for order #' + order.id);
            });
            
            openModal(orderDetailsModal);
        }
    }
}

function cancelOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'Cancelled';
        alert(`Order ${orderId} has been cancelled`);
        loadAdminOrders(); // Refresh the orders table
    }
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    
    // Handle image preview
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    if (product.image) {
        previewImage.src = product.image;
        imagePreview.classList.add('show');
    } else {
        imagePreview.classList.remove('show');
    }
    
    // Store the product ID for updating
    productForm.setAttribute('data-edit-id', productId);
    
    openModal(productModal);
}

function deleteProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
        loadAdminProducts();
        displayProducts(); // Update client view as well
        alert('Product deleted successfully');
    }
}

function handleProductSubmit(e) {
    e.preventDefault();
    
    if (!currentUser || currentUser.type !== 'admin') {
        alert('Access denied. Admin privileges required.');
        return;
    }
    
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const image = document.getElementById('previewImage').src || '';
    
    const editId = productForm.getAttribute('data-edit-id');
    
    if (editId) {
        // Update existing product
        const productIndex = products.findIndex(p => p.id === parseInt(editId));
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex],
                name,
                category,
                description,
                price,
                stock,
                image
            };
        }
        productForm.removeAttribute('data-edit-id');
        alert('Product updated successfully');
    } else {
        // Add new product
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            name,
            category,
            description,
            price,
            stock,
            image
        };
        products.push(newProduct);
        alert('Product added successfully');
    }
    
    closeAllModals();
    loadAdminProducts();
    if (document.getElementById('productsSection')) displayProducts(); // Update client view as well
}

function editUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        alert(`Edit user functionality would be implemented here.\nUser: ${user.name} (${user.email})`);
    }
}

function deleteUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user && user.type !== 'admin') {
        if (confirm(`Are you sure you want to delete user ${user.name}?`)) {
            const index = users.findIndex(u => u.id === userId);
            if (index !== -1) {
                // Remove user profile
                delete userProfiles[user.email];
                delete userOrdersData[user.email];
                
                users.splice(index, 1);
                loadAdminUsers();
                alert(`User ${user.name} deleted successfully`);
            }
        }
    } else {
        alert('Cannot delete admin users');
    }
}

// Profile Functions
function showProfile() {
    if (!currentUser) {
        openModal(loginModal);
        return;
    }
    showPage('profile');
}

function loadProfileData() {
    if (!currentUser) return;
    
    const userProfile = userProfiles[currentUser.email];
    if (!userProfile) return;
    
    // Update profile info
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileType = document.getElementById('profileType');
    
    if (profileName) profileName.textContent = userProfile.name;
    if (profileEmail) profileEmail.textContent = userProfile.email;
    if (profileType) profileType.textContent = userProfile.type === 'admin' ? 'Administrator' : 'Client';
    
    // Update form fields
    const profileFullName = document.getElementById('profileFullName');
    const profileEmailInput = document.getElementById('profileEmailInput');
    const profilePhone = document.getElementById('profilePhone');
    const profileAddress = document.getElementById('profileAddress');
    const memberSince = document.getElementById('memberSince');
    
    if (profileFullName) profileFullName.value = userProfile.name;
    if (profileEmailInput) profileEmailInput.value = userProfile.email;
    if (profilePhone) profilePhone.value = userProfile.phone || '';
    if (profileAddress) profileAddress.value = userProfile.address || '';
    if (memberSince) memberSince.textContent = new Date(userProfile.memberSince).toLocaleDateString();
    
    // Update stats
    const totalOrdersCount = document.getElementById('totalOrdersCount');
    const totalSpent = document.getElementById('totalSpent');
    
    const userOrders = userOrdersData[currentUser.email] || [];
    if (totalOrdersCount) totalOrdersCount.textContent = userOrders.length;
    const totalSpentValue = userOrders.reduce((sum, order) => sum + order.amount, 0);
    if (totalSpent) totalSpent.textContent = `₨${(totalSpentValue/100).toFixed(2)}`;
    
    // Load recent orders
    loadRecentOrders();
    
    // Load all orders
    loadAllOrders();
}

function loadRecentOrders() {
    if (!currentUser) return;
    
    const userOrders = userOrdersData[currentUser.email] || [];
    const recentOrdersTable = document.getElementById('recentOrdersTable');
    if (!recentOrdersTable) return;
    
    recentOrdersTable.innerHTML = '';
    
    // Show only the 3 most recent orders
    const recentOrders = [...userOrders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    
    if (recentOrders.length === 0) {
        recentOrdersTable.innerHTML = '<tr><td colspan="4">No orders found</td></tr>';
        return;
    }
    
    recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.date}</td>
            <td>₨${(order.amount/100).toFixed(2)}</td>
            <td><span class="status ${order.status ? order.status.toLowerCase() : 'pending'}">${order.status || 'Pending'}</span></td>
        `;
        recentOrdersTable.appendChild(row);
    });
}

function loadAllOrders() {
    if (!currentUser) return;
    
    const userOrders = userOrdersData[currentUser.email] || [];
    const allOrdersTable = document.getElementById('allOrdersTable');
    if (!allOrdersTable) return;
    
    allOrdersTable.innerHTML = '';
    
    if (userOrders.length === 0) {
        allOrdersTable.innerHTML = '<tr><td colspan="6">No orders found</td></tr>';
        return;
    }
    
    userOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.date}</td>
            <td>${order.items || 1}</td>
            <td>₨${(order.amount/100).toFixed(2)}</td>
            <td><span class="status ${order.status ? order.status.toLowerCase() : 'pending'}">${order.status || 'Pending'}</span></td>
            <td>
                <button class="action-btn btn-edit view-order" data-id="${order.id}">View</button>
            </td>
        `;
        allOrdersTable.appendChild(row);
    });
    
    // Add event listeners for view buttons
    document.querySelectorAll('.view-order').forEach(button => {
        button.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.getAttribute('data-id'));
            // In a real app, this would show order details
            alert(`Order #${orderId} details would be shown here.`);
        });
    });
}

function switchProfileTab(tabId) {
    // Update active tab
    if (profileBtns) {
        profileBtns.forEach(tab => {
            if (tab.getAttribute('data-profile-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    // Show active tab content
    if (profileTabContents) {
        profileTabContents.forEach(content => {
            if (content.id === `${tabId}Tab`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
}

function handleProfileUpdate(e) {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Please log in to update your profile.');
        return;
    }
    
    // Update user profile data
    const profileFullName = document.getElementById('profileFullName');
    const profileEmailInput = document.getElementById('profileEmailInput');
    const profilePhone = document.getElementById('profilePhone');
    const profileAddress = document.getElementById('profileAddress');
    
    const userProfile = userProfiles[currentUser.email];
    if (userProfile) {
        if (profileFullName) userProfile.name = profileFullName.value;
        if (profileEmailInput) userProfile.email = profileEmailInput.value;
        if (profilePhone) userProfile.phone = profilePhone.value;
        if (profileAddress) userProfile.address = profileAddress.value;
        
        // Update current user name if changed
        if (profileFullName) currentUser.name = profileFullName.value;
    }
    
    // Update display
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    
    if (profileName) profileName.textContent = userProfile.name;
    if (profileEmail) profileEmail.textContent = userProfile.email;
    
    alert('Profile updated successfully!');
}

// Initialize checkout page
function initializeCheckoutPage() {
    // Populate order items
    const orderItems = document.getElementById('orderItems');
    const subtotalEl = document.getElementById('subtotal');
    const shippingCostEl = document.getElementById('shippingCost');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (orderItems) {
        orderItems.innerHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'summary-item';
            itemElement.innerHTML = `
                <span>${item.name} × ${item.quantity}</span>
                <span>₨${itemTotal.toFixed(2)}</span>
            `;
            orderItems.appendChild(itemElement);
        });
        
        // Calculate costs (shipping is free)
        const shippingCost = 0;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + shippingCost + tax;
        
        // Update display with PKR currency
        if (subtotalEl) subtotalEl.textContent = `₨${subtotal.toFixed(2)}`;
        if (shippingCostEl) shippingCostEl.textContent = 'Free';
        if (taxEl) taxEl.textContent = `₨${tax.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `₨${total.toFixed(2)}`;
    }
    
    // Add event listeners
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            placeOrder();
        });
    }
    
    // Pre-fill user information
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    
    if (fullName && currentUser) {
        const userProfile = userProfiles[currentUser.email];
        if (userProfile) {
            fullName.value = userProfile.name;
        }
    }
    
    if (email && currentUser) {
        email.value = currentUser.email;
    }
}

// Place order function
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const phone = document.getElementById('phone').value;
    
    // Validate form
    if (!fullName || !email || !address || !city || !state || !zipCode || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create order
    const orderId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1001;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = 0; // Free shipping
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;
    
    const newOrder = {
        id: orderId,
        customer: fullName,
        date: new Date().toISOString().split('T')[0],
        amount: total,
        status: "Processing"
    };
    
    orders.push(newOrder);
    
    // Add to user's orders
    if (userOrdersData[currentUser.email]) {
        userOrdersData[currentUser.email].push({
            id: orderId,
            date: new Date().toISOString().split('T')[0],
            items: cart.length,
            amount: total,
            status: "Processing"
        });
    }
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    
    // Show confirmation with PKR currency
    alert(`Order #${orderId} placed successfully! Total: ₨${total.toFixed(2)}. You will pay cash on delivery. Thank you for your purchase!`);
    
    // Redirect to home page
    showPage('home');
}

function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Handle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });
}
