/**
 * @fileoverview Protection utilities for the application
 * @copyright 2025 Vinay. All Rights Reserved.
 * Unauthorized copying, modification, or distribution of this code is strictly prohibited.
 */

// Add watermark to all images
const addWatermarkToImages = () => {
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    img.style.position = 'relative';
    
    // Skip if already watermarked
    if (img.getAttribute('data-watermarked') === 'true') continue;
    const watermark = document.createElement('div');
    watermark.style.position = 'absolute';
    watermark.style.bottom = '5px';
    watermark.style.right = '5px';
    watermark.style.backgroundColor = 'rgba(0,0,0,0.5)';
    watermark.style.color = 'white';
    watermark.style.padding = '2px 5px';
    watermark.style.borderRadius = '3px';
    watermark.style.fontSize = '10px';
    watermark.textContent = '© Vinay';
    
    img.style.position = 'relative';
    img.setAttribute('data-watermarked', 'true');
  }
};

// Detect and prevent iframe embedding
const preventFraming = () => {
  if (window.self !== window.top) {
    // Redirect if the page is being framed
    window.top.location = window.self.location;
  }
};

// Initialize protection
const initProtection = () => {
  // Run immediately
  preventFraming();
  
  // Run after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addWatermarkToImages);
  } else {
    addWatermarkToImages();
  }
  
  // Re-run periodically to catch dynamically added content
  setInterval(addWatermarkToImages, 2000);
};

export default initProtection;
