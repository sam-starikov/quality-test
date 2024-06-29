/* toggle mobile menu */
const burgerBtn = document.querySelector('#burger')
const headerNav = document.querySelector('.header__nav-list')
const mobileMenu = document.querySelector('#mobile-menu')
const closeMobileMenuBtn = document.querySelector('.mobile-menu__btn-close')

burgerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav-list--hidden')
    mobileMenu.classList.toggle('mobile-menu--open')
    this.classList.toggle('header__burger--active')
})
closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--open')
    burgerBtn.classList.remove('header__burger--active')
    headerNav.classList.remove('header__nav-list--hidden')
})
/* end */

/* swiper */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    // autoplay: true,

    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },
})
/* end */
