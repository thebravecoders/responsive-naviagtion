const humburgerMenuBtn = document.querySelector('.nav__humburger-btn');
const navigation = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');

const NAVIGATION_BTN_ICON = {
      OPEN: '<i class="ri-menu-2-line"></i>',
      CLOSE: '<i class="ri-close-line"></i>'
}

humburgerMenuBtn.addEventListener('click', () => {

      const isOpen = navigation.classList.toggle('nav__open');
      humburgerMenuBtn.innerHTML = isOpen ? NAVIGATION_BTN_ICON.CLOSE : NAVIGATION_BTN_ICON.OPEN;

})


navLink.forEach(link => {
      link.addEventListener('click', () => {
            navigation.classList.remove('nav__open');
            humburgerMenuBtn.innerHTML = NAVIGATION_BTN_ICON.OPEN
      })
})