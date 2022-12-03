const navToggle =document.querySelector(".nav-toggle");
const navMenu = document.queryselector(".nav-menu");

nav.Toggle.addEventlistener("click", () => {
        nav.Menu.classList.toggle ("nav-menu_visible");

if (navMenu.classlist.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label", "Cerrar menu");
}else{
    navToggle.setAttribute("aria-label", "Abrir menu");
}
});
