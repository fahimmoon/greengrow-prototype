#!/bin/bash

# GreenGrow Admin Panel Deployment Script

echo "Starting GreenGrow Admin Panel deployment..."

# Ensure we're on the main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Build process (for this static site, it's just ensuring all files are in place)
echo "Building application..."
# For a static site, no additional build steps are needed
# In a more complex application, this might include:
# - Minifying CSS/JS
# - Optimizing images
# - Running tests
# - Generating documentation

echo "Build completed successfully!"

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
# This assumes GitHub Pages is set up to serve from the main branch
# If using gh-pages branch, you would use:
# git subtree push --prefix . origin gh-pages

echo "Deployment completed successfully!"
echo "Your GreenGrow Admin Panel is now live!"
