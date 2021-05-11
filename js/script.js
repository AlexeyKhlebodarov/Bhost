//BurgerMenu

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = document.querySelector(`${selector}-button`);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('burgerMenu_active');
    });
}

burgerMenu('.burgerMenu');


//HeaderSlider

let slider = document.querySelector('.slider');
let inner = document.querySelector('.slider-inner');
let slides = document.querySelectorAll('.slider-inner__item');
let phone = window.matchMedia("(max-width: 480px)");
let counter = 0;
let offset;

function init() {
    width = slider.offsetWidth;
    inner.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        if (phone.matches) {
            item.style.width = width + 'px';
        } else {
            item.style.width = width / 3 + 'px';
        }
        item.style.height = 'auto';
        item.style.padding = '0 5px';
    });
}

init();
window.addEventListener('resize', init);

document.querySelector('.fa-chevron-left').addEventListener('click', function () {
    counter--;
    if (counter < 0 && !(phone.matches)) {
        counter = slides.length / 3 - 1;
    } else if (counter < 0 && phone.matches) {
        counter = slides.length - 1;
    }
    inner.style.transform = `translate(-${counter * width}px)`;
});

document.querySelector('.fa-chevron-right').addEventListener('click', function () {
    counter++;
    if (counter >= slides.length / 3 && !(phone.matches)) {
        counter = 0;
    } else if (counter >= slides.length && phone.matches) {
        counter = 0;
    }
    inner.style.transform = `translate(-${counter * width}px)`;
});


//PriceSlider
// inner.style.transform = `translate(-${counter * ((phone.matches) ? width : width /= 3)}px)`;