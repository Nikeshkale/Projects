
const navbar = document.getElementById('navbar')
const menu = document.getElementById("menu");

console.log(menu);


function opensidebar() {
    console.log("click");
    
    navbar.classList.remove('remove')
    // navbar.id = "closemenu";
    // navbar.classList.add("ri-menu-3-fill");
    navbar.classList.add('show')
    // navbar.classList.add('closemenu')
    // menu.style.display = "none";
    // closemenu.style.display = "block";
    
}

function closesidebar() {
    console.log("click");
    
    navbar.classList.add('remove')
    // navbar.classList.add("ri-menu-3-fill");
    navbar.classList.remove('show')
    // menu.style.display = "block";
    // closemenu.style.display = "none";
    
}