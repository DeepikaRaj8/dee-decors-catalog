// Gallery rendering and image error handling
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.gallery-container');
  if (container && container.dataset.type) {
    renderGalleryPage(container.dataset.type);
  }
});

function renderGalleryPage(pageType) {
  const container = document.querySelector('.gallery-container');
  const data = artworkDatabase[pageType];
  
  if (!data) return;
  
  data.forEach(artwork => {
    const entry = createArtEntry(artwork);
    container.appendChild(entry);
  });
  
  setupImageErrorHandling();
}

function createArtEntry(artwork) {
  const article = document.createElement('article');
  article.className = 'art-entry';
  
  article.innerHTML = `
    <div class="art-entry-image-wrapper">
      <img 
        src="${artwork.image}" 
        alt="${artwork.imageAlt}"
        class="art-entry-image"
      />
    </div>
    
    <div class="art-entry-details">
      <h2 class="art-entry-title">${artwork.title}</h2>
      <p class="art-entry-description">${artwork.description}</p>
      
      <div class="art-entry-meta">
        <div class="meta-item">
          <span class="meta-label">Materials:</span>
          <span class="meta-value">${artwork.materials}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Dimensions:</span>
          <span class="meta-value">${artwork.dimensions}</span>
        </div>
      </div>
    </div>
  `;
  
  return article;
}

function setupImageErrorHandling() {
  document.querySelectorAll('.art-entry-image').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'pics/placeholder.webp';
      this.alt = 'Image unavailable';
      this.classList.add('image-error');
    });
  });
}
