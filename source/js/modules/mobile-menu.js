const menu = document.querySelector('[data-menu=mobile-menu-wrapper]');
const menuButton = document.querySelector('[data-menu=menu-button]');
const menuElements = document.querySelectorAll('[data-menu]');

const initMenu = () => {
  if (menu && menuButton) {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Escape') {
        closeMenu();
      }
    };

    let isOpen = false;

    menuElements.forEach((element) => {
      element.classList.remove('no-js');
    });

    const openMenu = () => {
      menuElements.forEach((element) => {
        element.classList.add('is-open');
      });

      menuButton.ariaLabel = 'Закрыть меню';
      menuButton.ariaPressed = true;
      isOpen = true;
      document.body.classList.add('scroll-lock');
      document.addEventListener('click', closeMenu);
      document.addEventListener('keydown', handleKeyPress);
    };

    const closeMenu = () => {
      menuElements.forEach((element) => {
        element.classList.remove('is-open');
      });

      menuButton.ariaLabel = 'Открыть меню';
      menuButton.ariaPressed = false;
      isOpen = false;
      document.body.classList.remove('scroll-lock');
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', handleKeyPress);
    };

    closeMenu();

    menuButton.addEventListener('click', (evt) => {
      evt.stopPropagation();

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener('click', (evt) => {
      if (!evt.target.href) {
        evt.stopPropagation();
      }
    });
  }
};

export {initMenu};
