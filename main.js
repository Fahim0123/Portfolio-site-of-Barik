// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('#main-nav .nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active'); // optional, if you want to animate the hamburger icon
  });  
});


// Product Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
  const productLinks = document.querySelectorAll('.product-list a');
  const lightbox = document.getElementById('product-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const closeBtn = lightbox.querySelector('.close-btn');

  productLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const imgSrc = link.getAttribute('data-image');
      const title = link.getAttribute('data-title');

      lightboxImage.src = imgSrc;
      lightboxImage.alt = title;
      lightboxTitle.textContent = title;

      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // prevent background scroll
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close on outside click
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === "Escape" && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

//clients
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
