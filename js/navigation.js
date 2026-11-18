// Navigation dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const artWorksButton = document.querySelector('.art-works-toggle');
  const artWorksDropdown = document.getElementById('artWorksDropdown');
  const container = document.querySelector('.nav-dropdown-container');

  if (!artWorksButton || !artWorksDropdown || !container) {
    return; // Navigation not present on this page
  }

  // Toggle dropdown on click
  artWorksButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isOpen = container.classList.contains('active');
    
    // Close all dropdowns
    document.querySelectorAll('.nav-dropdown-container.active').forEach(d => {
      d.classList.remove('active');
      d.querySelector('.nav-dropdown-menu').classList.remove('open');
    });
    
    // Toggle this dropdown
    if (!isOpen) {
      container.classList.add('active');
      artWorksDropdown.classList.add('open');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!container.contains(e.target)) {
      container.classList.remove('active');
      artWorksDropdown.classList.remove('open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      container.classList.remove('active');
      artWorksDropdown.classList.remove('open');
    }
  });

  // Close when clicking a dropdown link
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', function() {
      container.classList.remove('active');
      artWorksDropdown.classList.remove('open');
    });
  });
});
