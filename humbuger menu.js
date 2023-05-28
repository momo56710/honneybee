const humMenu = document.querySelector("#hamburger")
const menu = document.querySelector(".MainNav")
humMenu.addEventListener("click", e=>{
    menu.classList.toggle("humnav")
})
