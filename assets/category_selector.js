const menuButton = document.getElementById('menu-header-h');
menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  let menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    if(!item.style.display || item.style.display == "none"){
        item.style.display = "block"; 
    }
    else{
        item.style.display = "none"; 
    }
  });
});