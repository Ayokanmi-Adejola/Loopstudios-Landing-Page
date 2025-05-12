document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');
  const body = document.body;

  // Create mobile nav element
  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');

  // Clone navigation links for mobile
  const navLinks = document.querySelector('.nav-links').cloneNode(true);
  navLinks.classList.add('mobile-nav-links');

  // Add logo to mobile nav
  const logo = document.querySelector('.logo').cloneNode(true);

  // Add elements to mobile nav
  mobileNav.appendChild(logo);
  mobileNav.appendChild(navLinks);

  // Add mobile nav to body
  body.appendChild(mobileNav);

  // Initially hide the close icon
  close.style.display = 'none';

  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');

    // Toggle between hamburger and close icons
    if (hamburger.style.display === 'none') {
      hamburger.style.display = 'block';
      close.style.display = 'none';
      body.style.overflow = 'auto'; // Enable scrolling
    } else {
      hamburger.style.display = 'none';
      close.style.display = 'block';
      body.style.overflow = 'hidden'; // Disable scrolling when menu is open
    }
  });

  // Close mobile nav when clicking on a link
  const mobileNavLinks = mobileNav.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      hamburger.style.display = 'block';
      close.style.display = 'none';
      body.style.overflow = 'auto';
    });
  });

  // Handle "See all" button click
  const seeAllBtn = document.querySelector('.btn');
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', () => {
      // This would typically load more content or navigate to a gallery page
      // For this demo, we'll just log a message
      console.log('See all button clicked');
    });
  }
});