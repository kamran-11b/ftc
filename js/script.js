const hamburger = document.querySelector(".subnav__hamburger")
const popnav = document.querySelector(".popnav");
const navCloseBtn = document.querySelector('.popnav__close');
const buttonShowmore = document.querySelector('.grid__showmore')
const grid__content = document.querySelector('.grid__content');
const grid_shadow = document.querySelector('.grid_shadow');




hamburger.addEventListener("click", () => {
    popnav.style.display = "block";
})
navCloseBtn.addEventListener("click", () => {
    popnav.style.display = "none";
});


let click = false;
if(buttonShowmore != null){
    buttonShowmore.addEventListener('click', () => {
        if (!click) {
            grid__content.style.height = "100%";
            grid__content.style.overflow = "hidden";
            grid_shadow.style.opacity = "0";
            buttonShowmore.textContent = "Show less";
            click = true;
        } else {
            grid__content.style.height = "50rem";
            grid_shadow.style.opacity = "1";
            buttonShowmore.textContent = "Show More";
            click = false;
    
        }
    });
}

var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true)
        VanillaCounter();
}, {
    threshold: [0]
});

observer.observe(document.querySelector(".achivement"));