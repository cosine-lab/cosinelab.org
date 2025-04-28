document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.querySelector('nav.menu');
  const toggle = document.querySelector('.menu-toggle') || document.querySelector('.js-menu-toggle');

  if (nav && toggle) {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      nav.classList.toggle('menu--open');
    });
  }

  // ONLY listen for clicks on the arrow span
  nav.querySelectorAll('.menu__item--parent > .menu__link > .menu__arrow')
    .forEach(arrow => {
      arrow.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();  // don’t let it bubble up to the <a>
        arrow.closest('.menu__item--parent')
             .classList.toggle('menu__item--expanded');
      });
    });
});
