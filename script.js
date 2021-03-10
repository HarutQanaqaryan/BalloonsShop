let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides"); // querySelector
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//  ===== Open Burger Menu =====

let openBurgerMenu = document.querySelector('.burger-icon')
let closeCatalog = document.querySelector(".close-burger-icon")
let burgerMenu = document.querySelector('.box')

openBurgerMenu.addEventListener("click", () => {
    if (burgerMenu.style.display == 'none') {
        burgerMenu.style.display = 'block';
    } 
    if(closeCatalog.style.display == "none"){
        closeCatalog.style.display = "block"
    }
    if(openBurgerMenu.style.display == "block"){
        openBurgerMenu.style.display = "none"
    }
}) 
// ===== Close Burger Menu ====

closeCatalog.addEventListener("click", () => {
    if(burgerMenu.style.display == 'block'){
        burgerMenu.style.display = 'none';
    }
    if(openBurgerMenu.style.display == "none"){
        openBurgerMenu.style.display = "block";
    }
    if(closeCatalog.style.display == "block"){
        closeCatalog.style.display = "none"
    }
})

// ===== Open Catalog of Burger-menu ====

let openCatalog = document.querySelector(".burger-menu-catalog");
let burgerMenuCatalog = document.querySelector(".burger-menu-dropdown-content")

openCatalog.addEventListener("click", () => {
    if (burgerMenuCatalog.style.display == "none") {
        burgerMenuCatalog.style.display = "block"
    }else {
        burgerMenuCatalog.style.display = "none";
    }
})


