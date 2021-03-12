//  ========= Slider =========

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = "slide showing";
}
 
//   ========== Maximize Catalog Image ==========

let catalog = document.querySelectorAll(".catalog-container img");
let closeImage = document.querySelector(".close-image")
let maxImage = document.querySelector(".maximize-image");
let pic = maxImage.appendChild(document.createElement('img'))

catalog.forEach((el) => {
    el.addEventListener("click", () => {
        pic.setAttribute('src', el.src);
        maxImage.style.display = 'block';
        pic.style.width = "500px";
        pic.style.height = "600px";
    })
})

closeImage.addEventListener("click", () => {
    maxImage.style.display = 'none';
    pic.innerHTML = ''
})

//  ===== Open Burger Menu =====

let openBurgerMenu = document.querySelector('.burger-icon')
let burgerMenu = document.querySelector('.box')

openBurgerMenu.addEventListener("click", () => {
    // if (burgerMenu.style.display == 'none') { 
    //     burgerMenu.style.display = 'block';
    // } else {
    //     burgerMenu.style.display = "none"
    // }
    burgerMenu.classList.toggle("box");
})


// ===== Open Catalog of Burger-menu ====

let openCatalog = document.querySelector(".burger-menu-catalog");
let burgerMenuCatalog = document.querySelector(".burger-menu-dropdown-content")
let iconCloseCatalog = document.querySelector(".close-burger-menu-dropdown-content")

openCatalog.addEventListener("click", () => {
    // if (burgerMenuCatalog.style.display == "none") {
    //     burgerMenuCatalog.style.display = "block"
    // }else {
    //     burgerMenuCatalog.style.display = "none";
    // }
    burgerMenuCatalog.classList.toggle('burger-menu-dropdown-content')
})

// ===== Close Catalog of Burger-menu ====

iconCloseCatalog.addEventListener("click", () => {
    // if (burgerMenuCatalog.style.display == "block") {
    //     burgerMenuCatalog.style.display = "none"
    // }
    burgerMenuCatalog.classList.toggle('burger-menu-dropdown-content')
})





