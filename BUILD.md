# GreenGrow Admin Panel Build and Deployment Guide

## Overview
This document explains how to build and deploy the GreenGrow Admin Panel. Since this is a static website built with HTML, CSS, and JavaScript, the build process is straightforward.

## Prerequisites
- Git installed on your system
- Node.js (optional, for advanced build processes)
- A web server or hosting service

## Build Process

### For Development
1. Clone the repository:
   ```bash
   git clone https://github.com/fahimmoon/greengrow-prototype.git
   ```

2. Navigate to the project directory:
   ```bash
   cd greengrow-prototype
   ```

3. Start a local development server:
   ```bash
   python -m http.server 8000
   ```
   Or use any other local server tool like Live Server extension in VS Code.

### For Production
1. Ensure all changes are committed and pushed to the main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Run the deployment script:
   - On Unix/Linux/Mac:
     ```bash
     ./deploy.sh
     ```
   - On Windows:
     ```cmd
     deploy.bat
     ```

## Deployment Options

### GitHub Pages
1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Other Hosting Services
- **Netlify**: Drag and drop the project folder to Netlify
- **Vercel**: Import the Git repository to Vercel
- **Firebase**: Use `firebase deploy` after initializing Firebase in the project
- **Traditional Web Server**: Upload all files to your web server

## Project Structure
```
greengrow-prototype/
├── components/
│   ├── header.html
│   ├── footer.html
│   └── modals.html
├── css/
│   ├── admin.css
│   └── styles.css
├── js/
│   └── main.js
├── pages/
│   ├── admin-dashboard.html
│   ├── home.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   ├── profile.html
│   └── checkout.html
├── index.html
├── README.md
├── BUILD.md
├── deploy.sh
└── deploy.bat
```

## Key Features Deployed
1. Fully responsive admin dashboard
2. Product management system
3. Order management system
4. User management system
5. Analytics and reporting features
6. System settings configuration

## Accessing the Admin Panel
After deployment, the admin panel can be accessed at:
`https://[your-domain]/pages/admin-dashboard.html`

Admin credentials:
- Email: admin@greengrow.com
- Password: admin123

## Troubleshooting
1. **CSS not loading**: Ensure all CSS files are in the correct path
2. **JavaScript errors**: Check browser console for errors
3. **404 errors**: Verify file paths in HTML files
4. **Admin panel not accessible**: Ensure the user is logged in as admin

## Support
For any issues or questions, please contact the development team or create an issue in the GitHub repository.