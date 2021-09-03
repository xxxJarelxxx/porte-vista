const menuBtn = document.querySelector('.header__popUp-container');
const body = document.querySelector('body')
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


document.querySelector('.form__phone').addEventListener('focusout', (e) => {
    if (e.currentTarget.value == "+7 (___) ___-__-__") {
        e.currentTarget.style.color =  "#B1B1B1";
    } else {
        e.currentTarget.style.color =  "#202020";
    }
})

document.querySelector('.form__phone').addEventListener('focusin', (e) => {
    e.currentTarget.style.color =  "#202020";
})

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__popUp-activeContainer');
})

factoidBtn.addEventListener('click', () => {
    if (window.screen.width > 768) {
        catalogPopup.style.display = 'block';
        body.style.overflow = 'hidden';
    }
})
var p = document.createElement("p");
p.innerHTML = window.screen.width;
factoidBtn.appendChild(p);

factoidBtn.addEventListener('touchstart', () => {
    if (window.screen.width > 768) {
        catalogPopup.style.display = 'block';
        body.style.overflow = 'hidden';
    }
})

closeCatalogPopupBtn.addEventListener('click', () => {
    if (window.screen.width > 768) {
        catalogPopup.style.display = 'none';
        body.style.overflow = 'initial';
    }
})

sertificationLoop.addEventListener('click', () => {
    sertificationSwiper.classList.add('slider-wrapper-popup');
    body.style.overflow = 'hidden';
})

closeSlider.addEventListener('click', () => {
    sertificationSwiper.classList.remove('slider-wrapper-popup');
    body.style.overflow = 'initial';
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
    let isValidated = true;
    if (!nameInput.value.length) {
        if (!nameInput.classList.contains('c-input-error')) {
            nameInput.classList.add('c-input-error')
        }

        isValidated = false;
    } else if (nameInput.classList.contains('c-input-error')) {
        nameInput.classList.remove('c-input-error')
    }

    if (phoneInput.value.indexOf('_') > 0) {
        if (!phoneInput.classList.contains('c-input-error')) {
            phoneInput.classList.add('c-input-error')
        }
        isValidated = false;
    } else if (phoneInput.classList.contains('c-input-error')) {
        phoneInput.classList.remove('c-input-error')
    }

    return isValidated;
}

let swiper = new Swiper('.swiper-container', {
    resizeObserver: true,
    on: {transitionEnd: updateActiveNumb},
})

let doorsSwiper = new Swiper('.doorsSwiper-container', {
    slidesPerView: 3.3,
    spaceBetween: 15,
})