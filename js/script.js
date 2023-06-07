const hamburger = document.querySelector(".subnav__hamburger")
const popnav = document.querySelector(".popnav");
const navCloseBtn = document.querySelector('.popnav__close');
const buttonShowmore = document.querySelector('.grid__showmore')
const grid__content = document.querySelector('.grid__content');
const grid_shadow = document.querySelector('.grid_shadow');
const achivementSection = document.querySelector('.achivement')


hamburger.addEventListener("click", () => {
    popnav.style.display = "block";
})
navCloseBtn.addEventListener("click", () => {
    popnav.style.display = "none";
});


let click = false;
if(buttonShowmore!=null){
    buttonShowmore.addEventListener('click', () => {
        if (!click) {
            grid__content.classList.add('expend');
            grid_shadow.style.opacity = "0";
            buttonShowmore.textContent = "Show less";
            buttonShowmore.style.transform = "translate(-50%, 100%)";
            click = true;
        } else {
            grid__content.classList.remove('expend');
            grid_shadow.style.opacity = "1";
            buttonShowmore.textContent = "Show More";
            buttonShowmore.style.transform = "translate(-50%)";
            click = false;
        }
    });
}

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true)
        VanillaCounter();
}, {
    threshold: [0]
});

if(achivementSection != null){
    observer.observe(document.querySelector(".achivement"));
}