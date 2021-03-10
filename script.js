let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}


//  ===== Open Burger Menu =====

let openBurgerMenu = document.querySelector('.burger-icon')
let burgerMenu = document.querySelector('.box')

openBurgerMenu.addEventListener("click", () => {
    if (burgerMenu.style.display == 'none') {
        burgerMenu.style.display = 'block';
    } else {
        burgerMenu.style.display = "none"
    }
    }) 


// ===== Open Catalog of Burger-menu ====

let openCatalog = document.querySelector(".burger-menu-catalog");
let burgerMenuCatalog = document.querySelector(".burger-menu-dropdown-content")
let iconCloseCatalog = document.querySelector(".close-burger-menu-dropdown-content")

openCatalog.addEventListener("click", () => {
    if (burgerMenuCatalog.style.display == "none") {
        burgerMenuCatalog.style.display = "block"
    }else {
        burgerMenuCatalog.style.display = "none";
    }
})

// ===== Close Catalog of Burger-menu ====

iconCloseCatalog.addEventListener("click", () => {
    if (burgerMenuCatalog.style.display == "block") {
        burgerMenuCatalog.style.display = "none"
    }
})



