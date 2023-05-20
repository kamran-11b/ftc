const hamburger = document.querySelector(".subnav__hamburger")
const popnav = document.querySelector(".popnav");
const navCloseBtn = document.querySelector('.popnav__close');


hamburger.addEventListener("click", () => {
    popnav.style.display = "block";
})
navCloseBtn.addEventListener("click", () => {
    popnav.style.display = "none";
});