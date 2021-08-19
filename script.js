const menuBtn = document.querySelector('.header__popUp-container');

const factoidBtn = document.querySelector('.interior__factoid-description');
const catalogPopup = document.querySelector('.doorsCatalog__popUp-container');
const closeCatalogPopupBtn = document.querySelector('.doorsCatalog__popUp-close');
const closeFormPopupBtn = document.querySelector('.form__popUp-close');
const sertificationSwiper = document.querySelector('.slider-wrapper');
const sertificationLoop = document.querySelector('.loop-wrapper');
const slideNext = document.querySelector('.slider-next');
const slidePrev = document.querySelector('.slider-prev');
const sliderActiveNumb = document.querySelector('.slider-activeNumb');
const closeSlider = document.querySelector('.slider__close-container');
const formSubmit = document.querySelector('.feedbackForm__inputBlock-submitBtn');
const formSuccessBtn = document.querySelector('.form__success-btn');
const successPopup = document.querySelector('.form__popUp-container');
const nameInput = document.querySelector('.feedbackForm__inputBlock-name');

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

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (isFormValidated()) {
        successPopup.style.display = 'block';
    }
})


const inputName = (e) => {
    e.preventDefault();
    if (`${e.key}`.match(/^[a-zA-Zа-яА-Я_]*$/) && `${e.key}`.length === 1) {
        e.target.value = event.target.value + e.key;
    }

    if (e.code == 'Backspace') {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
}

nameInput.addEventListener('keydown', inputName);

closeFormPopupBtn.addEventListener('click', () => {
    successPopup.style.display = 'none'
})

formSuccessBtn.addEventListener('click', () => {
    successPopup.style.display = 'none'
})

const updateActiveNumb = () => {
    sliderActiveNumb.innerHTML = swiper.activeIndex + 1;
}

const isFormValidated = () => {
    const phoneInput = document.querySelector('.feedbackForm__inputBlock-phone');

    if (!nameInput.value.length) {
        if (!nameInput.classList.contains('c-input-error')) {
            nameInput.classList.add('c-input-error')
        }

        return false;
    } else if (nameInput.classList.contains('c-input-error')) {
        nameInput.classList.remove('c-input-error')
    }

    if (phoneInput.value.indexOf('_') > 0) {
        if (!phoneInput.classList.contains('c-input-error')) {
            phoneInput.classList.add('c-input-error')
        }
        return false;
    } else if (phoneInput.classList.contains('c-input-error')) {
        phoneInput.classList.remove('c-input-error')
    }

    return true;
}

let swiper = new Swiper('.swiper-container', {
    resizeObserver: true,
    on: {transitionEnd: updateActiveNumb},
})