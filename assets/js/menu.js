document.addEventListener('DOMContentLoaded', function() {
  // Only on mobile widths
  if (window.innerWidth <= 767) {
    // Toggle .menu__item--expanded on parent <li>
    document.querySelectorAll('nav.menu .menu__item--parent > .menu__link')
      .forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          this.closest('.menu__item--parent')
              .classList.toggle('menu__item--expanded');
        });
      });

    // Click outside to close all
    document.addEventListener('click', function(e) {
      if (!e.target.closest('nav.menu .menu__item--parent')) {
        document.querySelectorAll('nav.menu .menu__item--parent')
          .forEach(item => item.classList.remove('menu__item--expanded'));
      }
    });
  }
});
