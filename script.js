const menuBtn = document.querySelector('.header__popUp-container');

const factoidBtn = document.querySelector('.interior__factoid-description');
const catalogPopup = document.querySelector('.doorsCatalog__popUp-container');
const closeCatalogPopupBtn = document.querySelector('.doorsCatalog__popUp-close');
const sertificationSwiper = document.querySelector('.slider-wrapper');
const sertificationLoop = document.querySelector('.loop-wrapper');
const slideNext = document.querySelector('.slider-next');
const slidePrev = document.querySelector('.slider-prev');
const sliderActiveNumb = document.querySelector('.slider-activeNumb');
const closeSlider = document.querySelector('.slider__close-container');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__popUp-activeContainer');
})

factoidBtn.addEventListener('click', () => {
    if (window.screen.width > 768) {
        catalogPopup.style.display = 'block'
    }
})

closeCatalogPopupBtn.addEventListener('click', () => {
    if (window.screen.width > 768) {
        catalogPopup.style.display = 'none';
    }
})

sertificationLoop.addEventListener('click', () => {
    sertificationSwiper.classList.add('slider-wrapper-popup');
    document.querySelector('body').style.overflow = 'hidden';
})

closeSlider.addEventListener('click', () => {
    sertificationSwiper.classList.remove('slider-wrapper-popup');
    document.querySelector('body').style.overflow = 'initial';
})

slideNext.addEventListener('click', () => {
    swiper.slideNext();
    updateActiveNumb();
})

slidePrev.addEventListener('click', () => {
    swiper.slidePrev();
    updateActiveNumb();
})

function updateActiveNumb() {
    console.log(swiper.activeIndex + 1)
    sliderActiveNumb.innerHTML = swiper.activeIndex + 1;
}

let swiper = new Swiper('.swiper-container', {
    resizeObserver: true,
    on: {transitionEnd: updateActiveNumb},
})