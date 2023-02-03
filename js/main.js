//arrowup

const arrowUp = document.querySelector(".arrowfixedright");
arrowUp.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//burgermenu

const burgerMenu = document.querySelector(".burgermenu");
    burgerMenu.addEventListener("click", function() {
        burgerMenu.classList.toggle("change");
    });