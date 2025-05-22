// OG NFT Collection page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    console.log('OG NFT Collection page loaded');
    
    // Add hover effects for NFT items
    const nftItems = document.querySelectorAll('.nft-item');
    
    nftItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.3s ease';
            }
        });
    });
    
    // Ensure images are loaded properly
    const images = document.querySelectorAll('.nft-item img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            // Remove any default browser styling that might cause white borders
            this.style.maxWidth = '100%';
            this.style.maxHeight = '100%';
        });
        
        // If image fails to load, show a placeholder
        img.addEventListener('error', function() {
            this.src = 'placeholder.png';
            console.log('Image failed to load: ' + this.alt);
        });
    });
});
