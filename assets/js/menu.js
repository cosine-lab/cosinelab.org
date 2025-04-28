document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('nav.menu');
  if (!menu) return;

  const menuParents = menu.querySelectorAll('.menu__item--parent');
  
  // Mobile menu handler
  function setupMobileMenu() {
    menuParents.forEach(parent => {
      const link = parent.querySelector('> .menu__link');
      const submenu = parent.querySelector('> .menu__sublist');
      
      if (!link || !submenu) return;

      link.addEventListener('click', function(e) {
        // Only intercept if it's a parent link on mobile
        if (window.innerWidth <= 767 && submenu) {
          e.preventDefault();
          const wasExpanded = parent.classList.contains('menu__item--expanded');
          
          // Close all menus first
          menuParents.forEach(item => {
            item.classList.remove('menu__item--expanded');
          });
          
          // Open current if it wasn't already open
          if (!wasExpanded) {
            parent.classList.add('menu__item--expanded');
          }
        }
      });
    });

    // Close menus when clicking outside
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target)) {
        menuParents.forEach(item => {
          item.classList.remove('menu__item--expanded');
        });
      }
    });
  }

  // Initialize based on current screen size
  if (window.innerWidth <= 767) {
    setupMobileMenu();
  }

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
      setupMobileMenu();
    } else {
      // Reset all menus on desktop
      menuParents.forEach(item => {
        item.classList.remove('menu__item--expanded');
      });
    }
  });
});