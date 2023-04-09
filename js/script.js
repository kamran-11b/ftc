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
        delay: 3500,
    },

});
const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    loop: true,

});
const swiper5 = new Swiper('.swiper5', {
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


new Splide('#splide-1', {
    type: 'loop',
    autoplay: true,
    perPage: 3,
    gap: "2em",
    focus: 0,
    perPage: 4,
    breakpoints: {
        1024: {
            perPage: 3,

        },
        767: {
            perPage: 2,

        },
        640: {
            perPage: 1,

        },
    },

}).mount();


new Splide('#splide-2', {
    type: string = 'fade',
    perMove: 1,
    drag: 'free',
    autoplay: 'pause',
    slidesToShow: 3,
    slidesToScroll: 1,
    gap: "2em",
}).mount();
