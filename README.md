# Frontend Mentor - Loopstudios Landing Page Solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Loopstudios Landing Page Screenshot](./preview.jpg)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for mobile navigation

### What I learned

This project helped me strengthen my skills in creating responsive layouts using CSS Grid and Flexbox. I particularly focused on implementing a clean, modern design that adapts well to different screen sizes.

Some key learnings include:

- Creating responsive grid layouts that change from multi-column to single-column on mobile
- Implementing hover effects with smooth transitions
- Building an accessible mobile navigation menu
- Using CSS pseudo-elements for overlay effects

Here are some code snippets I'm proud of:

```html
<!-- Responsive image handling with separate mobile/desktop versions -->
<div class="grid-item">
  <img src="./images/desktop/image-deep-earth.jpg" alt="Deep earth" class="desktop-img">
  <img src="./images/mobile/image-deep-earth.jpg" alt="Deep earth" class="mobile-img">
  <h3>Deep earth</h3>
</div>
```

```css
/* Hover effect for grid items */
.grid-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
  transition: background 0.3s ease;
}

.grid-item:hover::before {
  background: rgba(255, 255, 255, 0.7);
}

.grid-item h3 {
  position: absolute;
  bottom: 32px;
  left: 32px;
  color: var(--white);
  font-family: var(--font-josefin);
  font-weight: 300;
  font-size: 2rem;
  text-transform: uppercase;
  z-index: 2;
  max-width: 150px;
  transition: color 0.3s ease;
}

.grid-item:hover h3 {
  color: var(--black);
}
```

```js
// Mobile navigation toggle with smooth transitions
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
```

### Continued development

In future projects, I want to focus on:

- Implementing more advanced animations and transitions
- Improving accessibility features
- Exploring CSS Grid for more complex layouts
- Optimizing performance for faster load times
- Adding more interactive elements with JavaScript

### Useful resources

- [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me understand Flexbox layout concepts.
- [MDN Web Docs on CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - Comprehensive guide to CSS Grid that I referenced frequently.
- [Kevin Powell's YouTube Channel](https://www.youtube.com/kevinpowell) - Kevin's videos on CSS techniques were very helpful for implementing responsive designs.

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
