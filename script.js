/* toggle mobile menu */
const burgerBtn = document.querySelector('#burger')
const headerNav = document.querySelector('.header__nav-list')
const mobileMenu = document.querySelector('#mobile-menu')

burgerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav-list--hidden')
    mobileMenu.classList.toggle('mobile-menu--open')
    this.classList.toggle('header__burger--active')
})
