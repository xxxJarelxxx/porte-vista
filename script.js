const menuBtn = document.querySelector('.header__popUp-container');

const factoidBtn = document.querySelector('.interior__factoid-description');
const catalogPopup = document.querySelector('.doorsCatalog__popUp-container');
const closeCatalogPopupBtn = document.querySelector('.doorsCatalog__popUp-close');
const sertificationSwiper = document.querySelector('.slider-wrapper');
const sertificationLoop = document.querySelector('.loop-wrapper');


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
