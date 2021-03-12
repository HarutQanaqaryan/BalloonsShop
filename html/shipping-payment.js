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