# GreenGrow Organic Fertilizers - Prototype

## Overview
This is a prototype for an organic fertilizer e-commerce website. The application includes both client-facing features and admin functionality.

## Features
- User authentication (login/register)
- Product browsing and shopping cart
- Checkout process
- User profile management
- Admin dashboard with product, order, and user management
- Responsive design

## How to Run
1. Navigate to the project directory
2. Start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and go to `http://localhost:8000`

## User Credentials
### Client Accounts
- Email: john@example.com, Password: client123
- Email: jane@example.com, Password: client123

### Admin Account
- Email: admin@greengrow.com, Password: admin123

## Functionality
### Client Features
- Browse products by category
- Add products to cart
- Manage cart (add/remove items, adjust quantities)
- Proceed to checkout
- View order history
- Update profile information

### Admin Features
- Manage products (add, edit, delete)
- Manage orders (update status, view details)
- Manage users (view, delete)
- View business analytics

## Technical Details
- Built with HTML, CSS, and vanilla JavaScript
- Uses a component-based architecture
- Implements a single-page application (SPA) pattern
- Responsive design for all device sizes
- No external dependencies except Font Awesome for icons

## File Structure
```
├── components/
│   ├── header.html
│   ├── footer.html
│   └── modals.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── pages/
│   ├── home.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   ├── profile.html
│   ├── admin.html
│   └── checkout.html
├── index.html
└── README.md
```

## Limitations
This is a frontend prototype only. It does not include:
- Backend database
- Real payment processing
- Server-side authentication
- Persistent data storage

All data is stored in memory and will be reset when the page is refreshed.