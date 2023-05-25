const hamburger = document.querySelector(".subnav__hamburger")
const popnav = document.querySelector(".popnav");
const navCloseBtn = document.querySelector('.popnav__close');


hamburger.addEventListener("click", () => {
    popnav.style.display = "block";
})
navCloseBtn.addEventListener("click", () => {
    popnav.style.display = "none";
});

var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true)
        VanillaCounter();
}, {
    threshold: [0]
});

observer.observe(document.querySelector(".achivement"));