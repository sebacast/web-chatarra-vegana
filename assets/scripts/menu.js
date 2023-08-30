const menuButton = document.getElementById('menu-header-h');
const menuItemButtons = document.querySelectorAll('.menu-item > a');

//evento click en menu hamburguesa
menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  hideShowMenuItems();
});
//evento click en links del menu
menuItemButtons.forEach(function(menuItemButton) {
  menuItemButton.addEventListener('click', function(e) {
    //e.preventDefault(); //mmm pegriloso, muy pegriloso!
    hideShowMenuItems();
  });
});

//función para mostrar/ocultar elementos del menu (busca por clase -> .menu-item)
function hideShowMenuItems(){
  let menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    if(!item.style.display || item.style.display == "none"){
        item.style.display = "block"; 
    }
    else{
        item.style.display = "none"; 
    }
  });
}