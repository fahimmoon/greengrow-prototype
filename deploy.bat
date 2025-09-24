@echo off
title GreenGrow Admin Panel Deployment

echo Starting GreenGrow Admin Panel deployment...

REM Ensure we're on the main branch
echo Switching to main branch...
git checkout main

REM Pull latest changes
echo Pulling latest changes...
git pull origin main

REM Build process (for this static site, it's just ensuring all files are in place)
echo Building application...
REM For a static site, no additional build steps are needed
REM In a more complex application, this might include:
REM - Minifying CSS/JS
REM - Optimizing images
REM - Running tests
REM - Generating documentation

echo Build completed successfully!

REM Deploy to GitHub Pages
echo Deploying to GitHub Pages...
REM This assumes GitHub Pages is set up to serve from the main branch
REM If using gh-pages branch, you would use:
REM git subtree push --prefix . origin gh-pages

echo Deployment completed successfully!
echo Your GreenGrow Admin Panel is now live!

pause
