const body = document.querySelector('body');
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

console.log(hamburger)

let clicked = false;
hamburger.addEventListener('click', () => {
    if (!clicked) {
        sidebar.style.transform = "scaleX(1)";
        body.classList.add("stop__scrole");
        clicked = true;
    } else {
        sidebar.style.transform = "scaleX(0)";
        clicked = false;
        body.classList.remove("stop__scrole");
    }
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    },
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },

});

const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },

});
const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    loop: true,

});

new Splide('.splide', {
    type: string = 'fade',
    perMove: 1,
    drag: 'free',
    autoplay: 'pause',
    slidesToShow: 3,
    slidesToScroll: 1
}).mount();