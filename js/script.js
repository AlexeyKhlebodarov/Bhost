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

function init() {
    width = slider.offsetWidth;
    inner.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        if (!phone.matches) {
            item.style.width = width / 3 + 'px';
        } else if (phone.matches) {
            item.style.width = width + 'px';
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

// PriceSlider

let priceSlider = document.querySelector('.price__slider');
let priceInner = document.querySelector('.price__slider-inner');
let priceSlides = document.querySelectorAll('.price__slider-item');
let points = document.querySelectorAll('.price__slider-point');
let priceCounter = 0;
let slideIndex = 0;

function priceInit() {
    priceWidth = priceSlider.offsetWidth;
    priceInner.style.width = priceWidth * priceSlides.length + 'px';
    priceSlides.forEach(item => {
        item.style.width = priceWidth + 'px';
        item.style.height = 'auto';
        item.style.padding = '0 5px';
    });
}

priceInit();
window.addEventListener('resize', priceInit);

document.querySelector('.fa-long-arrow-alt-left').addEventListener('click', function () {
    points[slideIndex].style.backgroundColor = "transparent";
    if (slideIndex == 0) {
        slideIndex = points.length;
    }
    slideIndex--;
    points[slideIndex].style.backgroundColor = "#31aae2";
    priceCounter--;
    if (priceCounter < 0) {
        priceCounter = priceSlides.length - 1;
    }
    priceInner.style.transform = `translate(-${priceCounter * priceWidth}px)`;
});

document.querySelector('.fa-long-arrow-alt-right').addEventListener('click', function () {
    slideIndex++;
    points[slideIndex - 1].style.backgroundColor = "transparent";
    if (slideIndex == points.length) {
        slideIndex = 0;
    }
    points[slideIndex].style.backgroundColor = "#31aae2";
    priceCounter++;
    if (priceCounter >= priceSlides.length) {
        priceCounter = 0;
    }
    priceInner.style.transform = `translate(-${priceCounter * priceWidth}px)`;
});


//Tabs

function openTab() {
    let tabcontent = document.querySelectorAll(".howToChoose-tabs__content");
    let tablinks = document.querySelectorAll(".howToChoose-tabs__item");

    for (let i = 0; i < tablinks.length; i++) {
        let tablinksText = tablinks[i].textContent.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        tablinks[i].addEventListener('click', function () {
            tablinks.forEach(tablink => tablink.classList.remove("howToChoose-tabs__item_active"));
            tablinks[i].classList.add("howToChoose-tabs__item_active");
            tabcontent.forEach(item => item.style.display = "none")
            document.getElementById(tablinksText).style.display = "block";
        });
    }

    tabcontent[0].style.display = "block";
    tablinks[0].classList.add("howToChoose-tabs__item_active");
}
openTab();


//Accordion

let acc = document.querySelectorAll(".faq-items__button");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("faq-items__button_active");
        let content = this.nextElementSibling;
        content.classList.toggle("faq-items__content_active");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}